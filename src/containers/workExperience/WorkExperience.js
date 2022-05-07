import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences,workExperiences2} from "../../portfolio";
import {Fade} from "react-reveal"
import Example from "./collapse";

import AcademicExperiece from "./AcademicExperiece";
import AcademicUG from './CourseTaught';
import AcademicPg from "./coursetaughtPg";
export default function WorkExperience() {
 
  if (workExperiences.display) {
    return (
      <div id="experience">
       <AcademicExperiece/>

         <AcademicUG/>
      <AcademicPg/>
      
      </div>
    );
  }
  return null;
}
