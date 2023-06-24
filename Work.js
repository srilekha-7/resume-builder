import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import Resume from "./Resume";

function Work() {
  const category = {
    personalDetails: "Personal Details",
    workExperience: "Work Experience",
    projects: "Projects",
    education: "Education",
    skills: "Skills",
    achievements: "Achievements",
  };

  const [resumeInformation, setResumeInformation] = useState({
    [category.personalDetails]: {
      id: category.personalDetails,
      title: category.personalDetails,
      detail: {},
    },

    [category.workExperience]: {
      id: category.workExperience,
      title: category.workExperience,
      details: [],
    },

    [category.projects]: {
      id: category.projects,
      title: category.projects,
      details: [],
    },
    [category.education]: {
      id: category.education,
      title: category.education,
      details: [],
    },
    [category.skills]: {
      id: category.skills,
      title: category.skills,
      details: [],
    },
    [category.achievements]: {
      id: category.achievements,
      title: category.achievements,
      points: [],
    },
  });
  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);

  return (
    <div>
      <div>
        <Editor
          category={category}
          resumeInformation={resumeInformation}
          setResumeInformation={setResumeInformation}
        />
      </div>
      <div>
        <Resume resumeInformation={resumeInformation} category={category} />
      </div>
    </div>
  );
}

export default Work;
