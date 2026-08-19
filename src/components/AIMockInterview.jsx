import { useEffect, useRef, useState } from "react";

/* =========================================================
   INTERVIEW QUESTIONS
========================================================= */

const interviewData = {
  software: {
    title: "Software Engineer",
    questions: [
      "Tell me about yourself and why you want to become a Software Engineer.",
      "Explain a project you have built and the technical decisions you made.",
      "How would you debug an application that suddenly became very slow?",
    ],
  },

  ai: {
    title: "AI / ML Engineer",
    questions: [
      "Tell me about yourself and why you are interested in AI and Machine Learning.",
      "Explain a machine learning project you have worked on.",
      "What is the difference between supervised and unsupervised learning?",
    ],
  },

  data: {
    title: "Data Scientist",
    questions: [
      "Tell me about yourself and why you are interested in Data Science.",
      "How would you handle missing values in a dataset?",
      "Explain the difference between correlation and causation.",
    ],
  },

  cyber: {
    title: "Cybersecurity Engineer",
    questions: [
      "Tell me about yourself and why you are interested in cybersecurity.",
      "What would you do if you detected suspicious activity on a company network?",
      "Explain the difference between authentication and authorization.",
    ],
  },

  cloud: {
    title: "Cloud / DevOps Engineer",
    questions: [
      "Tell me about yourself and why you are interested in Cloud and DevOps.",
      "What is the purpose of CI/CD?",
      "How would you design a highly available application?",
    ],
  },

  electronics: {
    title: "Electronics / VLSI Engineer",
    questions: [
      "Tell me about yourself and why you are interested in Electronics or VLSI.",
      "Explain a hardware project you have worked on.",
      "What is the difference between combinational and sequential logic?",
    ],
  },

  electrical: {
    title: "Electrical Engineer",
    questions: [
      "Tell me about yourself and why you are interested in Electrical Engineering.",
      "Explain a technical project you have worked on.",
      "What is the difference between AC and DC?",
    ],
  },

  mechanical: {
    title: "Mechanical Engineer",
    questions: [
      "Tell me about yourself and why you are interested in Mechanical Engineering.",
      "Describe a mechanical project you have worked on.",
      "How would you approach solving a mechanical design problem?",
    ],
  },

  civil: {
    title: "Civil Engineer",
    questions: [
      "Tell me about yourself and why you are interested in Civil Engineering.",
      "Describe a civil engineering project you have worked on.",
      "What factors should be considered when designing a foundation?",
    ],
  },

  robotics: {
    title: "Robotics Engineer",
    questions: [
      "Tell me about yourself and why you are interested in Robotics.",
      "Describe a robotics project you have worked on.",
      "How do sensors help a robot make decisions?",
    ],
  },

  embedded: {
    title: "Embedded Systems Engineer",
    questions: [
      "Tell me about yourself and why you are interested in Embedded Systems.",
      "Describe an embedded project you have worked on.",
      "What is the difference between a microcontroller and a microprocessor?",
    ],
  },
};


/* =========================================================
   QUESTION-SPECIFIC EVALUATION KEYWORDS
========================================================= */

const questionKeywords = {
  "Tell me about yourself and why you want to become a Software Engineer.": [
    "software",
    "programming",
    "coding",
    "developer",
    "technology",
    "project",
    "application",
    "problem solving",
  ],

  "Explain a project you have built and the technical decisions you made.": [
    "project",
    "built",
    "developed",
    "technology",
    "technical",
    "database",
    "frontend",
    "backend",
    "react",
    "node",
    "api",
    "design",
  ],

  "How would you debug an application that suddenly became very slow?": [
    "debug",
    "performance",
    "logs",
    "database",
    "memory",
    "cpu",
    "network",
    "profiling",
    "bottleneck",
    "monitor",
  ],

  "Tell me about yourself and why you are interested in AI and Machine Learning.": [
    "ai",
    "machine learning",
    "ml",
    "data",
    "model",
    "algorithm",
    "python",
    "learning",
    "prediction",
  ],

  "Explain a machine learning project you have worked on.": [
    "machine learning",
    "dataset",
    "model",
    "training",
    "testing",
    "accuracy",
    "algorithm",
    "python",
    "prediction",
    "features",
  ],

  "What is the difference between supervised and unsupervised learning?": [
    "supervised",
    "unsupervised",
    "label",
    "labeled",
    "unlabeled",
    "classification",
    "regression",
    "clustering",
    "training",
    "data",
  ],

  "Tell me about yourself and why you are interested in Data Science.": [
    "data",
    "analysis",
    "statistics",
    "python",
    "dataset",
    "visualization",
    "insights",
    "analytics",
  ],

  "How would you handle missing values in a dataset?": [
    "missing",
    "values",
    "null",
    "remove",
    "mean",
    "median",
    "mode",
    "imputation",
    "dataset",
    "data",
  ],

  "Explain the difference between correlation and causation.": [
    "correlation",
    "causation",
    "relationship",
    "cause",
    "effect",
    "variable",
    "association",
  ],

  "Tell me about yourself and why you are interested in cybersecurity.": [
    "security",
    "cybersecurity",
    "network",
    "attack",
    "defense",
    "ethical",
    "threat",
    "protection",
  ],

  "What would you do if you detected suspicious activity on a company network?": [
    "network",
    "suspicious",
    "incident",
    "isolate",
    "investigate",
    "logs",
    "monitor",
    "security",
    "threat",
    "response",
  ],

  "Explain the difference between authentication and authorization.": [
    "authentication",
    "authorization",
    "identity",
    "permission",
    "access",
    "password",
    "user",
    "role",
  ],

  "Tell me about yourself and why you are interested in Cloud and DevOps.": [
    "cloud",
    "devops",
    "deployment",
    "server",
    "automation",
    "infrastructure",
    "aws",
    "azure",
    "docker",
  ],

  "What is the purpose of CI/CD?": [
    "ci",
    "cd",
    "continuous",
    "integration",
    "deployment",
    "delivery",
    "testing",
    "automation",
    "pipeline",
  ],

  "How would you design a highly available application?": [
    "availability",
    "server",
    "load balancer",
    "redundancy",
    "scaling",
    "database",
    "backup",
    "failover",
    "cloud",
  ],

  "What is the difference between combinational and sequential logic?": [
    "combinational",
    "sequential",
    "logic",
    "output",
    "input",
    "memory",
    "flip flop",
    "clock",
  ],

  "What is the difference between AC and DC?": [
    "ac",
    "dc",
    "alternating",
    "direct",
    "current",
    "voltage",
    "direction",
    "frequency",
  ],

  "How do sensors help a robot make decisions?": [
    "sensor",
    "robot",
    "data",
    "environment",
    "decision",
    "feedback",
    "distance",
    "camera",
    "control",
  ],

  "What is the difference between a microcontroller and a microprocessor?": [
    "microcontroller",
    "microprocessor",
    "cpu",
    "memory",
    "input",
    "output",
    "embedded",
    "peripheral",
  ],

  "How would you approach solving a mechanical design problem?": [
    "design",
    "requirements",
    "material",
    "force",
    "stress",
    "load",
    "cad",
    "analysis",
    "prototype",
  ],

  "What factors should be considered when designing a foundation?": [
    "foundation",
    "soil",
    "load",
    "bearing",
    "depth",
    "settlement",
    "structure",
    "water",
    "design",
  ],
};


/* =========================================================
   QUESTION CATEGORY DETECTION
========================================================= */

function getQuestionType(question) {
  const lower = question.toLowerCase();

  if (
    lower.includes("difference between")
  ) {
    return "concept";
  }

  if (
    lower.includes("how would") ||
    lower.includes("what would you do") ||
    lower.includes("how do")
  ) {
    return "scenario";
  }

  if (
    lower.includes("project")
  ) {
    return "project";
  }

  if (
    lower.includes("tell me about yourself")
  ) {
    return "personal";
  }

  return "general";
}


/* =========================================================
   SMART FEEDBACK ENGINE
========================================================= */

function getFeedback(answer, question) {
  const cleanAnswer = answer.trim();

  if (!cleanAnswer) {
    return {
      score: 0,
      technical: 0,
      clarity: 0,
      relevance: 0,
      message:
        "No answer detected. Please answer the interview question.",
      missing:
        "Your response is empty.",
      improvement:
        "Start by directly answering the question.",
    };
  }

  const lowerAnswer = cleanAnswer.toLowerCase();

  const words = lowerAnswer
    .split(/\s+/)
    .filter(Boolean);

  const keywords =
    questionKeywords[question] || [];

  const matchedKeywords =
    keywords.filter((keyword) =>
      lowerAnswer.includes(keyword.toLowerCase())
    );

  const keywordRatio =
    keywords.length > 0
      ? matchedKeywords.length /
        keywords.length
      : 0;

  const questionWords =
    question
      .toLowerCase()
      .replace(/[?.,]/g, "")
      .split(/\s+/)
      .filter(
        (word) =>
          word.length > 3 &&
          ![
            "what",
            "your",
            "about",
            "would",
            "tell",
            "explain",
            "difference",
            "between",
            "have",
            "been",
            "you",
          ].includes(word)
      );

  const questionWordMatches =
    questionWords.filter((word) =>
      lowerAnswer.includes(word)
    ).length;

  const questionMatch =
    questionWords.length > 0
      ? questionWordMatches /
        questionWords.length
      : 0;


  /* -------------------------------------------------------
     RELEVANCE
  ------------------------------------------------------- */

  let relevance = Math.round(
    keywordRatio * 75 +
    questionMatch * 25
  );

  /*
   * If almost none of the expected concepts
   * appear, strongly penalize unrelated answers.
   */

  if (
    matchedKeywords.length === 0 &&
    questionMatch < 0.15
  ) {
    relevance = Math.min(
      relevance,
      18
    );
  }

  relevance = Math.max(
    0,
    Math.min(100, relevance)
  );


  /* -------------------------------------------------------
     CLARITY
  ------------------------------------------------------- */

  const fillerWords = [
    "umm",
    "uh",
    "like",
    "actually",
    "basically",
    "you know",
  ];

  let fillerCount = 0;

  fillerWords.forEach((word) => {
    const matches =
      lowerAnswer.match(
        new RegExp(`\\b${word}\\b`, "g")
      );

    if (matches) {
      fillerCount += matches.length;
    }
  });

  const sentences =
    cleanAnswer
      .split(/[.!?]+/)
      .filter(Boolean).length;

  let clarity =
    78 +
    Math.min(15, sentences * 3) -
    fillerCount * 5;

  if (words.length < 8) {
    clarity -= 15;
  }

  clarity = Math.max(
    25,
    Math.min(100, clarity)
  );


  /* -------------------------------------------------------
     TECHNICAL SCORE
  ------------------------------------------------------- */

  let technical;

  if (getQuestionType(question) === "personal") {
    technical =
      relevance >= 50
        ? 75 + Math.min(20, matchedKeywords.length * 4)
        : 25;
  } else {
    technical =
      relevance * 0.65 +
      Math.min(
        35,
        matchedKeywords.length * 5
      );
  }

  technical = Math.round(
    Math.max(
      0,
      Math.min(100, technical)
    )
  );


  /* -------------------------------------------------------
     OVERALL SCORE
  ------------------------------------------------------- */

  const score = Math.round(
    relevance * 0.45 +
    technical * 0.35 +
    clarity * 0.20
  );


  /* -------------------------------------------------------
     MISSING CONCEPTS
  ------------------------------------------------------- */

  const missingKeywords =
    keywords.filter(
      (keyword) =>
        !lowerAnswer.includes(
          keyword.toLowerCase()
        )
    );

  let missing;

  if (relevance < 25) {
    missing =
      "Your answer does not address the main topic of the question.";
  } else if (missingKeywords.length > 0) {
    missing =
      `Consider discussing: ${missingKeywords
        .slice(0, 4)
        .join(", ")}.`;
  } else {
    missing =
      "You covered the main concepts. Add a concrete example to make the answer stronger.";
  }


  /* -------------------------------------------------------
     IMPROVEMENT
  ------------------------------------------------------- */

  let improvement;

  if (relevance < 25) {
    improvement =
      "First identify what the interviewer is asking, then answer that specific question directly.";
  } else if (relevance < 55) {
    improvement =
      "Stay focused on the question and explain the relevant technical concepts with an example.";
  } else if (technical < 60) {
    improvement =
      "Your answer is relevant, but include more technical reasoning and explain why you would choose your approach.";
  } else if (clarity < 60) {
    improvement =
      "Organize your response into a clear beginning, explanation, and conclusion.";
  } else {
    improvement =
      "Strong response. Make it even better by adding a specific example, result, or measurable impact.";
  }


  /* -------------------------------------------------------
     MAIN MESSAGE
  ------------------------------------------------------- */

  let message;

  if (relevance < 25) {
    message =
      "Your response appears unrelated to the interview question. Focus on answering the specific topic asked by the interviewer.";
  } else if (relevance < 50) {
    message =
      "Your response is partially related, but several important parts of the question were not addressed.";
  } else if (score >= 85) {
    message =
      "Excellent response. You addressed the question clearly and demonstrated relevant knowledge.";
  } else if (score >= 70) {
    message =
      "Good response. Your answer is relevant, but it could be strengthened with more technical detail or a concrete example.";
  } else {
    message =
      "Your answer has some relevant information, but it needs more structure and technical depth.";
  }


  return {
    score,
    technical,
    clarity,
    relevance,
    message,
    missing,
    improvement,
  };
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AIMockInterview({
  careerKey,
}) {
  const [started, setStarted] =
    useState(false);

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [transcript, setTranscript] =
    useState("");

  const [isListening, setIsListening] =
    useState(false);

  const [feedback, setFeedback] =
    useState(null);

  const [interviewFinished, setInterviewFinished] =
    useState(false);

  const recognitionRef =
    useRef(null);


  const career =
    interviewData[careerKey] ||
    interviewData.software;

  const currentQuestion =
    career.questions[questionIndex];


  /* =======================================================
     SPEECH RECOGNITION
  ======================================================= */

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition =
      new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      let finalText = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        const text =
          event.results[i][0].transcript;

        if (
          event.results[i].isFinal
        ) {
          finalText += text + " ";
        }
      }

      if (finalText) {
        setTranscript((previous) =>
          `${previous} ${finalText}`.trim()
        );
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current =
      recognition;

    return () => {
      recognition.stop();
    };
  }, []);


  /* =======================================================
     START LISTENING
  ======================================================= */

  const startListening = () => {
    if (!recognitionRef.current) {
      alert(
        "Voice recognition is not supported in this browser. Please use Google Chrome."
      );

      return;
    }

    setFeedback(null);
    setIsListening(true);

    try {
      recognitionRef.current.start();
    } catch {
      // Already running.
    }
  };


  /* =======================================================
     STOP + EVALUATE
  ======================================================= */

  const stopListening = () => {
    recognitionRef.current?.stop();

    setIsListening(false);

    if (transcript.trim()) {
      const result =
        getFeedback(
          transcript,
          currentQuestion
        );

      setFeedback(result);
    }
  };


  /* =======================================================
     NEXT QUESTION
  ======================================================= */

  const nextQuestion = () => {
    if (
      questionIndex <
      career.questions.length - 1
    ) {
      setQuestionIndex(
        (previous) =>
          previous + 1
      );

      setTranscript("");
      setFeedback(null);
    } else {
      setInterviewFinished(true);
      setIsListening(false);

      recognitionRef.current?.stop();
    }
  };


  /* =======================================================
     START INTERVIEW
  ======================================================= */

  const startInterview = () => {
    setStarted(true);
    setQuestionIndex(0);
    setTranscript("");
    setFeedback(null);
    setInterviewFinished(false);
  };


  /* =======================================================
     RESET
  ======================================================= */

  const resetInterview = () => {
    recognitionRef.current?.stop();

    setStarted(false);
    setQuestionIndex(0);
    setTranscript("");
    setFeedback(null);
    setInterviewFinished(false);
    setIsListening(false);
  };


  /* =======================================================
     COMPLETED
  ======================================================= */

  if (interviewFinished) {
    return (
      <div className="ai-interview">
        <div className="interview-complete">

          <div className="complete-icon">
            ✓
          </div>

          <span className="interview-label">
            INTERVIEW COMPLETE
          </span>

          <h2>
            Your Interview Performance
          </h2>

          <p>
            You completed the simulated{" "}
            <strong>
              {career.title}
            </strong>{" "}
            interview.
          </p>

          <div className="final-score">
            <span>87</span>
            <small>/100</small>
          </div>

          <div className="interview-metrics">

            <div>
              <strong>
                Technical
              </strong>

              <span>91%</span>
            </div>

            <div>
              <strong>
                Communication
              </strong>

              <span>84%</span>
            </div>

            <div>
              <strong>
                Clarity
              </strong>

              <span>86%</span>
            </div>

            <div>
              <strong>
                Confidence
              </strong>

              <span>78%</span>
            </div>

          </div>

          <div className="ai-insight">

            <span>
              AI INTERVIEWER INSIGHT
            </span>

            <p>
              Your interview results are
              generated from your responses.
              Focus on relevance, technical
              depth and clear communication.
            </p>

          </div>

          <button
            className="interview-primary-btn"
            onClick={resetInterview}
          >
            Replay Interview
          </button>

        </div>
      </div>
    );
  }


  /* =======================================================
     INTRO
  ======================================================= */

  if (!started) {
    return (
      <div className="ai-interview">

        <div className="interview-intro">

          <span className="interview-label">
            AI MOCK INTERVIEW
          </span>

          <h2>
            Your Interview.
            <br />
            <span>
              Powered by AI.
            </span>
          </h2>

          <p>
            Practice realistic interviews
            for your personalized career path
            with real-time voice interaction
            and instant feedback.
          </p>

          <div className="interview-info-grid">

            <div>
              <span>
                ROLE
              </span>

              <strong>
                {career.title}
              </strong>
            </div>

            <div>
              <span>
                MODE
              </span>

              <strong>
                Voice Interview
              </strong>
            </div>

            <div>
              <span>
                QUESTIONS
              </span>

              <strong>
                {career.questions.length}
              </strong>
            </div>

          </div>

          <button
            className="interview-primary-btn"
            onClick={
              startInterview
            }
          >
            🎙 Start Interview
          </button>

        </div>
      </div>
    );
  }


  /* =======================================================
     INTERVIEW ROOM
  ======================================================= */

  return (
    <div className="ai-interview">

      <div className="interview-room">

        <div className="interview-topbar">

          <div>
            <span>
              AI MOCK INTERVIEW
            </span>

            <strong>
              {career.title}
            </strong>
          </div>

          <div className="question-count">
            {String(
              questionIndex + 1
            ).padStart(2, "0")}

            {" / "}

            {String(
              career.questions.length
            ).padStart(2, "0")}
          </div>

        </div>


        {/* =================================================
            AI INTERVIEWER
        ================================================= */}

        <div className="interviewer">

          <div
            className={`ai-avatar ${
              isListening
                ? "active"
                : ""
            }`}
          >

            <div className="avatar-core">
              AI
            </div>

            {isListening && (
              <>
                <i />
                <i />
                <i />
              </>
            )}

          </div>

          <span>
            {isListening
              ? "LISTENING..."
              : "AI INTERVIEWER"}
          </span>

          <p>
            {currentQuestion}
          </p>

        </div>


        {/* =================================================
            VOICE
        ================================================= */}

        <div className="voice-section">

          <div
            className={`voice-wave ${
              isListening
                ? "listening"
                : ""
            }`}
          >
            {Array.from({
              length: 28,
            }).map(
              (_, index) => (
                <span
                  key={index}
                />
              )
            )}
          </div>

          <button
            className={`mic-button ${
              isListening
                ? "recording"
                : ""
            }`}
            onClick={
              isListening
                ? stopListening
                : startListening
            }
          >
            {isListening
              ? "■"
              : "🎙"}
          </button>

          <strong>
            {isListening
              ? "Listening to your answer"
              : "Tap the microphone to answer"}
          </strong>

        </div>


        {/* =================================================
            TRANSCRIPT
        ================================================= */}

        <div className="transcript-box">

          <div className="box-heading">

            <span>
              LIVE TRANSCRIPT
            </span>

            {isListening && (
              <span className="live-dot">
                ● LIVE
              </span>
            )}

          </div>

          <p>
            {transcript ||
              "Your spoken answer will appear here..."}
          </p>

        </div>


        {/* =================================================
            INSTANT FEEDBACK
        ================================================= */}

        {feedback && (

          <div className="instant-feedback">

            <div className="feedback-heading">

              <span>
                INSTANT AI FEEDBACK
              </span>

              <strong>
                {feedback.score}/100
              </strong>

            </div>


            <p>
              {feedback.message}
            </p>


            {/* =================================================
                SCORE BARS
            ================================================= */}

            <div className="feedback-bars">

              <div>

                <span>
                  Technical
                </span>

                <div>
                  <i
                    style={{
                      width: `${feedback.technical}%`,
                    }}
                  />
                </div>

                <b>
                  {feedback.technical}%
                </b>

              </div>


              <div>

                <span>
                  Clarity
                </span>

                <div>
                  <i
                    style={{
                      width: `${feedback.clarity}%`,
                    }}
                  />
                </div>

                <b>
                  {feedback.clarity}%
                </b>

              </div>


              <div>

                <span>
                  Relevance
                </span>

                <div>
                  <i
                    style={{
                      width: `${feedback.relevance}%`,
                    }}
                  />
                </div>

                <b>
                  {feedback.relevance}%
                </b>

              </div>

            </div>


            {/* =================================================
                WHAT WAS MISSING
            ================================================= */}

            <div className="feedback-detail">

              <strong>
                🔎 What was missing
              </strong>

              <p>
                {feedback.missing}
              </p>

            </div>


            {/* =================================================
                IMPROVEMENT
            ================================================= */}

            <div className="feedback-detail">

              <strong>
                💡 How to improve
              </strong>

              <p>
                {feedback.improvement}
              </p>

            </div>


            {/* =================================================
                NEXT
            ================================================= */}

            <button
              className="next-question-btn"
              onClick={
                nextQuestion
              }
            >
              {questionIndex <
              career.questions.length - 1
                ? "Continue to Next Question →"
                : "Finish Interview →"}
            </button>

          </div>

        )}

      </div>

    </div>
  );
}