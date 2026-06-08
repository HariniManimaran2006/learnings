import React from "react";
import pythonBanner from "./assets/py.jpg";
import { useNavigate } from "react-router-dom";
function PythonFullStackDashboard() {
  const navigate = useNavigate();
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
    backgroundImage: `url(${pythonBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    padding: "50px",
    color: "white",
  }}
>
           {/* Dark overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.4)",
    }}
  ></div>

  {/* Text */}
  <div style={{ position: "relative", zIndex: 1 }}>
    <h1
      style={{
        margin: 0,
        fontSize: "60px",
      }}
    >
      PYTHON
    </h1>

    <h2
      style={{
        marginTop: "10px",
        fontSize: "40px",
      }}
    >
      FULL STACK
    </h2>

    <p
    style={{
      marginTop: "5px",
      fontSize: "24px",
    }
    }>Quiz Challenge 2026</p>
  </div>
</div>
        {/* Right Side Content */}
        <div
          style={{
            width: "50%",
            padding: "30px",
            position: "relative",
          }}
        >
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
              30 Minutes
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

          <button style={playBtn}
          onClick={() => navigate("/questions")}
          >
            Play Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default PythonFullStackDashboard;