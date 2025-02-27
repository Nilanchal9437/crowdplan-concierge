import LocationAutocomplete from "~/components/LocationAutocomplete";

export function UserLocation({
  location,
  setLocation,
}: {
  location: string;
  setLocation: (event: string | undefined) => void;
}) {
  return (
    <LocationAutocomplete
      value={location}
      onLocationSelect={(location) => setLocation(location.address)}
    />
  );
}

export function UserFullName({
  fullName,
  setFullName,
}: {
  fullName: string | number;
  setFullName: (event: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor="fullName"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        Full Name
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        placeholder="Your full name"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        required
      />
    </div>
  );
}
