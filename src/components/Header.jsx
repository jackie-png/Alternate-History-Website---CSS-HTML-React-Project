import { useNavigate } from "react-router-dom";

export default function Header(){
    let navigate = useNavigate();

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
        <div id = "page-header" className="homeHeader">
                <div id = "page-header-h1" className="header-h1-Container" onClick={() => handleClick(1)}>
                    <h1 className="header-h1">Rise of the German Hegemony</h1>
                </div>
                <div className="header-h2-Container">
                    <div className="header-h2-link" onClick={() => handleClick(3)}>
                        <h2 className="header-h2">1940-1944</h2>
                        <div id= "header-underline" className="underline"></div>
                    </div>
                    <div className="header-h2-link" onClick={() => handleClick(4)}>
                        <h2 className="header-h2">1944-1948</h2>
                        <div id= "header-underline" className="underline"></div>
                    </div>
                    <div className="header-h2-link" onClick={() => handleClick(5)}>

                        <h2 className="header-h2">1948-1951</h2>
                        <div id= "header-underline" className="underline"></div>
                    </div>
                    <div className="header-h2-link" onClick={() => handleClick(6)}>
                        <h2 className="header-h2">Peace Treaties</h2>   
                        <div id= "header-underline" className="underline"></div>
                    </div>                 
                </div>
            </div>            
    );
}