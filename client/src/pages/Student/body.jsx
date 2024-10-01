import banner from "../../assets/Images/students.png";
import Calendar from "../../components/Calendar/calendar.js";
import "../../components/Calendar/calendar.css";
import { useEffect } from "react";

export function Body() {
  useEffect(() => {
    Calendar();
  }, []);

  return (
    <>
      <div style={{display:"flex" , background:"white"}}  className="studentcontent">
        <div className="leftbox">
          <img src={banner} alt="banner" width="98%" />
          <br />
          <div className="a1">
            <div className="substring">
              <i className="fa-solid fa-user"></i>
              <div className="cols">
                <h5>Student profile</h5>
                <p className="grey">Edit profile</p>
              </div>
            </div>
            <div className="substring">
              <i className="fa-solid fa-clipboard"></i>
              <div className="cols">
                <h5>Attendance</h5>
                <p className="grey">view attendance</p>
              </div>
            </div>
            <div className="substring">
              <i className="fa-solid fa-bullhorn"></i>
              <div className="cols">
                <h5>exam alert</h5>
                <p className="grey">Updates about exam</p>
              </div>
            </div>
          </div>
          <div className="a1">
            <div className="substring">
              <i className="fa-solid fa-laptop"></i>
              <div className="cols">
                <h5>Virtual Classes</h5>
                <p className="grey">Online classes</p>
              </div>
            </div>
            <div className="substring">
              <i className="fa-solid fa-book-open-reader"></i>
              <div className="cols">
                <h5>Digital library</h5>
                <p className="grey">Online library</p>
              </div>
            </div>
            <div className="substring">
              <i className="fa-solid fa-book-open"></i>
              <div className="cols">
                <h5>Grade & report card</h5>
                <p className="grey">view grades and marks</p>
              </div>
            </div>
          </div>
          <div className="a1">
            <div className="substring">
              <i className="fa-solid fa-question"></i>
              <div className="cols">
                <h5>Doubt Clearance</h5>
                <p className="grey">Student doubt clearing</p>
              </div>
            </div>
            <div className="substring">
              <i className="fa-regular fa-calendar"></i>
              <div className="cols">
                <h5>Timetable</h5>
                <p className="grey">Class timetable</p>
              </div>
            </div>
            <div className="substring">
              <i className="fa-solid fa-file-circle-check"></i>
              <div className="cols">
                <h5>Assignment</h5>
                <p className="grey">Assignments & projects</p>
              </div>
            </div>
          </div>
          <div className="a1">
            <div className="substring">
              <i className="fa-solid fa-dollar-sign"></i>
              <div className="cols">
                <h5>
                  Payment <br /> Management
                </h5>
                <p className="grey">Manage payments</p>
              </div>
            </div>
            <div className="substring">
              <i className="fa-solid fa-thumbs-up"></i>
              <div className="cols">
                <h5>Faculty Feedback</h5>
                <p className="grey">Feedback on faculty</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="calendar-container">
            <header className="calendar-header">
              <p className="calendar-current-date"></p>
              <div className="calendar-navigation">
                <span id="calendar-prev" className="material-symbols-rounded">
                  chevron_left
                </span>
                <span id="calendar-next" className="material-symbols-rounded">
                  chevron_right
                </span>
              </div>
            </header>

            <div className="calendar-body">
              <ul className="calendar-weekdays">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="calendar-dates"></ul>
            </div>
          </div>

          <div className="faculty-container">
            <div className="faculty-members">
              <h4>Faculty Members</h4>
              <ul>
                <li>
                  <img
                    src="images/img1.png"
                    alt="Francis Tran"
                    className="image_circle"
                  />{" "}
                  <h4>Francis Tran</h4>
                </li>
                <li>
                  <img
                    src="images/img2.png"
                    alt="Elliana Palacios"
                    className="image_circle"
                  />{" "}
                  <h4>Elliana Palacios</h4>
                </li>
                <li>
                  <img
                    src="images/img3.png"
                    alt="Katherine Webster"
                    className="image_circle"
                  />{" "}
                  <h4>Katherine Webster</h4>
                </li>
              </ul>
            </div>
            <button type="button" className="showmore">
              Show more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
