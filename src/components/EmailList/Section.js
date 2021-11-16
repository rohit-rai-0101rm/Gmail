import { BorderBottom } from '@material-ui/icons'
import React from 'react'
import'./section.css'
const Section = ({Icon,title,number,color,selected}) => {
    return (
        <div className={`section ${selected &&'section--selected'}`}
            style={{
                borderBottom: `3px solid ${color}`,
                color:`${selected && color}`,
            }}
            >
                <Icon/>
                <h4>{title}</h4>
        </div>
    )
}

export default Section
