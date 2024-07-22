import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import articleStyle from "../CSS-files/Article.module.css"
import homepageStyle from "../CSS-files/Homepage.module.css"


export default function Hist1944(){
    let navigate = useNavigate();

    const sidebarArr = [
        {
            "name": "The Push Towards the Urals, January 1944",
            "element_id": "event-1",
        },
        {
            "name": "The Ottoman Lead Excursion into Central Asia",
            "element_id": "event-2",
        },
        {
            "name": "First Moves Against the Entante, November 1944",
            "element_id": "event-3",
        },
        {
            "name": "The Battle of the Atlantic and the Invasion of North Africa, January 1945",
            "element_id": "event-4",
        },
        {
            "name": "Invasion of the Kingdom of Canada, June 1945",
            "element_id": "event-5",
        },
        {
            "name": "Invasion of the Dominion of India, August 14th 1946",
            "element_id": "event-6",
        },
        {
            "name": "US Intervention into the Third Weltkrieg, 7th March 1947",
            "element_id": "event-7",
        },
        {
            "name": "The Fall of India, 26th June 1947",
            "element_id": "event-8",
        }
    ];

    function nextYear(){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        navigate("/1948-1951");
    }
    function lastYear(){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        navigate("/1940-1944");
    }
    return (
        <div>
            <Header sidebarMenu = {sidebarArr}/>

            <div className={articleStyle.section_container}>
                <div id="link-1944" className="image-Container">
                    <div id ={articleStyle.section_top_title} className="imageText-Centered">
                        <h1>1944 - 1948</h1>
                    </div>
                </div>
                <div className={articleStyle.year_header}>
                    <h1>1944</h1>
                </div>
                <h2 id="event-1" className={articleStyle.event_header}>The Push Towards the Urals, January 1944</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>As the Autumn offensive went on, it became increasingly clear that despite heavy casualties on the Russian’s side, the Russian government and army were more than willing to continue the fight. What was once thought to be the final offensive now appeared to be the start of a gruling campaign in Russia, made even more difficult due to a strained supply line as the armies of the Reichspakt pushed deeper into western Russia. By 7th of January 1944, St Petersburg and Moscow were captured by the German army, yet the Russians did not surrender. Through the winter and spring the Reichspakt army slowly pushed their way towards the Urals while in the southern armies were closing in on Tsaritsyn, the last major city west of the Ural mountains. Reichspkt forces would encircle and capture the city by the 25th of July 1944, yet the Russians continued to fight on. As Autumn of 1944 came around, the Germans had reached the Ural Mountains and had managed to link up with Ottaman forces in Central Asia but it wasn't until the fall of Yekaterinburg on the 16th of November 1944 did the Russian Army finally lay down their arms. The Fall of Russia marked a major milestone for the Reichspkt as it signified the end of the Second Weltkrieg</p>
                </div>            
                <h2 id="event-2" className={articleStyle.event_header}>The Ottoman Lead Excursion into Central Asia</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>One of the major contributing factors to the fall of Russia was the Ottoman lead invasion of central asia during the 1943. Though initially struggling to breakthrough the middle eastern coalition eventually broke through Russian defences in Turkmenistan and began rapidly taking over large swaths of territory in Central Asia. This prompted the Russian army to send troops to hold the line there but all attempts were thwarted as the newly modernized Ottaman army specialized in desert combat, experienced that was gained from the war of the sands of 1937 between the Cairo Pact and Ottomans. This Central Asian front eventually reached the borders of Siberia, forcing the Russians to garrison a large front line with troops that were desperately needed in the western front. At the end of the war, the Ottoman lead coalition was rewarded with overlordship over all of the central Asia and receiving praise for their actions in helping end the Russian front. </p>
                </div>

                <h2 id="event-3" className={articleStyle.event_header}>First Moves Against the Entante, November 1944</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>During the final days of the push towards the Urals, the Entante would stage attacks against Reichspakt forces along the Spanish border, fortunately no major breakthrough in Spain occured due to the advantageous geography of the Spanish terrain near the border. As the Russian front wrapped up, the armies of the eastern front were transported to the border of Portugal to commence a quick counter attack. Striking through the centre of the country, the Portuguese and Entante forces stood no chance against the battle hardened German forces, leading to the surrender of Portugal on the 18th of November 1944.</p>
                    <p>While the army was busy in Portugal the Navy was tasked to secure trade routes in the Atlantic. The Submarine fleets were tasked with patrolling and disrupting Entante trade the waters near the Azores and Portuguese control cape Verde while the High Seas fleet was on the nearby Canary Islands. On December 15th 1945 a large Entante Fleet in transport was spotted off the coast of the Azores, the High Seas fleet caught wind of their presences and was immediately dispatched to intercept this fleet, what happened next would be one of the largest naval battles in German history. The Battle of the Azores was a decicive victory for the German high seas fleet, the Entante fleet was caught completely by surprise as they believed that they were able to evade detection on their way to west Africa. In the end, the battle would prove to be a irrecoverable to the Canadian Navy, cementing German dominance in the Atlantic for the foreseeable future. </p>
                </div>

                <div className={articleStyle.year_header}>
                    <h1>1945 - 1946</h1>
                </div>
                <h2 id="event-4" className={articleStyle.event_header}>The Battle of the Atlantic and the Invasion of North Africa, January 1945</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>While the army was busy in Portugal the surface fleets of the High Seas Fleet was tasked to secure trade routes in the Atlantic, particularly the waters around the Canary Islands. Meanwhile the Submarine fleets were tasked with patrolling and disrupting Entante trade the waters near the Azores and Cape Verde. On December 15th 1945 a large Entante Fleet in transport was spotted off the coast of the Azores, the High Seas fleet caught wind of their presences and was immediately dispatched to intercept this fleet, what happened next would be one of the largest naval battles in German history as fleets from Canada and Germany face off to determine the future of the Atlantic. As the Battle of the Azores came to an end, is was clear that the Germans had achieved a decisive naval victory as the Entante fleet was caught completely by surprise, thinking that they were able to evade detection on their way to west Africa. In the end, the battle would prove to be a irrecoverable loss to the Canadian Navy as many capital ships including 2 aircraft carriers were either sunk or required months to repair. As the Entante navy retreated, German dominance in the Atlantic was secured for the foreseeable future. </p>
                    <p>With the Atlantic secured, France was now isolated from any reinforcements from North America. Allowing the Germans to stage a naval invasion into Morocco to secure the Straits of Gibraltar. Landing in Morocco on the 10th of January 1945, the German army aided with a Tank Corp spearhead pushed towards Algiers while the Ottomans pushed into Libya and Tunisia. By the 31st of January 1945 the Nationalist French Government surrendered however their troops would continue to fight in West Africa.</p>
                </div>
                <h2 id="event-5" className={articleStyle.event_header}>Invasion of the Kingdom of Canada, June 1945</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>After the fall of France Canada now stood as the last bastion of the Entante, however crossing the Atlantic in one Naval Invasion from Europe would be impractical, thus the Germans needed a forward base of operations. The target for this endeavour would be the West Indies Federation. Using Cuba as a staging ground, several naval invasions and would land on islands like Jamaica, the Bahamas, Bermuda, and the lower Antilles resulting in the capitulation of the West Indies Government. From there the German prepared one final Naval Invasion to land in Canada and end the war. Landing in Halifax on June 5th 1945, the Germans met serious resistance in New Brunswick as they pushed out of Nova Scotia. To circumvent this defence a second naval invasion would take place and land behind the Canadian defensive lines on the mouth of the Saint Lawrence, Quebec City was flooded with German troops with the Tank Corp arriving shortly after to help in the Canadian front. The New Brunswick defence was now completely surrounded and subsequently destroyed, clearing the way for the German troops in nova scotia to move up. Ottawa and Toronto would fall to the Germans on August 6th and 27th with intensifying Canadian resistance meeting the Germans at every city. </p>
                    <p>Despite the fall of Toronto and Ottawa the Canadian government did not surrender, leading to the Germans having to traverse the vast forests of Northern Ontario. The remaining Canadian forces set up defensive lines between Manitoba and Ontario, preparing to bleed the Germans dry when they reach their defences. For the next couple months after capturing Southern Ontario the Germans would find themselves trying to pierce the entrenched Manitoba line to no avail. The main reason for their failure to break through the line at first was the poor infrastructure and logistics network in Northern Ontario as well as the harsh winter conditions of Northern Canada. To alleviate supply strains the Germans pulled the Tank Corp out of Canada in preparation for a possible invasion of India, thus leaving a pure infantry army to secure the rest of Canada. For the next couple months of winter the Germans would focus on building up military infrestructure in hopes of solving the logistics issues on the frontlines. When the supply lines had been established a German breakthrough was achieved easily, opening the road to the Canadian praries as the German Army captured Winnipeg in mid April. Through the summer of 1946 the Germans drove across the Prairies facing minimal Canadian resistance up until they reached the Rocky Mountains where the Canadians setup their final defence lines. The Canadians put up a valiant effort to defend their last Major city Vancouver, but the city would be captured on September 15th 1946 causing the Canadian government to surrender. </p>
                    <p>Unfortunately for the Germans however, the Royal Family and British Exile government had fled Canada months backs without German intelligence picking it up. When the fall of Canada was received the British exiled government proclaimed that the Entante will fight until the last man. Revealing that the British and Royal family had fled to India to continue the fight. It was now apparent that the defensive lines setup in Manitoba and in the Rockies were intended to delay the German advance long enough to evacuate the British government.</p>
                    <p>Morale in Germany was now at an all time low as the Canadian invasion was suppose to the invasion that would end the war. The German government was prepared to enter into peace negotiations with the Entante but with the British vowing to fight to the last man, the German governemnt had no choice but to continue on. The goal now is to quickly and decicively defeat the Entante in India in order to force the Entante to surrender. This was compounded with the fact with German intelligence indicating a possible US intervention in the war. Thus a timer had been set on the German government to force a surrender of the Entante before the US could join the war.</p>
                </div>
                <h2 id="event-6" className={articleStyle.event_header}>Invasion of the Dominion of India, August 14th 1946</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>Preparations for an Invasion of India had been underway ever since capturing Southern Ontario in the summer of 1945, evident with the fact that the Tank corp had been relocated to the Middle East preparing for a possible invasion. When it became evident that the Entante was not going to surrender after the fall of Canada, an Indian invasion was bound to happen. </p>
                    <p>The generals in the Middle East had a sense Canada would not be where the Entante surrendered, thus operations for the Invasion of India began well in advance before the fall of Canada on August 16th 1945, the first objectives were to secure Sri Lanka and the Maldives as a forward operating base. Using the Airfields in Sri Lanka, paratroopers would paradrop behind enemy lines in the southern tip of India, assisting a Naval Invasion by the Marines. Once the southern tip was secure as a beach head, the main German army would be transported over to begin offensive operations. The Indian army was one of the largest in the world but saw little combat where as the German army had their most experienced armies on the Indian front as a way to swiftly bring India down. The battle up the peninsula saw fierce fighting from the Indian and combined Entante armies, from January to February 1947 the Germans were only able to push up to central India capturing major cities like Hyderabad, but this was not enough to bring India down.</p>
                    <p>By this point, German intellegence received word that the US is currently discussing intervention in the Third Weltkrieg as they felt threatened by the possible presence of pro-german governments to the north and south of the border. With this knowledge, high command pressured the generals of the Indian front to continue offensive actions immediately and to be as aggressive as possible. The generals argued that they needed more time to recuperate and adapt their initial offensive plans as they faced stiff Indian resistance, however they knew that if they didn’t continue their momentum their chances of winning would diminish and thus continued offensive actions without proper planning. Despite major losses on both sides of the invasion, the Germans were able to push up to northern India, capturing Mumbai and securing the state of Orissa. But on March 7th 1946, the German government would receive the news they had been dreading the most. The US had officially joined the Entante.</p>
                </div>
                <div className={articleStyle.year_header}> 
                    <h1>1947</h1>
                </div>
                <h2 id="event-7" className={articleStyle.event_header}>US Intervention into the Third Weltkrieg, 7th March 1947</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>After almost 10 years of reconstruction since the Second American civil war, the now firmly entrentched Military Junta of the United States of America officially announced its admission into the Entante and its subsequent declaration of war on the Reichspakt. This news was recieved with dread across the Reichspakt, the Entante were on its last legs ever since the fall of Canada and France 2 years ago, but with American intervention into the Third Weltkrieg the Entante have regained its fighting force. American entry would also mean that the occupation of Canada as well as all possessions in the Americas were now in active threat. There was no way the Reichspakt were going to be able to hold onto Canada, thus a mass evacuation was issued to try and save as many Reichspakt troops as possible before the Americans started their march. </p>
                    <p>German Naval Dominance in the Atlantic was now challenged by a large influx of fresh American fleets. Brazil and Cuba were in active threat of American troops, being the only Reichspakt members in the Americas it would have been foolish not to assume that Brazil and Cuba would be the first to see American troops. Temporary naval dominance by the Americans would disrupt evacuation attempts in Canada, leaving tens of thousands of Reichspakt men captured by the Americans. Trade in the Atlantic halted as the High Seas fleet moved to contest American fleets. By April 1947, Canada and the West Indies Federation had been liberated by American forces while Cuba was the first to be fully occupied by the US. Even though the American Navy had been confined near the Americas, Brazilian waters were still contested between the two navies. </p>
                    <p>Public morale and war support had increased ever since the successful invasion of India, but the news of US intervention plummeted morale as everyone realized that with the liberation of the Canada and Caribbean holdings compounded with serious challenge over naval dominance of the Atlantic, the war was now no where near over. There was no way the Entante would accept any attempts to broker a peace deal from the Reichspak, thus the only option for the German Empire is to keep fighting.</p>
                </div>
                <h2 id="event-8" className={articleStyle.event_header}>The Fall of India, 26th June 1947</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>With US entry into the war, the generals on the Indian front saw no reason to continue agressively pushing deeper into India. The frontlines fell silent for a short period between March to May 1947 giving both sides a much needed break and time for the Germans to build up military infrastructure and let supply lines catch up to the frontlines. When offensive actions resumed in June, Delhi was swiftly captured on the 8th of June 1947, by the 15th of June the frontline was split when the troops reached the Himalayas, the Tank Corp was relocated to the west with the aim of pushing towards the Iranian troops in Pakistan where as the east will continue towards Siam. By the 26th of July 1947, the Dominion of India surrendered with the British Government and Royal family returning back to Canada after its liberation.   </p>
                </div>
                <div className={homepageStyle.footer}>
                    <button className={articleStyle.next_button} onClick={() => lastYear()}>1940 - 1944</button>
                    <button className={articleStyle.next_button} onClick={() => nextYear()}>1948 - 1951</button>
                </div>                
            </div>




        </div>
    );
}