import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FREELANCE WEB DEVELOPER & UI/UX DESIGNER</h4>
                <h5>Freelance</h5>
              </div>
              <h3>Jan 2022 - Present</h3>
            </div>
            <p>
              Delivered 20+ client projects successfully. Increased client website
              traffic by 30%. Designed and developed responsive websites for
              clients using HTML, CSS, JavaScript, and modern frontend tools.
              Optimized website performance and loading speed.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DIGITAL MARKETING INTERN</h4>
                <h5>Internshala</h5>
              </div>
              <h3>Jul 2025 - Feb 2026</h3>
            </div>
            <p>
              Executed social media marketing campaigns across Instagram and
              LinkedIn. Promoted internship programs through WhatsApp channels.
              Developed communication and persuasion skills through direct outreach.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Technology</h4>
                <h5>Haldia Institute of Technology</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Specialization: Data Science. Currently pursuing my degree.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ISC</h4>
                <h5>Krishnagar Academy</h5>
              </div>
              <h3>2022 - 2024</h3>
            </div>
            <p>Completed higher secondary education.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ICSE</h4>
                <h5>Krishnagar Academy</h5>
              </div>
              <h3>2020 - 2022</h3>
            </div>
            <p>Completed secondary education.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
