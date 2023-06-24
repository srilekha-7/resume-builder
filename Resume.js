import React, { useEffect, useState } from "react";
import "./Home.css";
function Resume(props) {
  const { resumeInformation, category } = props;
  console.log(resumeInformation);
  //   console.log(resumeInformation[category[0].title]);

  const formatDate = (value) => {
    if (!value) return " ";
    const date = new Date(value);
    return `${date.getDate()}/${
      date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + date.getMonth() + 1
    }/${date.getFullYear()}`;
  };
  const information = {
    personalDetails: resumeInformation[category.personalDetails],
    workExp: resumeInformation[category.workExperience],
    projects: resumeInformation[category.projects],
    education: resumeInformation[category.education],
    skills: resumeInformation[category.skills],
    achievements: resumeInformation[category.achievements],
  };
  const categoryContainer = {
    [category.workExperience]: (
      <div>
        <div key={"workExp"}>
          <h1>{information.workExp.title}</h1>
          <div className="hr-line"></div>
          <div>
            {information.workExp.details.map((eachItem) => {
              return (
                <div key={eachItem.title}>
                  <p className="resume-category-heading">{eachItem.title}</p>
                  <p className="resume-category-heading">
                    {eachItem.companyName}
                  </p>
                  <p className="resume-category-heading">
                    {eachItem.experience}
                  </p>
                  <p className="resume-category-heading">{eachItem.location}</p>
                  <div className="resume-category-heading">
                    {formatDate(eachItem.startDate) -
                      formatDate(eachItem.endDate)}
                  </div>
                  <div>
                    {eachItem.points?.length > 0 && (
                      <div>
                        {eachItem.points.map((item, index) => (
                          <p
                            key={item + index}
                            className="resume-category-heading"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),

    [category.projects]: (
      <div>
        <div key={"projects"}>
          <h1>{information.projects.title}</h1>
          <div className="hr-line"></div>
          <div>
            {information.projects.details.map((eachItem) => {
              return (
                <div key={eachItem.title}>
                  <p className="resume-category-heading">{eachItem.title}</p>
                  <p className="resume-category-heading">{eachItem.overview}</p>
                  <p className="resume-category-heading">
                    {eachItem.deployLink}
                  </p>
                  <p className="resume-category-heading">{eachItem.github}</p>
                  <div className="resume-category-heading">
                    {formatDate(eachItem.startDate) -
                      formatDate(eachItem.endDate)}
                  </div>
                  <div>
                    {eachItem.points?.length > 0 && (
                      <div>
                        {eachItem.points.map((item, index) => (
                          <p
                            key={item + index}
                            className="resume-category-heading"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),

    [category.education]: (
      <div>
        <div key={"education"}>
          <h1>{information.education.title}</h1>
          <div className="hr-line"></div>
          <div>
            {information.education.details.map((eachItem) => {
              return (
                <div key={eachItem.title}>
                  <p className="resume-category-heading">{eachItem.title}</p>
                  <p className="resume-category-heading">
                    {eachItem.collegeName}
                  </p>

                  <div className="resume-category-heading">
                    {formatDate(eachItem.startDate) -
                      formatDate(eachItem.endDate)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),

    [category.skills]: (
      <div>
        <div key={"skills"}>
          <h1>{information.skills.title}</h1>
          <div className="hr-line"></div>
          <div>
            {information.education.details.map((eachItem) => {
              return (
                <div key={eachItem.title}>
                  <p className="resume-category-heading">{eachItem.skills}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),

    [category.projects]: (
      <div>
        <div key={"projects"}>
          <h1>{information.projects.title}</h1>
          <div className="hr-line"></div>
          <div>
            {information.projects.details.map((eachItem) => {
              return (
                <div>
                  {eachItem.points?.length > 0 && (
                    <div>
                      {eachItem.points.map((item, index) => (
                        <p
                          key={item + index}
                          className="resume-category-heading"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),
  };

  const [columns, setColumns] = useState([
    [category.workExperience, category.skills, category.achievements],
    [category.projects, category.education],
  ]);
  //   console.log(columns);
  //   console.log(workExp);
  return (
    <div className="resume-container">
      <div>
        <p className="resume-name">{information.personalDetails.detail.name}</p>
      </div>

      <div className="links">
        <a>{information.personalDetails.detail.email}</a>
        <a>{information.personalDetails.detail.phone}</a>
        <a>{information.personalDetails.detail.github}</a>
        <a>{information.personalDetails.detail.linkedin}</a>
      </div>

      <div className="resume-content-container">
        <div>
          <div>
            <p className="columns-heading">
              {columns[0].map((item) => categoryContainer[item])}
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="columns-heading">
              {" "}
              {columns[1].map((item) => categoryContainer[item])}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
