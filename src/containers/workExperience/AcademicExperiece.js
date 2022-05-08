import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade,Slide} from "react-reveal"
import StyleContext from "../../contexts/StyleContext";
import LineAnimation from './anim';

const  Academic =()=>{
    const {isDark} = useContext(StyleContext);
    return(

<Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
            <LineAnimation name={"Academic"}/>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
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
export default Academic;


