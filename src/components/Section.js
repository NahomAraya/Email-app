import React from 'react';
import './MailList.css';

function Section({Icon, title, color, selected}) {
    return (
        <div className={`mailList_sectionOption ${selected && 'mailList_sectionOption--selected'}`} 
        style={{
            borderBottom: `3px solid ${color}`,
            color: ` ${selected && color}`,
        }}
        >
            <Icon/>
            <h3>{title}</h3>

            
        </div>
    )
}

export default Section;
