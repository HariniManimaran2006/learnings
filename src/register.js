import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    course: "",
  });

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#2f7f74",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "#e9f0f1",
          width: "90%",
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          padding: "40px",
        }}
      >
        {/* Left Section */}
        <div style={{ justifyContent: "center" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              justifyContent: "center",
              width: "200px",
              marginBottom: "20px",
              alignItems: "center",
            
              }}
          />
        </div>

        <div
          style={{
            width: "50%",
            textAlign: "center",
          }}
        >
          <h1 style={{ marginTop: "120px",
            marginright: "50px",
           }}>
            REGISTER TO OUR COURSE
          </h1>

          <p                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "30px",
              alignItems: "center",
              marginright: "50px",
            }}
          >
            Join our learning platform and build skills needed for the
            digital future. This course is designed to provide a strong
            foundation in programming and software development.
          </p>

          <button
            onClick={() => navigate("/login")}
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div
          style={{
            width: "40%",
            backgroundColor: "#1a1717",
            color: "white",
            padding: "30px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            📖 REGISTER HERE
          </h2>

          <form>
            <input
              type="text"
              placeholder="Enter full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "none",
                borderBottom: "2px solid white",
                background: "transparent",
                color: "white",
              }}
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "none",
                borderBottom: "2px solid white",
                background: "transparent",
                color: "white",
              }}
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "none",
                borderBottom: "2px solid white",
                background: "transparent",
                color: "white",
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "none",
                borderBottom: "2px solid white",
                background: "transparent",
                color: "white",
              }}
            />

            <select
              value={formData.course}
              onChange={(e) =>
                setFormData({ ...formData, course: e.target.value })
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
              }}
            >
              <option value="">Select Course</option>
              <option>Full Stack Development</option>
              <option>UI/UX Design</option>
              <option>Python</option>
              <option>C++</option>
            </select>

            <button
              type="button"
              onClick={handleRegister}
              style={{
                width: "90px",
                padding: "12px",
                backgroundColor: "#6c63ff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                display: "block",
                margin: "20px auto",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;