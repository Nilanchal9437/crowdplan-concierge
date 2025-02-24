export type QuizCategory = {
  category: string;
  category_id: number;
  questions: QuizQuestion[];
};

export type QuizQuestion = {
  id: number; // ✅ Ensure every question has an ID
  question: string;
  options: { [key: string]: string }; // ✅ Matches the new JSON structure
};

export async function fetchQuizQuestions(): Promise<QuizCategory[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          category: "Social Orientation - Introvert vs. Extrovert",
          category_id: 1,
          questions: [
            {
              id: 1,
              question: "How do you feel at large social events?",
              options: {
                "1": "Energized and excited",
                "2": "Mostly comfortable",
                "3": "Neutral",
                "4": "Drained and overwhelmed",
              },
            },
            {
              id: 2,
              question: "How often do you prefer to go out and socialize",
              options: {
                "1": "Every chance I get",
                "2": "A few times a week",
                "3": "Once in a while",
                "4": "Rarely",
              },
            },
            {
              id: 3,
              question: "Do you enjoy being the center of attention",
              options: {
                "1": "Absolutely!",
                "2": "Sometimes",
                "3": "Only with close friends",
                "4": "Not at all",
              },
            },
            {
              id: 4,
              question: "How do you usually recharge after a long day",
              options: {
                "1": "Being around others",
                "2": "A mix of social time and alone time",
                "3": "Alone time with a hobby",
                "4": "Complete solitude",
              },
            },
            {
              id: 5,
              question: "What’s your ideal way to spend an evening",
              options: {
                "1": "At a lively party or event",
                "2": "Dinner with friends",
                "3": "Movie night with a small group",
                "4": "Reading or relaxing alone",
              },
            },
            {
              id: 6,
              question: "Do you prefer working in a team or independently",
              options: {
                "1": "Teamwork all the way!",
                "2": "I like both equally",
                "3": "Depends on the situation",
                "4": "I prefer working alone",
              },
            },
            {
              id: 7,
              question:
                "How do you feel about making small talk with strangers",
              options: {
                "1": "I love it!",
                "2": "I'm okay with it",
                "3": "I only do it when necessary",
                "4": "I avoid it when I can",
              },
            },
            {
              id: 8,
              question: "When meeting new people, how do you usually engage",
              options: {
                "1": "Start conversations easily",
                "2": "Engage but let others lead",
                "3": "Listen more than talk",
                "4": "Struggle to open up",
              },
            },
            {
              id: 9,
              question: "How do you behave in a new social setting",
              options: {
                "1": "Jump in and introduce myself",
                "2": "Wait and observe before engaging",
                "3": "Stick with someone I know",
                "4": "Feel uneasy and prefer to leave",
              },
            },
            {
              id: 10,
              question:
                "Would you rather spend time with a large group, a small group, or by yourself",
              options: {
                "1": "A large group of friends",
                "2": "A few close friends",
                "3": "One or two people",
                "4": "Just myself",
              },
            },
          ],
        },
        {
          category: "Adventure Level - Risk-Taking vs. Comfort-Seeking",
          category_id: 2,
          questions: [
            {
              id: 1,
              question: "Would you go skydiving if given the opportunity",
              options: {
                "1": "Absolutely!",
                "2": "Maybe, if I had time to prepare",
                "3": "Unlikely",
                "4": "No way",
              },
            },
            {
              id: 2,
              question: "How do you feel about last-minute travel plans",
              options: {
                "1": "Exciting!",
                "2": "Depends on where and when",
                "3": "A bit stressful",
                "4": "I prefer to plan ahead",
              },
            },
            {
              id: 3,
              question: "Do you enjoy trying new foods",
              options: {
                "1": "Yes, I'll eat anything!",
                "2": "I like to experiment occasionally",
                "3": "I have my favorites but will try new things",
                "4": "I stick to what I know",
              },
            },
            {
              id: 4,
              question:
                "Would you take on a physical challenge like rock climbing",
              options: {
                "1": "Yes, I love a challenge!",
                "2": "I’d give it a try",
                "3": "I’d need convincing",
                "4": "Not my thing",
              },
            },
            {
              id: 5,
              question: "How do you feel about surprise events",
              options: {
                "1": "I love surprises!",
                "2": "I enjoy them sometimes",
                "3": "I'd rather know in advance",
                "4": "I dislike surprises",
              },
            },
            {
              id: 6,
              question: "When faced with uncertainty, how do you react",
              options: {
                "1": "Embrace it and move forward",
                "2": "Try to assess risks first",
                "3": "Proceed cautiously",
                "4": "Avoid it if possible",
              },
            },
            {
              id: 7,
              question:
                "Would you rather have a structured plan or go with the flow",
              options: {
                "1": "Go with the flow!",
                "2": "A mix of both",
                "3": "Mostly structured",
                "4": "I need a plan",
              },
            },
            {
              id: 8,
              question:
                "Do you like high-energy activities like ziplining or bungee jumping",
              options: {
                "1": "Yes, bring it on!",
                "2": "Sometimes",
                "3": "Not really",
                "4": "No, too scary",
              },
            },
            {
              id: 9,
              question: "How do you feel about spontaneous road trips",
              options: {
                "1": "Love them!",
                "2": "If I have some notice",
                "3": "Not my thing",
                "4": "I prefer planned vacations",
              },
            },
            {
              id: 10,
              question: "Would you volunteer for an unknown task at an event",
              options: {
                "1": "Sure, I like surprises",
                "2": "Depends on what it is",
                "3": "I’d rather know first",
                "4": "No, I don’t like uncertainty",
              },
            },
          ],
        },
        {
          category:
            "Conflict Resolution Style - Avoidant, Confrontational, Compromising",
          category_id: 3,
          questions: [
            {
              id: 1,
              question: "How do you handle disagreements?",
              options: {
                "1": "I address them head-on and try to resolve them immediately.",
                "2": "I try to find a compromise and keep the peace.",
                "3": "I avoid confrontation and let things settle naturally.",
                "4": "I step back and let others handle it.",
              },
            },
            {
              id: 2,
              question: "Do you find it easy to express your feelings?",
              options: {
                "1": "Yes, I am very open about my emotions.",
                "2": "Sometimes, but I struggle in certain situations.",
                "3": "Only with people I trust.",
                "4": "No, I keep my feelings to myself.",
              },
            },
            {
              id: 3,
              question:
                "When faced with conflict in a group, how do you usually react?",
              options: {
                "1": "I take charge and mediate the situation.",
                "2": "I suggest solutions and try to find a middle ground.",
                "3": "I stay quiet and let others handle it.",
                "4": "I remove myself from the situation.",
              },
            },
            {
              id: 4,
              question: "How do you respond to criticism?",
              options: {
                "1": "I take it well and use it to improve.",
                "2": "I reflect on it before responding.",
                "3": "I get defensive but try to learn from it.",
                "4": "I take it personally and feel discouraged.",
              },
            },
            {
              id: 5,
              question: "Do you hold grudges?",
              options: {
                "1": "No, I forgive easily and move on.",
                "2": "I try not to, but some things are hard to forget.",
                "3": "Occasionally, if the situation was serious.",
                "4": "Yes, I struggle to let things go.",
              },
            },
            {
              id: 6,
              question: "How do you handle workplace disagreements?",
              options: {
                "1": "I directly address the issue and find a solution.",
                "2": "I try to mediate and keep things professional.",
                "3": "I avoid confrontation and focus on my work.",
                "4": "I disengage and let others handle it.",
              },
            },
            {
              id: 7,
              question:
                "When someone upsets you, how do you typically respond?",
              options: {
                "1": "I tell them immediately and discuss it.",
                "2": "I take time to cool off before talking to them.",
                "3": "I ignore it and let it pass.",
                "4": "I withdraw and distance myself from them.",
              },
            },
            {
              id: 8,
              question: "If you see an argument happening, how do you react?",
              options: {
                "1": "I step in and mediate the situation.",
                "2": "I watch and listen but don’t interfere.",
                "3": "I stay out of it completely.",
                "4": "I leave the room to avoid the tension.",
              },
            },
            {
              id: 9,
              question: "Do you believe all conflicts should be resolved?",
              options: {
                "1": "Yes, it’s important to address every issue.",
                "2": "Most conflicts should be resolved, but some aren’t worth it.",
                "3": "Only major ones should be discussed.",
                "4": "No, some things are better left alone.",
              },
            },
            {
              id: 10,
              question: "How do you feel after an argument?",
              options: {
                "1": "Relieved and clear-headed.",
                "2": "Reflective, thinking about what I could have done differently.",
                "3": "Annoyed but able to move on.",
                "4": "Drained and upset.",
              },
            },
          ],
        },
        {
          category: "Activity Preference - Physical vs. Mental Engagement",
          category_id: 4,
          questions: [
            {
              id: 1,
              question: "Would you rather join a book club or a sports league?",
              options: {
                "1": "Sports league.",
                "2": "A mix of both.",
                "3": "Book club.",
                "4": "Neither.",
              },
            },
            {
              id: 2,
              question: "Do you prefer watching or playing sports?",
              options: {
                "1": "Playing sports.",
                "2": "Both equally.",
                "3": "Watching sports.",
                "4": "Not into sports.",
              },
            },
            {
              id: 3,
              question: "Would you rather attend a TED Talk or a dance class?",
              options: {
                "1": "TED Talk.",
                "2": "Both sound great!",
                "3": "Dance class.",
                "4": "Neither.",
              },
            },
            {
              id: 4,
              question: "Which type of activity helps you relax the most?",
              options: {
                "1": "Going for a hike.",
                "2": "Doing a calming activity like yoga or meditation.",
                "3": "Reading a book or solving a puzzle.",
                "4": "Watching TV or listening to music.",
              },
            },
            {
              id: 5,
              question: "Would you rather solve a puzzle or go on a run?",
              options: {
                "1": "Run.",
                "2": "Both sound fun!",
                "3": "Puzzle.",
                "4": "Neither.",
              },
            },
            {
              id: 6,
              question: "Do you enjoy high-energy activities?",
              options: {
                "1": "Yes, I love them!",
                "2": "Sometimes, if I’m in the mood.",
                "3": "Not really.",
                "4": "Not at all.",
              },
            },
            {
              id: 7,
              question: "Which do you prefer: board games or laser tag?",
              options: {
                "1": "Laser tag!",
                "2": "Depends on the group I’m with.",
                "3": "Board games.",
                "4": "Neither.",
              },
            },
            {
              id: 8,
              question:
                "Would you rather cook a new recipe or do a workout challenge?",
              options: {
                "1": "Workout challenge.",
                "2": "Both sound fun!",
                "3": "Cook a new recipe.",
                "4": "Neither.",
              },
            },
            {
              id: 9,
              question: "How do you unwind after a long day?",
              options: {
                "1": "Exercising or moving around.",
                "2": "Socializing with friends.",
                "3": "Reading, writing, or creating something.",
                "4": "Watching TV or playing video games.",
              },
            },
            {
              id: 10,
              question: "Do you prefer physical challenges or mental puzzles?",
              options: {
                "1": "Physical challenges.",
                "2": "A mix of both.",
                "3": "Mental puzzles.",
                "4": "Neither.",
              },
            },
          ],
        },
        {
          category:
            "Time Commitment - Short & Spontaneous vs. Planned & Extended",
          category_id: 5,
          questions: [
            {
              id: 1,
              question: "Would you join an event with only a day's notice?",
              options: {
                "1": "Absolutely!",
                "2": "If it’s something I’m interested in.",
                "3": "I’d prefer more notice.",
                "4": "No, I like to plan ahead.",
              },
            },
            {
              id: 2,
              question: "Do you prefer weekend getaways or long vacations?",
              options: {
                "1": "Weekend getaways.",
                "2": "Both equally.",
                "3": "Long vacations.",
                "4": "Neither.",
              },
            },
            {
              id: 3,
              question: "Would you commit to a month-long hobby class?",
              options: {
                "1": "Yes, I love learning new things.",
                "2": "Only if it's something I'm passionate about.",
                "3": "I prefer shorter commitments.",
                "4": "No, that’s too long for me.",
              },
            },
            {
              id: 4,
              question: "Do you prefer structured schedules or open days?",
              options: {
                "1": "Structured schedules.",
                "2": "A mix of both.",
                "3": "Flexible plans with some structure.",
                "4": "Open, unplanned days.",
              },
            },
            {
              id: 5,
              question: "How far ahead do you plan social events?",
              options: {
                "1": "Last minute!",
                "2": "A few days in advance.",
                "3": "A week or more in advance.",
                "4": "Several weeks or months in advance.",
              },
            },
            {
              id: 6,
              question:
                "Do you like short, intense experiences or long, immersive ones?",
              options: {
                "1": "Short, intense experiences.",
                "2": "A mix of both.",
                "3": "Long, immersive experiences.",
                "4": "Neither.",
              },
            },
            {
              id: 7,
              question:
                "Would you rather attend a quick meetup or an all-day retreat?",
              options: {
                "1": "Quick meetup.",
                "2": "Depends on the event.",
                "3": "All-day retreat.",
                "4": "Neither.",
              },
            },
            {
              id: 8,
              question: "How do you feel about committing to a weekly event?",
              options: {
                "1": "I love having a consistent routine.",
                "2": "I’d join if it’s flexible.",
                "3": "I prefer occasional events instead.",
                "4": "I don't like long-term commitments.",
              },
            },
            {
              id: 9,
              question:
                "Do you often plan your activities in advance or decide on the spot?",
              options: {
                "1": "I plan everything in advance.",
                "2": "I like a mix of both.",
                "3": "I decide based on how I feel that day.",
                "4": "I rarely plan anything ahead of time.",
              },
            },
            {
              id: 10,
              question:
                "How much time are you willing to invest in social activities per week?",
              options: {
                "1": "A few hours every day.",
                "2": "A few days per week.",
                "3": "Once a week or less.",
                "4": "Very rarely.",
              },
            },
          ],
        },
        {
          category: "Group Size Comfort - Small, Medium, or Large Gatherings",
          category_id: 6,
          questions: [
            {
              id: 1,
              question: "What size group do you feel most comfortable in?",
              options: {
                "1": "Small groups (2-5 people).",
                "2": "Medium groups (6-15 people).",
                "3": "Large groups (16-50 people).",
                "4": "Huge gatherings (50+ people).",
              },
            },
            {
              id: 2,
              question:
                "Would you rather attend an intimate dinner party or a large networking event?",
              options: {
                "1": "Intimate dinner party with close friends.",
                "2": "A mix of both, depending on the occasion.",
                "3": "Large networking event to meet new people.",
                "4": "Neither, I prefer solo time.",
              },
            },
            {
              id: 3,
              question:
                "Do you enjoy meeting many new people at once, or do you prefer one-on-one interactions?",
              options: {
                "1": "I love meeting many new people at once.",
                "2": "I enjoy both but lean toward smaller interactions.",
                "3": "I prefer one-on-one interactions.",
                "4": "I find meeting new people overwhelming.",
              },
            },
            {
              id: 4,
              question: "Would you rather work in a team of 3 or a team of 10?",
              options: {
                "1": "A small team of 3 for better collaboration.",
                "2": "A medium-sized team of 5-7 people.",
                "3": "A larger team of 10+ for more diverse ideas.",
                "4": "I prefer working alone.",
              },
            },
            {
              id: 5,
              question: "How do you feel about being in a crowd of 50+ people?",
              options: {
                "1": "Excited and energized.",
                "2": "Comfortable but prefer smaller groups.",
                "3": "A bit overwhelmed but manageable.",
                "4": "Anxious and prefer to avoid it.",
              },
            },
            {
              id: 6,
              question:
                "Would you rather go to a quiet café with a friend or a busy concert?",
              options: {
                "1": "Quiet café for deep conversations.",
                "2": "Depends on my mood, I like both.",
                "3": "Busy concert for the high energy.",
                "4": "Neither, I prefer being alone.",
              },
            },
            {
              id: 7,
              question:
                "Do you prefer events with structured interaction or open mingling?",
              options: {
                "1": "Structured interaction with planned activities.",
                "2": "A mix of structure and free mingling.",
                "3": "Open mingling where I can freely network.",
                "4": "I avoid large social events.",
              },
            },
            {
              id: 8,
              question:
                "How do you feel about public speaking in front of a large group?",
              options: {
                "1": "Confident and enjoy it.",
                "2": "Somewhat comfortable with preparation.",
                "3": "Nervous but willing to try.",
                "4": "Avoid it at all costs.",
              },
            },
            {
              id: 9,
              question:
                "Would you rather spend a day with close friends or at a big social gathering?",
              options: {
                "1": "Close friends, always.",
                "2": "Both are great, depending on the occasion.",
                "3": "Big social gathering to meet new people.",
                "4": "Prefer spending the day alone.",
              },
            },
            {
              id: 10,
              question:
                "How do you feel about networking events with strangers?",
              options: {
                "1": "I love them and make connections easily.",
                "2": "I go but prefer to stick with familiar faces.",
                "3": "I attend but find them exhausting.",
                "4": "I avoid them whenever possible.",
              },
            },
          ],
        },
        {
          category: "Group Size Comfort - Small, Medium, or Large Gatherings",
          category_id: 7,
          questions: [
            {
              id: 1,
              question: "What size group do you feel most comfortable in?",
              options: {
                "1": "Small groups (2-5 people).",
                "2": "Medium groups (6-15 people).",
                "3": "Large groups (16-50 people).",
                "4": "Huge gatherings (50+ people).",
              },
            },
            {
              id: 2,
              question:
                "Would you rather attend an intimate dinner party or a large networking event?",
              options: {
                "1": "Intimate dinner party with close friends.",
                "2": "A mix of both, depending on the occasion.",
                "3": "Large networking event to meet new people.",
                "4": "Neither, I prefer solo time.",
              },
            },
            {
              id: 3,
              question:
                "Do you enjoy meeting many new people at once, or do you prefer one-on-one interactions?",
              options: {
                "1": "I love meeting many new people at once.",
                "2": "I enjoy both but lean toward smaller interactions.",
                "3": "I prefer one-on-one interactions.",
                "4": "I find meeting new people overwhelming.",
              },
            },
            {
              id: 4,
              question: "Would you rather work in a team of 3 or a team of 10?",
              options: {
                "1": "A small team of 3 for better collaboration.",
                "2": "A medium-sized team of 5-7 people.",
                "3": "A larger team of 10+ for more diverse ideas.",
                "4": "I prefer working alone.",
              },
            },
            {
              id: 5,
              question: "How do you feel about being in a crowd of 50+ people?",
              options: {
                "1": "Excited and energized.",
                "2": "Comfortable but prefer smaller groups.",
                "3": "A bit overwhelmed but manageable.",
                "4": "Anxious and prefer to avoid it.",
              },
            },
            {
              id: 6,
              question:
                "Would you rather go to a quiet café with a friend or a busy concert?",
              options: {
                "1": "Quiet café for deep conversations.",
                "2": "Depends on my mood, I like both.",
                "3": "Busy concert for the high energy.",
                "4": "Neither, I prefer being alone.",
              },
            },
            {
              id: 7,
              question:
                "Do you prefer events with structured interaction or open mingling?",
              options: {
                "1": "Structured interaction with planned activities.",
                "2": "A mix of structure and free mingling.",
                "3": "Open mingling where I can freely network.",
                "4": "I avoid large social events.",
              },
            },
            {
              id: 8,
              question:
                "How do you feel about public speaking in front of a large group?",
              options: {
                "1": "Confident and enjoy it.",
                "2": "Somewhat comfortable with preparation.",
                "3": "Nervous but willing to try.",
                "4": "Avoid it at all costs.",
              },
            },
            {
              id: 9,
              question:
                "Would you rather spend a day with close friends or at a big social gathering?",
              options: {
                "1": "Close friends, always.",
                "2": "Both are great, depending on the occasion.",
                "3": "Big social gathering to meet new people.",
                "4": "Prefer spending the day alone.",
              },
            },
            {
              id: 10,
              question:
                "How do you feel about networking events with strangers?",
              options: {
                "1": "I love them and make connections easily.",
                "2": "I go but prefer to stick with familiar faces.",
                "3": "I attend but find them exhausting.",
                "4": "I avoid them whenever possible.",
              },
            },
          ],
        },
      ]);
    }, 1000);
  });
}
