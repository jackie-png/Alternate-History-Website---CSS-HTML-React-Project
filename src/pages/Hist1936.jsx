import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import articleStyle from "../CSS-files/Article.module.css"
import homepageStyle from "../CSS-files/Homepage.module.css"

export default function Hist1936(){
    let navigate = useNavigate();

    const sidebarArr = [
        {
            "name": "The First Declaration of War, 27th July 1940",
            "element_id": "event-1",
        },
        {
            "name": "The Pacific War, 6th December 1940",
            "element_id": "event-2",
        },
        {
            "name": "Halifax Conference of December 1940",
            "element_id": "event-3",
        },
        {
            "name": "Early German War Plans",
            "element_id": "event-4",
        },
        {
            "name": "The Balkan Front, January 1941",
            "element_id": "event-5",
        },
        {
            "name": "Romanian Intervention in the Balkans, May 1941",
            "element_id": "event-6",
        },
        {
            "name": "The Western Winter Offensive, December 1941",
            "element_id": "event-7",
        },
        {
            "name": "Operation Red Flood, December 1941",
            "element_id": "event-8",
        },
        {
            "name": "British and French Troops Step Foot in Northern Germany, January 1942",
            "element_id": "event-9",
        },
        {
            "name": "German Liberation of the Home Front, February 1942",
            "element_id": "event-10",
        },
        {
            "name": "Austria Defeats Italy, April 1942",
            "element_id": "event-11",
        },
        {
            "name": "The Spring Western Offensive, April 1942 - April 1943",
            "element_id": "event-12",
        },
        {
            "name": "Iberian Liberation, May 1943",
            "element_id": "event-13",
        },
        {
            "name": "The Fall of the Commune of France, 2nd June 1943",
            "element_id": "event-14",
        },
        {
            "name": "Operation Sea Lion, 23rd August 1943 - 31st September 1943",
            "element_id": "event-15",
        },
        {
            "name": "The Autumn Eastern Offensive, September 1943",
            "element_id": "event-16",
        },
        {
            "name": "The Third Weltkrieg, 7th November 1943",
            "element_id": "event-17",
        },
    ];

    function nextYear(){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        navigate("/1944-1948");
    }

    function lastYear(){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        navigate("/1936-1940");
    }


    return (
        <div>
            <Header sidebarMenu = {sidebarArr}/>
            <div id="link-1940" className="image-Container">
                <div id ={articleStyle.section_top_title} className="imageText-Centered">
                    <h1>Prelude to 1940</h1>
                </div>             
            </div>

            <div className={articleStyle.year_header}>
                <h1>North and South America</h1>
            </div>

            <h2 id="event-1" className={articleStyle.event_header}>
                The First Declaration of War, 27th July 1940
            </h2>
            <div className={articleStyle.paragraph_container}>
                <p>As 1940 began tensions between the Third Internationale and its rivals were at an all time high, Communard forces had been caught clashing with German forces at the border in Alsace, both the Canadian and French public have been pressuring the government to act ever since the Canadians have announced their preparations for an invasion of Britain, but in the end both sides refused to react first. Peace would not last long however, the Entante with the support of the public declared war on the Internationale on the 27th of July 1940.</p>
                <p>Initially the German Empire was kept out of the war, but the German Government knew that it was matter of time before the Third Internationale took the war towards the Reichspakt, thus the government instructed the military high command to prepare for operation Schornhorst(find the name of the focus later). Internationale Intelligence managed to catch wind of the German government’s plan to strike first and thus decided to beat the Germans to the punch and began drafting an ultimatum. </p>
            </div>
            <h3>War Reaches the European Mainland</h3>
            <div className={articleStyle.paragraph_container}>
                <p>On the 4th of October 1940, the Communard Government sent an ultimatum to the German government, demanding they relinquish control of the states of Alsace and Lorraine or risk a full scale war. The Communards knew that the Germans would refuse and have prepared extensively for their refusal. As expected the Germans immediately rejected the Communards ultimatum on the 5th of October. Thus 12 days later on the 17th of October 1940, the Commune of France officially declared war on the German Empire, calling upon its allies the Union of Britain and Socialist Italy to follow suit. The Germans however would not be fighting this war in Europe alone, the Danau-Adribund lead by the Danuban Federation (reformed Austria-Hungary) would intervene on the side of the Reichspakt on the 24th of October 1940. Sending their troops to aid in France and to threaten northern Italy.</p>
                <p>War would soon spread to Eastern Europe as the Russian Empire gears up to intervene in the Second Weltkrieg against the Reichspakt. The Germans had already anticipated Russia’s entry into the war, sending over two armies to help guard the Ruthenian and Ukrainian borders of Russia. The Russians would enter the war on the 6th of Novemeber 1940 starting off a full offensive aiming to punch through Reichspakt lines. The defence was successful but the Russians had a surprise in store for the Austrians as the Belgrade Pact would be absorbed into the Moscow Accord, bringing Serbia and Greece into the war.</p>
            </div>

            <div className={articleStyle.year_header}>
                <h1>Europe</h1>
            </div>

            
            <div className={articleStyle.year_header}>
                <h1>Asia and the Pacific</h1>
            </div>

            <div className={articleStyle.year_header}>
                <h1>Africa and the Middle East</h1>
            </div>

            <div className={homepageStyle.footer}>
                <button className={articleStyle.next_button} onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        navigate("/1940-1944");
                }}>1940 - 1944</button>
            </div>

        </div>
 

            
    );
}