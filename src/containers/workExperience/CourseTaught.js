import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences2} from "../../portfolio";
import {Fade} from "react-reveal"
import StyleContext from "../../contexts/StyleContext";
import LineAnimation from "./anim";
 function  AcademicUG(){
    const {isDark} = useContext(StyleContext);
    return(
        
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
            <LineAnimation name={"ourse Taught UG"}/>
              <div className="experience-cards-div1">
                {workExperiences2.TaughtexperienceUG.map((card, i) => {
                    return (
                        
                        <ExperienceCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                            company: card.company,
                            desc: card.desc,
                            date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      
                      descBullets: card.descBullets
                    }}
                    />
                    
                    );
                })}
             
              </div>
            </div>
          </div>
        </Fade>
    );
}

export default (AcademicUG);