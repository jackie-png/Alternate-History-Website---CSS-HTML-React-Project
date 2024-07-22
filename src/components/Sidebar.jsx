import sidebarStyle from "../CSS-files/Sidebar.module.css"
import headerStyle from "../CSS-files/Header.module.css"
import { useState } from "react";


function Sidebar(props){

    function eventScroll(toWhere){
        console.log(toWhere);
        let e = document.getElementById(toWhere.element_id);
        e.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'start'});
    }

    return(            
    <div id={props.barOut ? sidebarStyle.sidebar_In : sidebarStyle.sidebar_Out} className={sidebarStyle.page_sidebar}>
        <h3 className={sidebarStyle.sidebar_title}>Major Events</h3>
        {props.menu.map((element, index) => (
            index % 2 != 0 ? (
                <div className={sidebarStyle.sidebar_element} key={index} onClick={() => eventScroll(element)}>
                    <h3 className={sidebarStyle.sidebar_h3}>
                        {element.name}
                    </h3>        
                    <div id={sidebarStyle.sidebar_underline} className={headerStyle.underline}></div>        
                </div>
            ) : (
                <div id={sidebarStyle.odd_element_index} className={sidebarStyle.sidebar_element} key={index} onClick={() => eventScroll(element)}>
                    <h3 className={sidebarStyle.sidebar_h3}>
                        {element.name}
                    </h3>           
                    <div id={sidebarStyle.sidebar_underline} className={headerStyle.underline}></div>             
                </div>
            )
            ))
        }
    </div>
    );
}

export default Sidebar