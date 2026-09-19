import React from "react";
import resumeFile from "../documents/Muruts Gebretsadik.pdf";

const Resume = ({ classicHeader, darkTheme }) => {

const educationDetails = [
  {
    yearRange: "2025 - 2026",
    title: "Postgraduate Certificate in Digital Construction and Engineering Analytics",
    place: "Technological University Dublin",
    desc: "Focused on digital construction, Building Information Modelling (BIM), and engineering analytics. Developed skills in data-driven construction methods, project optimisation, and digital technologies for the construction industry."
  },

  {
    yearRange: "2024 - 2025",
    title: "Full Stack Software Development",
    place: "University College Dublin",
    desc: "Developed practical skills in full-stack web development using React, Flask, Django, databases, and modern web technologies. Built dynamic applications and developed problem-solving skills applicable to digital engineering and construction workflows."
  },

  {
    yearRange: "2013 - 2018",
    title: "Bachelor of Science in Civil Engineering",
    place: "Mekelle University",
    desc: "Studied structural engineering, construction, transportation, geotechnical engineering, and infrastructure design. Developed practical experience with engineering software including AutoCAD, SAP2000, and ETABS."
  }
];




const experienceDetails = [
  {
    yearRange: "Sep 2026 - Present",
    title: "Graduate Setting Out Engineer",
    place: "Glent Civil Engineering Ltd",
    desc: "Working as a Graduate Setting Out Engineer on a major data centre construction project in Dublin. Supporting site setting out, surveying, dimensional control, and as-built verification using surveying equipment and digital construction tools. Working with site teams to ensure construction activities follow drawings, specifications, and project requirements."
  },

  {
    yearRange: "2023 - 2024",
    title: "Engineering Support – Quantity Surveying & Technical Works",
    place: "Jadiya General Construction PLC",
    desc: "Provided engineering support remotely after relocating to Ireland. Assisted with Bills of Quantities, quantity calculations, technical documentation, and other construction-related engineering tasks."
  },

  {
    yearRange: "2020 - 2023",
    title: "Site Engineer",
    place: "Jadiya General Construction PLC",
    desc: "Worked as a Site Engineer on a residential apartment project. Responsible for site supervision, setting out, quality control, progress monitoring, and ensuring construction activities followed engineering drawings, specifications, safety requirements, and project programmes."
  },

  {
    yearRange: "2018 - 2020",
    title: "Office Engineer",
    place: "Jadiya General Construction PLC",
    desc: "Supported highway design, technical documentation, quantity calculations, and project planning. Assisted with design reviews, engineering drawings, and coordination to ensure compliance with project specifications and engineering standards."
  },

  {
    yearRange: "Sep 2017 - Feb 2018",
    title: "Highway Engineer",
    place: "Defense Construction Enterprise",
    desc: "Supported highway design and construction activities through site inspections, surveying, and data collection. Assisted with technical documentation, site coordination, and communication with project teams and subcontractors."
  }
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
