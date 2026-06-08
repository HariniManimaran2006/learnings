import React, { useState, useEffect } from "react";

function QuizPage() {
  const [time, setTime] = useState(1800);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");

  const questions = [
    {
      question: "Who developed Python?",
      options: [
        "Guido van Rossum",
        "James Gosling",
        "Dennis Ritchie",
        "Bjarne Stroustrup",
      ],
    },
    {
      question: "Python is a ______ language.",
      options: ["Compiled only", "Interpreted", "Both Compiled and Interpreted", "None of the above"],
    },
    {
      question: "Which symbol is used for comments in Python?",
      options: ["//", "/* */", "#", "--"],
    },
     {
      question: "Which function displays output?",
      options: ["print()", "display()", "show()", "output()"],
    },
    {
      question: "Which function takes user input?",
      options: ["input()", "scan()", "read()", "get()"],
    },
     {
      question: "Which data type stores text?",
      options: ["str", "int", "float", "bool"],
    },
    {
      question: "Which data type stores whole numbers?",
      options: ["str", "int", "float", "bool"],
    },
     {
      question: "Which data type stores True or False?",
      options: ["str", "int", "float", "bool"],
    },
    {
      question: "Which operator is used for addition?",
      options: ["+", "-", "*", "/"],
    },
    {
      question: "Which operator is used for exponentiation?",
      options: [" ^", "**", "//", "%%"],
    },
    {
      question: "Which operator performs floor division?",
      options: [" ^", "**", "//", "%%"],
    },
    {
      question: "Which operator gives remainder?",
      options: [" ^", "**", "//", "%%"],
    },
    {
      question: "Which keyword is used for conditional statements?",
      options: ["if", "else", "elif", "switch"],
    },
     {
      question: "Which keyword is used when the if condition is false?",
      options: ["elseif", "else", "otherwise", "then"],
    },
    {
      question: "Which keyword checks another condition?",
      options: ["elseif", "else", "otherwise", "then"],
    },
    {
      question: "Which loop is used to iterate over a sequence?",
      options: ["foreach", "for", "while", "do-while"],
    },
     {
      question: "Which loop runs while a condition is true?",
      options: ["foreach", "for", "while", "do-while"],
    },
    {
      question: "Which keyword exits a loop?",
      options: ["continue", "stop", " break", "exit"],
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      <style>
        {`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Poppins,sans-serif;
        }

        body{
          background:#f5f5f5;
        }

        .container{
          width:75%;
          margin:40px auto;
        }

        .card{
          background:white;
          border-radius:12px;
          padding:20px;
          box-shadow:0 3px 10px rgba(0,0,0,0.08);
          margin-bottom:20px;
        }

        .header{
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .stats{
          display:flex;
          gap:15px;
          margin-top:20px;
        }

        .stat-box{
          flex:1;
          border:1px solid #ddd;
          border-radius:10px;
          padding:15px;
        }

        .label{
          color:gray;
          font-size:12px;
        }

        .value{
          font-size:22px;
          font-weight:bold;
          margin-top:8px;
        }

        .progress-track{
          margin-top:20px;
          height:8px;
          background:#ddd;
          border-radius:20px;
        }

        .progress-fill{
          height:100%;
          background:#111827;
          border-radius:20px;
          transition:0.5s;
        }

        .question-title{
          font-size:28px;
          margin:20px 0;
        }

        .option{
          border:1px solid #ddd;
          padding:15px;
          border-radius:8px;
          margin-bottom:12px;
          cursor:pointer;
          transition:.3s;
        }

        .option:hover{
          background:#f3f4f6;
        }

        .selected{
          background:#e0f2fe;
          border:2px solid #2563eb;
        }

        .btn-section{
          display:flex;
          justify-content:space-between;
        }

        .btn{
          padding:12px 25px;
          border:none;
          border-radius:8px;
          cursor:pointer;
        }

        .prev{
          background:#e5e7eb;
        }

        .next{
          background:#111827;
          color:white;
        }

        .footer{
          text-align:center;
          color:gray;
          margin-top:20px;
        }
      `}
      </style>

      <div className="container">
        {/* Top Card */}
        <div className="card">
          <div className="header">
            <div>
              <h2>Python Full Stack Development Quiz</h2>
              <p style={{ color: "gray" }}>
                Week 1: Python Fundamentals
              </p>
            </div>

            <button className="btn prev">
              Question Map
            </button>
          </div>

          <div className="stats">
            <div className="stat-box">
              <div className="label">Time Remaining</div>
              <div className="value">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </div>
            </div>

            <div className="stat-box">
              <div className="label">Progress</div>
              <div className="value">
                {currentQuestion + 1} / {questions.length}
              </div>
            </div>

            <div className="stat-box">
              <div className="label">Answered</div>
              <div className="value">
                {selected ? 1 : 0} / {questions.length}
              </div>
            </div>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${
                  ((currentQuestion + 1) / questions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="card">
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            <span
              style={{
                background: "#f3f4f6",
                padding: "4px 8px",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              Question {currentQuestion + 1}
            </span>

            <span
              style={{
                background: "#fff7ed",
                color: "#ea580c",
                padding: "4px 8px",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              Medium
            </span>
          </div>

          <h2 className="question-title">
            {questions[currentQuestion].question}
          </h2>

          {questions[currentQuestion].options.map((option) => (
            <div
              key={option}
              className={`option ${
                selected === option ? "selected" : ""
              }`}
              onClick={() => setSelected(option)}
            >
              {option}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="card">
          <div className="btn-section">
            <button
              className="btn prev"
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1);
                  setSelected("");
                }
              }}
            >
              Previous
            </button>

            <button
              className="btn next"
              onClick={() => {
                if (currentQuestion < questions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                  setSelected("");
                }
              }}
            >
              Next →
            </button>
          </div>
        </div>

        <div className="footer">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>
    </>
  );
}

export default QuizPage;