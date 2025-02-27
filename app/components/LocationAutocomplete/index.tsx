import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, Loader } from "lucide-react";

/**
 * Location Storage Utility
 *
 * A simple utility for storing and retrieving location data using the browser's localStorage API.
 * This allows for persistent storage of location information without requiring external packages.
 */

export interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
  timestamp: number;
  name?: string;
}

const STORAGE_KEY = "user_locations";

/**
 * Save a location to localStorage
 */
export const saveLocation = (location: LocationData): void => {
  try {
    // Get existing locations or initialize empty array
    const existingLocations = getLocations();

    // Add new location
    existingLocations.push(location);

    // Save back to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingLocations));
  } catch (error) {
    console.error("Failed to save location:", error);
  }
};

/**
 * Get all saved locations from localStorage
 */
export const getLocations = (): LocationData[] => {
  try {
    const locationsJson = localStorage.getItem(STORAGE_KEY);
    return locationsJson ? JSON.parse(locationsJson) : [];
  } catch (error) {
    console.error("Failed to retrieve locations:", error);
    return [];
  }
};

/**
 * Clear all saved locations
 */
export const clearLocations = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear locations:", error);
  }
};

/**
 * Get current location using browser's Geolocation API
 */
export const getCurrentLocation = (): Promise<
  Pick<LocationData, "latitude" | "longitude">
> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

interface LocationSuggestion {
  id: string;
  name: string;
  displayName: string;
  latitude: number;
  longitude: number;
}

/**
 * Search for locations using OpenStreetMap Nominatim API
 * @param query Search query string
 * @returns Promise with location suggestions
 */
export const searchLocations = async (
  query: string
): Promise<LocationSuggestion[]> => {
  if (!query || query.length < 3) return [];

  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: query,
          format: "json",
          addressdetails: 1,
          limit: 5,
        },
        headers: {
          "Accept-Language": "en",
          "User-Agent": "LocationTrackerApp",
        },
      }
    );

    return response.data.map((item: any) => ({
      id: item.place_id,
      name: item.name || getShortName(item.display_name),
      displayName: item.display_name,
      latitude: parseFloat(item.lat),
      longitude: parseFloat(item.lon),
    }));
  } catch (error) {
    console.error("Error searching for locations:", error);
    return [];
  }
};

/**
 * Extract a shorter name from the full display name
 */
const getShortName = (displayName: string): string => {
  const parts = displayName.split(",");
  return parts[0] || displayName;
};

interface LocationAutocompleteProps {
  onLocationSelect: (
    location: Pick<LocationData, "latitude" | "longitude" | "name" | "address">
  ) => void;
  value: string;
}

const LocationAutocomplete: React.FC<LocationAutocompleteProps> = ({
  onLocationSelect,
  value
}) => {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef(false);

  // Update query when value prop changes
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Search for locations when query changes
  useEffect(() => {
    // Skip search if we just selected a location
    if (selectedRef.current) {
      selectedRef.current = false;
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      if (query.length >= 3) {
        setIsLoading(true);
        const results = await searchLocations(query);
        setSuggestions(results);
        setIsOpen(results.length > 0);
        setIsLoading(false);
      } else {
        setSuggestions([]);
        setIsOpen(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSelectLocation = (suggestion: LocationSuggestion) => {
    // Mark that we've selected a location
    selectedRef.current = true;
    
    onLocationSelect({
      latitude: suggestion.latitude,
      longitude: suggestion.longitude,
      name: suggestion.name,
      address: suggestion.displayName,
    });
    
    // Clear suggestions and close dropdown after selection
    setSuggestions([]);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue);
    
    // If input is cleared or changed significantly, reset parent component's value
    if (newValue !== value) {
      onLocationSelect({
        latitude: 0,
        longitude: 0,
        name: newValue,
        address: ''
      });
    }
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => {
            // Only open dropdown if we have suggestions and haven't just selected
            if (suggestions.length > 0 && !selectedRef.current) {
              setIsOpen(true);
            }
          }}
          placeholder="Search for a location..."
          className="w-full px-4 py-2 pl-10 border border-orange-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {isLoading ? (
            <Loader className="w-5 h-5 text-gray-400 dark:text-gray-500 animate-spin" />
          ) : (
            <Search className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          )}
        </div>
      </div>
      
      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              onClick={() => handleSelectLocation(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 flex items-start"
            >
              <MapPin className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-2 mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">{suggestion.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{suggestion.displayName}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationAutocomplete;