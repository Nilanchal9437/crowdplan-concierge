import { Home } from "lucide-react";
import { useLocation, useNavigate } from "@remix-run/react";

function Result() {
  const location = useLocation();
  const answers =
    (location.state?.answers as {
      [key: string | number]: string | number;
    }[]) || {}; // ✅ Type assertion
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen transition-colors duration-300  dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900`}
    >
      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <div
          className={`rounded-2xl dark:bg-gray-800 bg-white shadow-xl transition-colors duration-300 overflow-hidden`}
        >
          {/* Result Header */}
          <div className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="text-center space-y-4">
              <div className="inline-flex justify-center items-center p-2 rounded-full bg-green-100 dark:bg-green-900">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Quiz Completed!
              </h1>
              <p
                className={`text-base sm:text-lg dark:text-gray-300 text-gray-600`}
              >
                Thank you for taking the quiz. Here are your responses:
              </p>
            </div>
          </div>
          {/* Answers List */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              {answers.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl dark:bg-gray-700 bg-gray-100`}
                >
                  <h3
                    className={`font-medium dark:text-gray-200 text-gray-700`}
                  >
                    (Q{index+1}).&nbsp;{item.question}
                  </h3>
                  <p className={`mt-1 dark:text-orange-400 text-orange-600`}>
                   Answer:-&nbsp;({item.option_id})&nbsp;{item.answer}
                  </p>
                </div>
              ))}
            </div>
            {/* Action Buttons */}
            <div className="mt-8">
              <button
                onClick={() => navigate("/")}
                className={`flex-1 py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 bg-orange-600 dark:hover:bg-gray-600 text-white hover:bg-orange-600 mx-auto`}
              >
                <Home className="w-5 h-5" />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Result;
