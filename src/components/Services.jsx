import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Construction Project Management",
      desc: "Efficiently oversee projects from planning to completion, ensuring timelines, budget, and quality standards are met.",
      icon: "fas fa-hard-hat",
    },
    {
      name: "Structural Design & Analysis",
      desc: "Utilizing software like SAP2000 and ETABS to ensure safe, efficient, and cost-effective structural designs.",
      icon: "fas fa-building",
    },
    {
      name: "Site Supervision & Quality Control",
      desc: "Monitoring construction sites to ensure compliance with safety regulations and engineering standards.",
      icon: "fas fa-user-check",
    },
    {
      name: "AutoCAD & Civil 3D Drafting",
      desc: "Creating detailed engineering drawings and plans using AutoCAD, Civil 3D, and other drafting tools.",
      icon: "fas fa-drafting-compass",
    },
    {
      name: "Quantity Surveying & Cost Estimation",
      desc: "Accurately estimating material costs and managing budgets to optimize project expenditures.",
      icon: "fas fa-calculator",
    },
    {
      name: "Infrastructure Development & Planning",
      desc: "Designing and planning roadways, drainage systems, and sustainable infrastructure projects.",
      icon: "fas fa-road",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
