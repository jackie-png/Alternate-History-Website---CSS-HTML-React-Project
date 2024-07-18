import { useNavigate } from "react-router-dom";



export default function Homepage(){
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
                navigate("/Homepage");
                break;
        }
    }

    function handleHeaderClick(toWhere){
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
                window.scrollTo({ top: 1100, left: 0, behavior: 'smooth' });
                break;
            case 4:
                window.scrollTo({ top: 2000, left: 0, behavior: 'smooth' });
                break;
            case 5:
                window.scrollTo({ top: 2700, left: 0, behavior: 'smooth' });
                break;
            case 6:
                window.scrollTo({ top: 3600, left: 0, behavior: 'smooth' });
                break;
            default:
                navigate("/Homepage");
                break;
        }
    }
    return (
        <div className="homePage">
            <div id = "top-header" className="homeHeader">
                <div className="header-h1-Container">
                    <h1 className="header-h1">Rise of the German Hegemony</h1>
                </div>
                <div className="header-h2-Container">
                    <div className="header-h2-link" onClick={() => handleHeaderClick(3)}>
                        <h2 className="header-h2">1940-1944</h2>
                        <div id= "header-underline" className="underline"></div>
                    </div>
                    <div className="header-h2-link" onClick={() => handleHeaderClick(4)}>
                        <h2 className="header-h2">1944-1948</h2>
                        <div id= "header-underline" className="underline"></div>
                    </div>
                    <div className="header-h2-link" onClick={() => handleHeaderClick(5)}>

                        <h2 className="header-h2">1948-1951</h2>
                        <div id= "header-underline" className="underline"></div>
                    </div>
                    <div className="header-h2-link" onClick={() => handleHeaderClick(6)}>
                        <h2 className="header-h2">Peace Treaties</h2>   
                        <div id= "header-underline" className="underline"></div>
                    </div>                 
                </div>
            </div>
            <div className="image-Container">
                <div className="imageText-Centered">
                    <h1>The Global Hegemony Ruled by the German Empire</h1>
                    <h2>Yet the path to hegemony was a struggle against multiple factions</h2>
                    <h2>This Website is dedicated to recording the power struggle between these multiple factions as they all fight to secure the title of Global Hegemon</h2>
                </div>
            </div>

            <div id="timeline-Header" className="homeHeader">
                <div className="header-h1-Container">
                    <h1 className="header-h1">Timeline of Events</h1>
                </div>
            </div>

            <div className="link-container">
                <div id="link-1940" className="link-img">

                </div>
                <div>
                    <div className="description-line">
                    </div>
                    <div className="link-Description">
                        <h1 className="link-h1">
                            1940 - 1944
                        </h1>
                        <h2 className="link-h2">
                            Tentions between the major factions of the world reach their boiling point in 1940, the Canadian and French Exile governments ramp up their anti-syndicalist rhetoric as calls to return to the homeland roar louder. The Third Internationale and the Reichspakt stare eye to eye with eachother, the Russian Republic begin preparations to rectify the failures of the Tsar and reclaim the west, all the while the Japanese Empire waits for an oppertune time to strike at German East Asia. This section covers the start of the Second Weltkreig, the Battle of Western Europe and the eventual fall of the Third Internationale, and the start of the Third Weltkreig.
                        </h2>
                        <div className="homepage-description-link">
                            <h2 onClick={()=>handleClick(3)}>
                                Click to View Page
                            </h2>
                            <div id="description-underline" className="underline"></div>                           
                        </div>

                    </div>   
                    <div className="description-line">
                    </div>                 
                </div>

            </div>
            
            <div className="link-container">
                <div>
                    <div className="description-line">
                    </div>
                    <div className="link-Description">
                        <h1 className="link-h1">
                            1944 - 1948
                        </h1>
                        <h2 className="link-h2">
                            Despite having high hopes for the future of the Reichspakt, the alliance's war enthusiasm sees rapid decline as the wars goes on. The sudden and surprising declaration of war from Canada and the French Exiles plunged the German Empire into a long war, covering fronts from North America, Africa, and India. The Russians fight tooth and nail to make the German advance to the Urals as slow and gruesome as possible, the Japanese secure and fortify their holdings for a future German Invasion, and all the while a sleeping giant was about to wake up.
                        </h2>
                        <div className="homepage-description-link">
                            <h2 onClick={()=>handleClick(4)}>
                                Click to View Page
                            </h2>     
                            <div id="description-underline" className="underline"></div>                                                  
                        </div>
                    </div>   
                    <div className="description-line">
                    </div>                 
                </div>                
                <div id="link-1944" className="link-img">
                </div>


            </div>
            
            <div className="link-container">
                <div id="link-1948" className="link-img">

                </div>
                <div>
                    <div className="description-line">
                    </div>
                    <div className="link-Description">
                        <h1 className="link-h1">
                            1948 - 1951
                        </h1>
                        <h2 className="link-h2">
                            American Intervention into the now considered Third Weltkreig gave new life to the Entante who after the fall of India were on their last legs. After the fall of the Japanese Empire, all eyes were on North America as one last struggle to take down the American Junta begins, German victory was all but guaranteed at this point of the war, yet the Americans would not go down without a fight to the death. The world now watches as the Germans prepare themselves for a battle that will decide who should stand to claim global hegemony 
                        </h2>
                        <div className="homepage-description-link">
                            <h2 onClick={()=>handleClick(5)}>
                                Click to View Page
                            </h2>
                            <div id="description-underline" className="underline"></div>                                                       
                        </div>
                    </div>   
                    <div className="description-line">
                        
                    </div>                 
                </div>

            </div>
            
            <div className="link-container">
                <div>
                    <div className="description-line">
                    </div>
                    <div className="link-Description">
                        <h1 className="link-h1">
                            Peace Treaties
                        </h1>
                        <h2 className="link-h2">
                            This section holds an archive of all the peace treaties the Germans would partake in between 1940-1951 and the resulting borders changes that came with each treaty. Notable treaties include the Treaties of Paris and London, the Treaty of Moscow, the Treaty of Japan, and the Treaty of Ottawa also known as "The Treaty that Ended the Struggle"
                        </h2>
                        <div className="homepage-description-link">
                            <h2 onClick={()=>handleClick(6)}>
                                Click to View Page
                            </h2>
                            <div id="description-underline" className="underline"></div>                                                       
                        </div>
                    </div>   
                    <div className="description-line">
                        hi ter
                    </div>                 
                </div>                
                <div id="link-peace" className="link-img">
                </div>


            </div>

            <div className="footer">
                <h3 className="disclaimer">Disclaimer: Most if not all images as well as inspiration on this website were taken inside the game Hearts of Iron 4, specifcally in the popular alternate history mod "Kaiserreich: Legacy of The Weltkreig", a mod that explores a world where the Central Powers won the World War One. The contents of this website was actually a campaign I did as the German Empire and I had such a good time I decided to document as much as I can and create this website as a project and as a memento.</h3>
            </div>


        </div>

    );
}