import React, { useEffect } from "react";
import Logo from "./assets/logo.png";
import watermark from "./assets/watermark.png";
import background from "./assets/background.jpg";
function Dashboard() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const update = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        if (current < target) {
          counter.innerText = Math.ceil(current + target / 50);
          setTimeout(update, 20);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });
  }, []);

  return (
    <>
    <div style={{ textAlign: "center" }}>
  <img
    src={Logo}
    alt="Logo"
    style={{
      width: "200px",
      height: "auto",
      marginBottom: "20px",
    }}
  />
</div>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        body{
          overflow-x:hidden;
        }

        .dashboard{
          min-height:100vh;
          position:relative;
        }

        .background{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:100%;
          background:url({background});
          background-size:cover;
          background-position:center;
          opacity:0.15;
          z-index:-1;
        }

        header{
          background:#f3feff;
          text-align:center;
          padding:20px;
          border-bottom:2px solid #ccc;
          position:relative;
          overflow:hidden;
        }

        header::before{
          content:'';
          position:absolute;
          top:0;
          left:-100%;
          width:200px;
          height:100%;
          background:linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.5),
            transparent
          );
          animation:shine 4s infinite;
        }

        @keyframes shine{
          100%{
            left:120%;
          }
        }

        .logo{
          width:300px;
        }

        .welcome{
          padding:30px 60px;
          animation:slideIn 1s ease;
        }

        .welcome h2{
          font-size:40px;
          margin-bottom:10px;
        }

        @keyframes slideIn{
          from{
            opacity:0;
            transform:translateX(-50px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .cards{
          display:flex;
          flex-wrap:wrap;
          gap:20px;
          padding:0 60px;
        }

        .card{
          width:180px;
          height:140px;
          background:rgba(255,255,255,0.15);
          backdrop-filter:blur(15px);
          border-radius:20px;
          padding-top:25px;
          text-align:center;
          border:1px solid rgba(255,255,255,0.2);
          transition:.3s;
        }

        .card h1{
          margin-top:20px;
        }

        .card:hover{
          transform:translateY(-12px);
          box-shadow:
          0 0 20px rgba(0,150,255,.4),
          0 0 40px rgba(0,150,255,.3);
        }

        .content{
          display:flex;
          justify-content:space-between;
          gap:30px;
          padding:40px 60px;
        }

        .course-box{
          flex:2;
          background:rgba(255,255,255,0.15);
          backdrop-filter:blur(15px);
          padding:25px;
          border-radius:20px;
          box-shadow:0 8px 32px rgba(0,0,0,0.1);
        }

        .course-box h2{
          margin-bottom:20px;
        }

        .course-box p{
          margin-top:15px;
        }

        progress{
          width:100%;
          height:20px;
        }

        .banner{
          flex:1;
          text-align:center;
          padding-top:40px;
        }

        .banner img{
          width:300px;
          opacity:0.2;
          margin-top:-150px;
          animation:floatLogo 5s ease-in-out infinite;
        }

        @keyframes floatLogo{
          0%{transform:translateY(0);}
          50%{transform:translateY(-20px);}
          100%{transform:translateY(0);}
        }

        .banner h2{
          opacity:0.5;
          margin-top:15px;
        }

        .buttons{
          padding:0 60px 40px;
        }

        button{
          border:none;
          color:white;
          padding:15px 30px;
          border-radius:15px;
          cursor:pointer;
          font-size:18px;
          margin-right:15px;
          transition:.3s;
        }

        button:hover{
          transform:scale(1.1);
        }

        .profile-btn{
          background:#1e88e5;
        }

        .logout-btn{
          background:#ff3d3d;
        }

        @media(max-width:768px){
          .content{
            flex-direction:column;
          }

          .cards{
            justify-content:center;
          }

          .welcome{
            padding:20px;
          }

          .content,
          .cards,
          .buttons{
            padding:20px;
          }
        }
      `}</style>

      <div className="dashboard">
        <div
  className="background"
  style={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>
          <section className="welcome">
          <h2>Welcome, STUDENT NAME 👋</h2>
          <p>Track your learning progress here.</p>
        </section>

        <div className="cards">
          <div className="card">
            <h3>Total Course</h3>
            <h1>5</h1>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <h1>3</h1>
          </div>

          <div className="card">
            <h3>Assignments</h3>
            <h1>5</h1>
          </div>

          <div className="card">
            <h3>Quiz Score</h3>
            <h1>
              <span className="counter" data-target="90">
                0
              </span>
              %
            </h1>
          </div>
        </div>

        <div className="content">
          <div className="course-box">
            <h2>My Course</h2>

            <p>React JS - 80%</p>
            <progress value="80" max="100"></progress>

            <p>Node JS - 60%</p>
            <progress value="60" max="100"></progress>

            <p>MySQL - 90%</p>
            <progress value="90" max="100"></progress>
          </div>

          <div className="banner">
            <img src={watermark} alt="Watermark" />
            <h2>Enroll New Course Now</h2>
          </div>
        </div>
        <div className="buttons">
          <button className="profile-btn">View Profile</button>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;