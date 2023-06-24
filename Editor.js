import React, { useState, useEffect } from "react";
import InputContainer from "./InputContainer";
function Editor(props) {
  const { category, resumeInformation, setResumeInformation } = props;
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(category)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    resumeInformation[category[Object.keys(category)[0]]]
  );
  const [categoryTitle, setCategoryTitle] = useState(Object.keys(category)[0]);
  const [activeDetail, setActiveDetail] = useState(0);
  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    email: activeInformation?.detail?.email || "",
    phone: activeInformation?.detail?.phone || "",
    github: activeInformation?.detail?.github || "",
    linkedin: activeInformation?.detail?.linkedin || "",
  });

  const pointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const personalDetailsBody = (
    <div>
      <div>
        <InputContainer
          Label="Name"
          placeholder="Enter full Name"
          value={values.name}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div className="sub-card-container">
        <InputContainer
          Label="Email"
          placeholder="Enter Email"
          value={values.email}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <InputContainer
          Label="Phone"
          placeholder="Enter Phone Number"
          value={values.phone}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      </div>
      <div className="sub-card-container">
        <InputContainer
          Label="Github"
          placeholder="Enter Github link"
          value={values.github}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, github: e.target.value }))
          }
        />
        <InputContainer
          Label="Linkedin"
          placeholder="Enter Linkedin Link"
          value={values.linkedin}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, linkedin: e.target.value }))
          }
        />
      </div>
    </div>
  );

  const workExperienceBody = (
    <div>
      <div className="sub-card-container">
        <InputContainer
          Label="Title"
          placeholder="Enter role ex:frontend developer"
          value={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <InputContainer
          Label="Company"
          placeholder="Enter company name"
          value={values.companyName}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, companyName: e.target.value }))
          }
        />
      </div>
      <div className="sub-card-container">
        <InputContainer
          Label="experience"
          placeholder="Enter Years of Experience"
          value={values.experience}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, experience: e.target.value }))
          }
        />
        <InputContainer
          Label="Location"
          placeholder="Enter Location"
          value={values.location}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, location: e.target.value }))
          }
        />
      </div>
      <div className="sub-card-container">
        <InputContainer
          Label="Start Date"
          type="date"
          placeholder="Enter Start Date"
          value={values.startDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
        <InputContainer
          Label="End Date"
          type="date"
          placeholder="Enter End Date"
          value={values.endDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div>
      <div>
        <label>Enter work Description</label>
        <InputContainer
          placeholder="line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(e) => pointUpdate(e.target.value, 0)}
        />

        <InputContainer
          placeholder="line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(e) => pointUpdate(e.target.value, 1)}
        />
        <InputContainer
          placeholder="line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(e) => pointUpdate(e.target.value, 2)}
        />
      </div>
    </div>
  );

  const projectsBody = (
    <div>
      <div>
        <InputContainer
          Label="Title"
          placeholder="Enter Project Name"
          value={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div>
        <InputContainer
          Label="Overview"
          placeholder="Enter Project Overview"
          value={values.overview}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, overview: e.target.value }))
          }
        />
      </div>
      <div>
        <InputContainer
          Label="Deployed link"
          placeholder="Enter Deployed link"
          value={values.deployLink}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, deployLink: e.target.value }))
          }
        />
        <InputContainer
          Label="Github"
          placeholder="Enter Github link"
          value={values.github}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, github: e.target.value }))
          }
        />
      </div>
      <div className="sub-card-container">
        <InputContainer
          Label="Start Date"
          type="date"
          placeholder="Enter Start Date"
          value={values.startDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
        <InputContainer
          Label="End Date"
          type="date"
          placeholder="Enter End Date"
          value={values.endDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div>
      <div>
        <label>Enter Project Description</label>
        <InputContainer
          placeholder="line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(e) => pointUpdate(e.target.value, 0)}
        />
        <InputContainer
          placeholder="line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(e) => pointUpdate(e.target.value, 1)}
        />
        <InputContainer
          placeholder="line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(e) => pointUpdate(e.target.value, 2)}
        />
      </div>
    </div>
  );

  const educationBody = (
    <div>
      <div>
        <InputContainer
          Label="Title"
          placeholder="Enter Course Title Ex:B.Tech"
          value={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div>
        <InputContainer
          Label="College/School Name"
          placeholder="Enter College/School Name"
          value={values.collegeName}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, collegeName: e.target.value }))
          }
        />
      </div>
      <div className="sub-card-container">
        <InputContainer
          Label="Start Date"
          type="date"
          placeholder="Enter Start Date"
          value={values.startDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
        <InputContainer
          Label="End Date"
          type="date"
          placeholder="Enter End Date"
          value={values.endDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div>
    </div>
  );

  const skillsBody = (
    <div>
      <div>
        <InputContainer
          Label="Skill"
          placeholder="Enter Skill"
          value={values.skills}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, skills: e.target.value }))
          }
        />
      </div>
    </div>
  );

  const achievementBody = (
    <div>
      <div>
        <label>Enter Achievements</label>
        <InputContainer
          placeholder="line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(e) => pointUpdate(e.target.value, 0)}
        />
        <InputContainer
          placeholder="line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(e) => pointUpdate(e.target.value, 1)}
        />
        <InputContainer
          placeholder="line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(e) => pointUpdate(e.target.value, 2)}
        />
      </div>
    </div>
  );
  const generateBody = () => {
    switch (category[activeCategory]) {
      case category.personalDetails:
        return personalDetailsBody;
      case category.workExperience:
        return workExperienceBody;
      case category.projects:
        return projectsBody;
      case category.education:
        return educationBody;
      case category.skills:
        return skillsBody;
      case category.achievements:
        return achievementBody;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    switch (category[activeCategory]) {
      case category.personalDetails: {
        const tempData = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          github: values.github,
          linkedin: values.linkedin,
        };
        console.log(tempData);
        setResumeInformation((prev) => ({
          ...prev,
          [category.personalDetails]: {
            ...prev[category.personalDetails],
            detail: tempData,
            title: category.personalDetails,
          },
        }));
        break;
      }
      case category.workExperience: {
        const tempData = {
          title: values.title,
          companyName: values.companyName,
          experience: values.experience,
          location: values.location,
          startDate: values.startDate,
          endDate: values.endDate,
          points: values.points,
        };
        const tempDetails = [
          ...resumeInformation[category.workExperience]?.details,
        ];
        tempDetails[activeDetail] = tempData;

        setResumeInformation((prev) => ({
          ...prev,
          [category.workExperience]: {
            ...prev[category.workExperience],
            details: tempDetails,
            title: category.workExperience,
          },
        }));
        break;
      }

      case category.projects: {
        const tempData = {
          title: values.title,
          overview: values.overview,
          deployLink: values.deployLink,
          github: values.github,
          startDate: values.startDate,
          endDate: values.endDate,
          points: values.points,
        };
        // console.log(tempData);
        const tempDetails = [...resumeInformation[category.projects]?.details];
        // console.log(tempDetails);
        tempDetails[activeDetail] = tempData;
        // console.log(tempData);
        setResumeInformation((prev) => ({
          ...prev,
          [category.projects]: {
            ...prev[category.projects],
            details: tempDetails,
            title: category.projects,
          },
        }));
        break;
      }

      case category.education: {
        const tempData = {
          title: values.title,
          collegeName: values.collegeName,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        // console.log(tempData);
        const tempDetails = [...resumeInformation[category.education]?.details];
        // console.log(tempDetails);
        tempDetails[activeDetail] = tempData;
        // console.log(tempData);
        setResumeInformation((prev) => ({
          ...prev,
          [category.education]: {
            ...prev[category.education],
            details: tempDetails,
            title: category.education,
          },
        }));
        break;
      }

      case category.skills: {
        const tempData = {
          skills: values.skills,
        };
        // console.log(tempData);
        const tempDetails = [...resumeInformation[category.skills]?.details];
        // console.log(tempDetails);
        tempDetails[activeDetail] = tempData;
        // console.log(tempData);
        setResumeInformation((prev) => ({
          ...prev,
          [category.skills]: {
            ...prev[category.skills],
            details: tempDetails,
            title: category.skills,
          },
        }));
        break;
      }

      case category.achievements: {
        const tempData = {
          points: values.points,
        };
        // console.log(tempData);
        setResumeInformation((prev) => ({
          ...prev,
          [category.achievements]: {
            ...prev[category.achievements],
            points: tempData,
            title: category.achievement,
          },
        }));
        break;
      }
    }
  };
  const addingNewEl = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    console.log(Object.keys(lastDetail));
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    setResumeInformation((prev) => ({
      ...prev,
      [category[activeCategory]]: {
        ...resumeInformation[category[activeCategory]],
        details: details,
      },
    }));
    setActiveDetail(details?.length);
  };
  // console.log(category[activeCategory]);
  useEffect(() => {
    setActiveInformation(resumeInformation[category[activeCategory]]);
    setCategoryTitle(category[activeCategory]);
    setActiveDetail(0);
    setValues({
      name: activeInformation?.detail?.name || "",
      overview: activeInformation?.details
        ? activeInformation.details[0]?.overview || ""
        : "",
      companyName: activeInformation?.details
        ? activeInformation.details[0]?.companyName || ""
        : "",
      collegeName: activeInformation?.details
        ? activeInformation.details[0]?.collegeName || ""
        : "",
      location: activeInformation?.details
        ? activeInformation.details[0]?.location || ""
        : "",
      experience: activeInformation?.details
        ? activeInformation.details[0]?.experience || ""
        : "",
      deployLink: activeInformation?.details
        ? activeInformation.details[0]?.deployLink || ""
        : "",
      startDate: activeInformation?.details
        ? activeInformation.details[0]?.startDate || ""
        : "",
      // experience: activeInformation?.details
      //   ? activeInformation.details[0]?.experience || ""
      //   : "",
      github: activeInformation?.details
        ? activeInformation.details[0]?.github || ""
        : activeInformation?.detail?.github || "",
      title: activeInformation?.details
        ? activeInformation.details[0]?.title || ""
        : "",
      endDate: activeInformation?.details
        ? activeInformation.details[0]?.endDate || ""
        : "",

      points: activeInformation?.details
        ? activeInformation.details[0]?.points
          ? [...activeInformation.details[0]?.point]
          : ""
        : activeInformation.points
        ? [...activeInformation.points]
        : "",
      points: activeInformation?.points || "",
      skills: activeInformation?.details
        ? activeInformation.details[0]?.skills || ""
        : "",
      email: activeInformation?.detail?.email || "",
      phone: activeInformation?.detail?.phone || "",

      linkedin: activeInformation?.detail?.linkedin || "",
    });
  }, [activeCategory]);
  useEffect(() => {
    setActiveInformation(resumeInformation[category[activeCategory]]);
  }, [resumeInformation]);

  const deleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    setResumeInformation((prev) => ({
      ...prev,
      [category[activeCategory]]: {
        ...resumeInformation[category[activeCategory]],
        details: details,
      },
    }));

    setActiveDetail((prev) => (prev === index ? 0 : prev - 1));
  };

  useEffect(() => {
    const details = activeInformation.details;
    if (!details) return;

    setValues({
      overview: activeInformation?.details
        ? activeInformation.details[activeDetail]?.overview || ""
        : "",
      companyName: activeInformation?.details
        ? activeInformation.details[activeDetail]?.companyName || ""
        : "",
      collegeName: activeInformation?.details
        ? activeInformation.details[activeDetail]?.collegeName || ""
        : "",
      location: activeInformation?.details
        ? activeInformation.details[activeDetail]?.location || ""
        : "",
      experience: activeInformation?.details
        ? activeInformation.details[activeDetail]?.experience || ""
        : "",
      deployLink: activeInformation?.details
        ? activeInformation.details[activeDetail]?.deployLink || ""
        : "",
      startDate: activeInformation?.details
        ? activeInformation.details[activeDetail]?.startDate || ""
        : "",
      // experience: activeInformation?.details
      //   ? activeInformation.details[0]?.experience || ""
      //   : "",
      github: activeInformation?.details
        ? activeInformation.details[activeDetail]?.github || ""
        : "",
      title: activeInformation?.details
        ? activeInformation.details[activeDetail]?.title || ""
        : "",
      endDate: activeInformation?.details
        ? activeInformation.details[activeDetail]?.endDate || ""
        : "",

      points: activeInformation?.details
        ? activeInformation.details[activeDetail]?.points || ""
        : "",

      skills: activeInformation?.details
        ? activeInformation.details[activeDetail]?.skills || ""
        : "",
    });
  }, [activeDetail]);
  // console.log(activeInformation);
  // console.log(activeInformation.details);
  return (
    <div className="editor-container">
      <div className="categories">
        {Object.keys(category).map((eachCategory) => {
          {
            /* console.log(eachCategory); */
          }
          return (
            <h4
              className="category-heading"
              key={eachCategory}
              onClick={() => setActiveCategory(eachCategory)}
            >
              {eachCategory}
            </h4>
          );
        })}
      </div>

      <InputContainer
        Label="Title"
        value={categoryTitle}
        onChange={(e) => setCategoryTitle(e.target.value)}
      />

      <div className="another">
        {activeInformation?.details
          ? activeInformation?.details?.map((item, index) => (
              <div
                className="add-another"
                key={item.title + index}
                onClick={() => setActiveDetail(index)}
              >
                <p>
                  {category[activeCategory]}
                  {index + 1}
                </p>

                <p onClick={() => deleteDetail(index)}>x</p>
              </div>
            ))
          : ""}
        {activeInformation?.details &&
        activeInformation?.details?.length > 0 ? (
          <div className="add-another" onClick={addingNewEl}>
            +New
          </div>
        ) : (
          ""
        )}
      </div>

      {generateBody()}

      <button className="button" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
}

export default Editor;
