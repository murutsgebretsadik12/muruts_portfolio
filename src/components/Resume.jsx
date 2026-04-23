import React from "react";
import resumeFile from "../documents/Muruts Gebretsadik.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "Sep 2025 - Jun 2027",
      title: "Postgraduate in Digital Construction and Engineering Analytics",
      place: "Technological University Dublin",
      desc: "Specializing in digital construction, BIM, and engineering analytics. Focus on data-driven construction methods, project optimization, and advanced digital tools for the construction industry."
    },
   
    {
      yearRange: "2024 - 2025",
      title: "Full Stack Software Development",
      place: "University of College Dublin",
      desc: "The Full Stack Software Developer program at University College Dublin focuses on building dynamic applications using Flask, Django, and React, equipping students with comprehensive skills in full-stack development for modern web solutions.",
    },
    {
      yearRange: "2013 - 2018",
      title: "Civil Engineering",
      place: "Mekelle University",
      desc: "The Civil Engineering program at Mekelle University covers design, sustainability, and programming with C++, alongside advanced tools like AutoCAD, SAP2000, and ETABS, preparing students for modern infrastructure challenges",
    }
  ];

  const experienceDetails = [
   
    {
      yearRange: "2020 - 2023",
      title: "Site Engineer",
      place: "Jadia Construction Plc",
      desc: "Worked as a Site Engineer at Jadia Construction Plc on the Tsegaye Birhane & Family Real Estate project. Responsible for site supervision, quality control, and ensuring construction work followed engineering drawings, safety standards, and project deadlines."
    },
    {
      yearRange: "2018 - 2020",
      title: "Office Engineer",
      place: "Jadia Construction Plc",
      desc: "Worked as an Office Engineer at Jadia Construction Plc, supporting highway design and project planning. Prepared technical documents, assisted in design reviews, and ensured compliance with engineering standards and project requirements."
    },
    {
      "yearRange": "Sep 2017 - Feb 2018",
      "title": "Highway Engineer",
      "place": "Defense Construction Enterprise",
      "desc": "Assisted in the design and planning of highway projects, ensuring adherence to safety standards and engineering guidelines. Conducted site inspections and data collection to support construction progress. Supported project managers with daily site coordination and communication with subcontractors."
    },
 

  ];
  const skills = [
    {
      name: "AutoCAD",
      percent: 90,
    },
    {
      name: "Revit",
      percent: 70,
    },
    {
      name: "SAP2000",
      percent: 85,
    },
    {
      name: "Civil 3D",
      percent: 75,
    },
    {
      name: "ETABS",
      percent: 80,
    },
    
    {
      name: "Structural Analysis",
      percent: 75,
    },
    {
      name: "Project Management",
      percent: 80,
    },
    {
      name: "Eagle Point Software",
      percent: 75,
    },

  
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Python",
      percent: 70,
    }
  ];
  


  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
