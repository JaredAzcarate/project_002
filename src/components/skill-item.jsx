import React from "react";
import '../styles/skillItem.css'

function SkillItem({porcentaje, idioma}) {
    return(
        <>
            <div className="skills-item_porcentaje">
                <svg width="130" height="130">
                    <circle cx='50%' cy='50%' r='60' strokeWidth='10'
                    strokeDasharray='376' strokeDashoffset={376 - 376 * (porcentaje / 100) } >
                    </circle>
                </svg>
                    <h2><span>{porcentaje}</span>%</h2>
            </div>

            <h4 className="mt-3">{idioma}</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </>
    )
}
export default SkillItem;