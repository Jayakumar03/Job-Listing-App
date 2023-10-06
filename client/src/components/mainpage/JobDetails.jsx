import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./jobdetails.css";

export const JobDetails = () => {
  return (
    <>
    <div className="job-main-container">
      <div className="job-details-container">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/1200px-Tesla_logo-e1659037140772.png?auto=format&q=60&fit=max&w=930"></img>
        <div className="job-details-section">
          <h3>Frontend developer</h3>
          <div className="">
            <span>
              <FontAwesomeIcon className="icon" icon={faCoffee} />
                 11-50
            </span>
            <span>
              
              <FontAwesomeIcon  className="icon"icon={faCoffee} />
              50,00
            </span>
            <span>
              <FontAwesomeIcon className="icon" icon={faCoffee} />
              Delhi
            </span>
          </div>
          <div>
            <span>Office</span>
            <span>Fulltime</span>
          </div>
        </div>
      </div>

      <div className="job-skill-section">
        <div className="skills">
          <span>Frontend</span>
          <span>Css</span>
          <span>Javascript</span>
          <span>Html</span>
        </div>

        <div className="button-container">
          <button id="no-bg-button">Edit Job</button>
          <button >view details</button>
        </div>
      </div>
    </div>


    <div className="job-main-container">
      <div className="job-details-container">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/1200px-Tesla_logo-e1659037140772.png?auto=format&q=60&fit=max&w=930"></img>
        <div className="job-details-section">
          <h3>Frontend developer</h3>
          <div className="">
            <span>
              <FontAwesomeIcon className="icon" icon={faCoffee} />
                 11-50
            </span>
            <span>
              
              <FontAwesomeIcon  className="icon"icon={faCoffee} />
              50,00
            </span>
            <span>
              <FontAwesomeIcon className="icon" icon={faCoffee} />
              Delhi
            </span>
          </div>
          <div>
            <span>Office</span>
            <span>Fulltime</span>
          </div>
        </div>
      </div>

      <div className="job-skill-section">
        <div className="skills">
          <span>Frontend</span>
          <span>Css</span>
          <span>Javascript</span>
          <span>Html</span>
        </div>

        <div className="button-container">
          <button id="no-bg-button">Edit Job</button>
          <button >view details</button>
        </div>
      </div>
    </div>


    

    </>
  );
};
