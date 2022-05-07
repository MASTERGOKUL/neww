import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences2} from "../../portfolio";
import {Fade} from "react-reveal"
import StyleContext from "../../contexts/StyleContext";
 function  AcademicUG(){
    const {isDark} = useContext(StyleContext);
    return(
        
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Course Taught UG</h1>
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