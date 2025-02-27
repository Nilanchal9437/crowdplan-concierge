import * as React from "react";
import { useNavigate } from "@remix-run/react";
import { Home } from "lucide-react";
import {
  fetchQuizQuestions,
  QuizCategory,
  QuizQuestion,
} from "~/utils/mockApi";
import {
  UserFullName,
  UserLocation,
} from "~/features/quiz/components/userDetails";
import { getItem, setItem, clearStore } from "~/db";

function Quiz() {
  const navigate = useNavigate();

  const [categories, setCategories] = React.useState<QuizCategory[]>([]); // ✅ Uses QuizCategory[]
  const [currentCategoryIndex, setCurrentCategoryIndex] = React.useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<
    { [key: string | number]: string | number }[]
  >([]);
  const [loading, setLoading] = React.useState(true);
  const [currentCategory, setCurrentCategory] =
    React.useState<QuizCategory | null>(null);
  const [currentQuestions, setCurrentQuestions] = React.useState<
    QuizQuestion[] | null
  >(null);
  const [currentQuestion, setCurrentQuestion] =
    React.useState<QuizQuestion | null>(null);

  // Fetch questions on component mount
  React.useEffect(() => {
    fetchQuizQuestions()
      .then((data: QuizCategory[]) => {
        // ✅ Ensure QuizCategory[] is expected
        setCategories(data);
        getItem<{ [key: string | number]: string | number }[]>("quiz").then(
          (storedData) => {
            if (storedData) {
              setAnswers(storedData);
            } else {
              setAnswers([]);
            }
          }
        );
        getItem<number>("currentCategoryIndex").then((storedData) => {
          if (storedData) {
            setCurrentCategoryIndex(storedData);
          } else {
            setCurrentCategoryIndex(0);
          }
        });
        getItem<number>("currentQuestionIndex").then((storedData) => {
          if (storedData) {
            setCurrentQuestionIndex(storedData);
          } else {
            setCurrentQuestionIndex(0);
          }
        });
        getItem<QuizCategory | null>("currentCategory").then((storedData) => {
          if (storedData) {
            setCurrentCategory(storedData);
          } else {
            setCurrentCategory(data[0]);
          }
        });
        getItem<QuizQuestion[] | null>("currentQuestions").then(
          (storedData) => {
            if (storedData) {
              setCurrentQuestions(storedData);
            } else {
              setCurrentQuestions(data[0].questions);
            }
          }
        );
        getItem<QuizQuestion | null>("currentQuestion").then((storedData) => {
          if (storedData) {
            setCurrentQuestion(storedData);
          } else {
            setCurrentQuestion(data[0].questions[0]);
          }
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch questions:", error);
        setLoading(false);
      });
  }, []);

  // Get the current absolute question number in the quiz (across all categories)
  const getCurrentQuestionNumber = () => {
    let count = 0;
    for (let i = 0; i < currentCategoryIndex; i++) {
      count += categories[i].questions.length;
    }
    return count + currentQuestionIndex + 1;
  };

  const saveData = async (
    data: { [key: string | number]: string | number }[]
  ) => {
    await setItem("quiz", data);
    await setItem("currentCategoryIndex", currentCategoryIndex);
    await setItem("currentQuestionIndex", currentQuestionIndex);
    await setItem("currentCategory", currentCategory);
    await setItem("currentQuestions", currentQuestions);
    await setItem("currentQuestion", currentQuestion);
  };

  // ✅ Handle answer selection
  const handleSelectAnswer = (
    answer: string,
    option_id: any,
    question: any
  ) => {
    const data = [...answers];

    data[getCurrentQuestionNumber() - 1] = {
      question: question,
      answer: answer,
      category_id: categories[currentCategoryIndex].category_id,
      option_id: option_id,
    };
    saveData(data);
    setAnswers(data);
  };

  // ✅ Handle "Next" or "Finish Quiz" button
  const handleNext = () => {
    if (
      currentQuestions &&
      currentQuestionIndex < currentQuestions.length - 1
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(currentQuestions[currentQuestionIndex + 1]);
    } else if (currentCategoryIndex < categories.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      setCurrentCategory(categories[currentCategoryIndex + 1]);
      setCurrentQuestionIndex(0); // Reset question index for new category
      setCurrentQuestions(
        categories[currentCategoryIndex + 1]?.questions ?? null
      );
      setCurrentQuestion(
        categories[currentCategoryIndex + 1]?.questions[0] ?? null
      );
    } else {
      navigate("/result", { state: { answers } });
    }
  };

  // ✅ Handle "Back" or "Back to recheck" button
  const handleBack = () => {
    if (getCurrentQuestionNumber() > 1) {
      clearStore();
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  // Get the total number of questions across all categories
  const getTotalQuestions = () => {
    return categories.reduce(
      (total, category) => total + category.questions.length,
      0
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300  dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900`}
    >
      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 sm:py-8">
        <div
          className={`rounded-2xl dark:bg-gray-800 bg-white shadow-xl transition-colors duration-300 overflow-hidden`}
        >
          {/* Question Header */}
          <div className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-bold">Quiz</h1>
                <span
                  className={`text-sm ${
                    loading ? "p-0" : " px-3 py-1"
                  } rounded-full dark:bg-gray-700 bg-gray-100`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    `${getCurrentQuestionNumber()} / ${getTotalQuestions()}`
                  )}
                </span>
              </div>
              {loading ? (
                <div className="flex space-x-1 items-end">
                  <span
                    className={`text-base sm:text-lg dark:text-gray-300 text-gray-600`}
                  >
                    Loading quiz
                  </span>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-orange-500 mb-1 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-500 mb-1 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                    <div className="w-2 h-2 bg-orange-500 mb-1 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
                  </div>
                </div>
              ) : (
                <p
                  className={`text-base sm:text-lg dark:text-gray-300 text-gray-600`}
                >
                  {currentCategory?.category ?? ""}
                </p>
              )}
            </div>
          </div>

          {/* Question Content */}
          <div className="p-6 sm:p-8 space-y-4">
            {loading ? (
              <div className="flex animate-pulse space-x-4">
                <div className="flex-1 space-y-3 py-1">
                  <h2 className="text-lg sm:text-xl font-medium bg-gray-200 p-6 rounded-xl"></h2>
                  <div className="space-y-3">
                    <div className="bg-gray-200 p-5 rounded-xl"></div>
                    <div className="bg-gray-200 p-5 rounded-xl"></div>
                    <div className="bg-gray-200 p-5 rounded-xl"></div>
                    <div className="bg-gray-200 p-5 rounded-xl"></div>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-xl"></div>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-lg sm:text-xl font-medium">
                  ({getCurrentQuestionNumber()}).{" "}
                  {currentQuestion?.question ?? ""}
                </h2>
                <div className="space-y-1">
                  {/* Render answer options */}
                  {Object.entries(currentQuestion?.options ?? {}).map(
                    ([key, option], index) =>
                      currentQuestion?.type === "element" &&
                      currentQuestion?.id === 1 ? (
                        <UserFullName
                          key={key}
                          fullName={
                            answers[getCurrentQuestionNumber() - 1]?.answer ??
                            ""
                          }
                          setFullName={(event) => {
                            handleSelectAnswer(
                              event,
                              key,
                              currentQuestion?.question
                            );
                          }}
                        />
                      ) : currentQuestion?.type === "element" &&
                        currentQuestion?.id === 4 ? (
                        <UserLocation
                          key={key}
                          location={`${
                            answers[getCurrentQuestionNumber() - 1]?.answer ??
                            ""
                          }`}
                          setLocation={(event) => {
                            handleSelectAnswer(
                              `${event}`,
                              key,
                              currentQuestion?.question
                            );
                          }}
                        />
                      ) : (
                        <div
                          key={key}
                          onClick={() =>
                            handleSelectAnswer(
                              option,
                              key,
                              currentQuestion?.question
                            )
                          }
                          className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                            answers[getCurrentQuestionNumber() - 1]?.answer ===
                            option
                              ? "dark:bg-orange-600 dark:text-white bg-orange-500 text-white"
                              : "dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          <span className="text-base sm:text-lg">
                            ({index + 1}).&nbsp;&nbsp;{option}
                          </span>
                        </div>
                      )
                  )}
                </div>
                <div className="flex item-center gap-2 jutify-between">
                  <button
                    onClick={handleBack}
                    className={`flex gap-1 py-3 w-full px-4 rounded-xl font-medium flex text-white items-center justify-center space-x-2 bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 bg-orange-500 hover:bg-orange-600`}
                  >
                    {getCurrentQuestionNumber() > 1 ? (
                      "Reset Quiz"
                    ) : (
                      <>
                        <Home className="w-5 h-5" /> Back to home
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!answers[getCurrentQuestionNumber() - 1]?.answer}
                    className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-300 ${
                      answers[getCurrentQuestionNumber() - 1]?.answer
                        ? "dark:bg-orange-600 dark:hover:bg-orange-700 bg-orange-500 hover:bg-orange-600"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {currentCategoryIndex < categories.length - 1 ||
                    currentQuestionIndex <
                      (Array.isArray(currentQuestions)
                        ? currentQuestions?.length - 1
                        : 0)
                      ? "Next"
                      : "Finish Quiz"}
                  </button>
                </div>
              </>
            )}
          </div>
          {/* Progress Bar */}
          {loading ? (
            <div className="flex animate-pulse">
              <div
                className="h-1 bg-gray-200"
                style={{
                  width: `100%`,
                }}
              />
            </div>
          ) : (
            <div
              className="h-1 bg-orange-500"
              style={{
                width: `${
                  (getCurrentQuestionNumber() / getTotalQuestions()) * 100
                }%`,
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default Quiz;
