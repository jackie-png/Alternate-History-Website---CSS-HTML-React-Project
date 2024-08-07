import { useNavigate } from "react-router-dom"
import headerStyle from "../CSS-files/Header.module.css"
import { useState } from "react"
import sidebarContext from "../App.jsx"
import Sidebar from "./Sidebar.jsx"

export default function Header(props){
    let navigate = useNavigate();
    let [sidebarOut, setSidebarOut] = useState(false);


    function handleClick(toWhere){
        switch (parseInt(toWhere)) {
            case 1:
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                navigate("/Homepage");
                break;
            case 2:
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                navigate("/1936-1940");
                break;
            case 3:
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                navigate("/1940-1944");
                break;
            case 4:
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                navigate("/1944-1948");
                break;
            case 5:
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                navigate("/1948-1951");
                break;
            case 6:
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                navigate("/Peace-Treaties");
                break;
            default:
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                navigate("/Homepage");
                break;
        }
    }
    return (
        <>
            <div id = {headerStyle.page_header} className={headerStyle.home_Header}>
                <div className={headerStyle.sidebarButton} onClick={() => {
                    setSidebarOut(prev => {
                        return !prev
                    })
                }}></div>                      
                <div id = {headerStyle.page_header_h1} className={headerStyle.header_h1_Container} onClick={() => handleClick(1)}>
                    <h1 className={headerStyle.header_h1}>Rise of the German Hegemony</h1>
                </div>
                <div className={headerStyle.header_h2_Container}>
                    <div className={headerStyle.header_h2_link} onClick={() => handleClick(2)}>
                        <h2 className={headerStyle.header_h2}>Prelude to 1940</h2>
                        <div id= {headerStyle.header_underline} className={headerStyle.underline}></div>
                    </div>
                    <div className={headerStyle.header_h2_link} onClick={() => handleClick(3)}>
                        <h2 className={headerStyle.header_h2}>1940-1944</h2>
                        <div id= {headerStyle.header_underline} className={headerStyle.underline}></div>
                    </div>
                    <div className={headerStyle.header_h2_link} onClick={() => handleClick(4)}>
                        <h2 className={headerStyle.header_h2}>1944-1948</h2>
                        <div id= {headerStyle.header_underline} className={headerStyle.underline}></div>
                    </div>
                    <div className={headerStyle.header_h2_link} onClick={() => handleClick(5)}>

                        <h2 className={headerStyle.header_h2}>1948-1951</h2>
                        <div id= {headerStyle.header_underline} className={headerStyle.underline}></div>
                    </div>
                    <div className={headerStyle.header_h2_link} onClick={() => handleClick(6)}>
                        <h2 className={headerStyle.header_h2}>Peace Treaties</h2>   
                        <div id= {headerStyle.header_underline} className={headerStyle.underline}></div>
                    </div>                 
                </div>
            </div>
            <Sidebar menu= {props.sidebarMenu} barOut = {sidebarOut}/>
        </>            
    );
}