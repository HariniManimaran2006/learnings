import React from "react";

function PythonFullStackDashboard() {
  const cardStyle = {
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    overflow: "hidden",
    marginTop: "20px",
  };

  const playBtn = {
    background: "#21a6f3a2",
    color: "#fff",
    border: "none",
    padding: "15px 50px",
    borderRadius: "30px",
    fontSize: "18px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        Python Full Stack Quizzes
      </h1>

      <div style={cardStyle}>
        {/* Left Side Banner */}
        <div
          style={{
            width: "50%",
            color: "Black",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              marginBottom: "5px",
            }}
          >
            PYTHON
          </h1>

          <h2
            style={{
              fontSize: "40px",
              marginBottom: "15px",
              marginTop: "-10px",
              width: "fit-content",
            }}
          >
            FULL STACK
          </h2>

          <p
            style={{
              fontSize: "24px",
            }}
          >
            Quiz Challenge 2026
          </p>
        </div>

        {/* Right Side Content */}
        <div
          style={{
            width: "50%",
            padding: "30px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "#4c5fff",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            5,000 Participants
          </div>

          <h2
            style={{
              marginTop: "50px",
              marginBottom: "15px",
            }}
          >
            Python Full Stack Development Quiz
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
            }}
          >
            Test your knowledge in Python, HTML, CSS, JavaScript,
            React.js, Django, APIs, Databases, Git, and Full Stack
            Development concepts.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "25px",
            }}
          >
            <span
              style={{
                background: "#b9f3b9",
                padding: "10px 15px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              20 Questions
            </span>

            <span
              style={{
                background: "#ffd08a",
                padding: "10px 15px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              600 Sec
            </span>
          </div>

          <div style={{ marginTop: "20px" }}>
            <p>
              <strong>Start Date:</strong> June 10, 2026
            </p>

            <p>
              <strong>End Date:</strong> June 30, 2026
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "25px",
              marginTop: "20px",
              fontWeight: "600",
            }}
          >
            <span>🏆 Certificate</span>
            <span>📄 Terms & Conditions</span>
          </div>

          <p
            style={{
              marginTop: "20px",
              color: "#444",
            }}
          >
            By : Python Full Stack Academy
          </p>

          <button style={playBtn}>
            Play Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default PythonFullStackDashboard;