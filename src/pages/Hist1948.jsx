import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";


export default function Hist1948(){

    let navigate = useNavigate();

    const sidebarArr = [
        {
            "name": "Continuation of the War in the Pacific, January 1948",
            "element_id": "event-1",
        },
        {
            "name": "Invasion of Insulindia and the Philippines, May 1948",
            "element_id": "event-2",
        },
        {
            "name": "Operation Sunset, January 1949",
            "element_id": "event-3",
        },
        {
            "name": "Invasion of China, June 1949",
            "element_id": "event-4",
        },
        {
            "name": "The End of the War in the Pacific, March 15th 1950",
            "element_id": "event-5",
        },
        {
            "name": "Second Invasion of the Caribbean, April 1950",
            "element_id": "event-6",
        },
        {
            "name": "Invasion of America, 26th Novmeber 1950",
            "element_id": "event-7",
        },
        {
            "name": "Push Towards Washington D.C, April 1951",
            "element_id": "event-8",
        },
        {
            "name": "The Fall of America, 5th July 1951",
            "element_id": "event-9",
        },
        {
            "name": "The End of the Third Weltkrieg, 7th November 1951",
            "element_id": "event-10",
        }
    ];

    function lastYear(){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        navigate("/1944-1948");
    }

    function nextYear(){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        navigate("/Peace-Treaties");
    }
    return (
        <div>
            <Header/>
            <Sidebar menu= {sidebarArr}/>
            <div className="section-container">
                <div id="link-1948" className="image-Container">
                    <div id ="section-top-title" className="imageText-Centered">
                        <h1>1948 - 1951</h1>
                    </div>
                </div>
                <div className="year-header">
                    <h1>1948</h1>
                </div>
                <h2 id="event-1" className="event-header">Continuation of the War in the Pacific, January 1948</h2>
                <div className="paragraph-container">
                    <p>Back in 1940 when the Second Weltkrieg began, the Japanese Empire had also declared war on the German Empire. The Japanese expected stiff resistance in German East Asia when invading the colony but in reality they faced little to no resistance from the German government itself. German East Asia was captured 3-4 months into the Second Weltkrieg but apart from that event the conflict essentially became frozen, until now. </p>
                    <p>The newly officiated German Pacific High Seas Fleet (a detachment of the main High Seas Fleet that grew in strength until it became its own stand alone fleet) now decended upon the Insulindian Archipelago, despite the Japanese navy matching the Germans in experience, the Pacific Fleet itself is already larger than the entire Japanese navy, a fact noticable when the Japanese Navy was decisively defeated in the South China Sea while in transport to contest the waters of Insulindia. The German submarines force caused chaos for both the Insulindian and Japanese trade fleet, causing a logistical nightmare for the garrisons on the islands of Insulindia.</p>
                </div>


                <h2 id="event-2" className="event-header">Invasion of Insulindia and the Philippines, May 1948</h2>
                <div className="paragraph-container">
                    <p>In May of 1948, the German army launched a series of Naval Invasions to cripple the Insulindian Government, dropping troops off on almost every major island in the Archipelago including the capital Batavia. Seizing the capital of Insulindia as well as the majority of major cities paralized the Insulindian government and caused public morale of the country to plummet, however the army continued to fight on with the assistance of the Japanese, managing to keep Insulindia alive for another 3 months. </p>
                    <p>After the surrender of Insulindia the Germans prepared a quick Naval Invasion of the Philippines, launching on the 20th of October 1948 and landing all around the country by the next day. It took another 2 months to traverse the rest of the country causing the Filipino government to surrender after the fall of Davao. With the collapse of the Insulindian and Filipino governments the Germans are at an optimal position to threaten the Japanese homeland. For the next month, High Command would plan one of the most extensive naval invasion plans ever concieved, Operation Sunset.</p>
                </div>

                <div className="year-header">
                    <h1>1949</h1>
                </div>
                <h2 id="event-3" className="event-header">Operation Sunset, January 1949</h2>
                
                <div className="paragraph-container">
                <p>The first phase of Operation Sunset was to surround the Japanese Home Island both navally and land wise, German submarines were sent to blockade the home island, destroy any Japanese allied convoys going in and out. The invasion of Taiwan would begin on the 24th of January 1949, arriving on the island hours later with little to no Japanese resistance, Ryukyu would shortly be seized by German paratroopers from Taiwan. From there, the Germans would naval invade southern Korea to further isolate the Japanese Home Island. </p>
                <p>With Phase One down the second phase could begin, from the airports built up in southern Korea and on Ryukyu a massive bombing campaign in southern Japan would begin as German Intelligence received word that the Japanese had fortified itself from a German invasion, placing an extensive amount of Garrisons both in and around port cities. The goal of this bombing campaign was to clear the skies and soften up the port garrisons by damaging infrastructure, airports, railways and supply hubs. Starting from February to Mid April 1949, the Germans would bomb Japan day and night to ensure their success in the upcoming invasion of the Home Islands.  </p>
                <p>Phase Three of Operation Sunset began on the 18th of April 1949, paratroopers dropping from southernn Korea would land inland on Kyushu, disrupting logistics and paralising supply to the entire island, while the paratroopers were dropping an army from Ryukyu and southern Korea would launch and land on Nagasaki. The port garrisons were completely wiped out and Japan was forced to abandon Kyushu to the Germans. With a successful beach head on Japan, the tank corp was transported over to Japan in preparations for an offensive, meanwhile the paratroopers would launch from Nagasaki behind the defensive lines near Hiroshima, disrupting supply going towards the troops holding the line at the strait between Kyushu and Honshu. Attacked from all sides the troops of the defense line surrendered and the tanks were moved towards the frontline at Hiroshima.</p>
                <p>Offensive plans were executed on in early May, due to the extensive bombing campaign and air superiority, the Japanese troops stood no chance against the armoured offensive. Hiroshima would fall on May 8th 1949, Boke fell 11 days later followed by Osaka on May 30th 1949. By now the Japanese defence of the homeland was nearly non-existent as the speed in which the Tank Corp moved caused mass disorganization for the Japanese when retreating, many divisions were encircled and cleaned up by the infantry as the Tank Corp pushed up. The Japanese Army tried to pull troops off of various mainland Asian fronts such as the Burmese and Siberian front but due to German naval supremacy they were unable to be transported home without risking being hunting down by German submarines. On the 10th of June the Germans had captured Yokohama, a neighbouring city of Tokyo, just 2 days later on the 12th of June 1949, the Japanese Emperor would call for its army to lay down its arms as peace negotiations began for the fate of the Japan. </p>
                </div>

                <h2 id="event-4" className="event-header">Invasion of China, June 1949</h2>
                <div className="paragraph-container">
                    <p>After the capitulation of Japan and the subsequent treaty of Tokyo, the Fengtian lead Republic of China refused to surrender along with the Kingdom of Siam, who has fortified itself in the Burmese front as well as its coastline, preventing any offensive in the dense jungle region or any naval invasion from gaining a beachhead. German Intelligence believe that an invasion of China wouldn’t cause to many losses as the estimated army size is believed to be about 30 times smaller than the German army. High Command’s suspicions were confirmed when the German army met light resistance at the frontlines when reaching the border between Manchuria and Korea. The invasion began on the 10th of July 1949, Harbin fell about 19 days later on 29th of July 1949 and the Germans would reach the border of Mongolia in early August 1949.</p>
                    <p>After reaching the Mongolian border the Siberian front for the Co-prosperity sphere had been cut off from the rest of the China, the Germans began marching south into China proper with the fall of Beijing on the 23rd of August 1949. The invasion into China proper faced slightly more resistance but at this point of the war there was no stopping the advance of the Reichspakt. The Germans would spend the next 2 months capturing as much Chinese territory as possible, it wasn’t until the fall of Chongqing on the 31st of October 1949 that the Republic of China finally surrendered leading to the treaty of Beijing.</p>
                </div>
                <div className="year-header">

                <h1>1950</h1>
                </div>
                <h2 id="event-5" className="event-header">The End of the War in the Pacific, March 15th 1950</h2>
                <div className="paragraph-container">
                    <p>Siam’s border was now exposed and completely unguarded when the Chinese capitulated, the invasion began as soon as German troops arrived at the border, capturing as much territory they could before the Siamese troops were able to reinforce the frontline. But as the reichspakt flooded troops in the Siamese stood no chance. By 15th of January 1950 Siam was pushed out of German Indochina and Burma leaving Siamese troops severely disorganized, yet the government did not surrender. It took another 2 months to force the Siamese government to surrender, ending the War in the Pacific.</p>
                </div>            
                <h2 id="event-6" className="event-header">Second Invasion of the Caribbean, April 1950</h2>
                <div className="paragraph-container">
                    <p>After wrapping up the War in the Pacific, focus was drawn back to North America as the US stood firm, achieving Naval Supremacy in the Caribbean. Luckily for the Germans, the Brazilians were able to hold off US forces in the North, even pushing them back into the sea. Once the German Army arrived in Brazil the first steps to recapturing the Caribbean needed to be fulfilled, taking back naval supremacy of Caribbean waters. The American Navy had the home field advantage as their fleets were closer to home, allowing for faster travel times between port and sea where as the German Navy’s nearest port was in Northern Brazil. Both the American and German Atlantic Fleet were comparable in terms of quantity yet the Germans had an ace up their sleeve, the Pacific High Seas Fleet.</p>
                    <p>After the end of the War in the Pacific, the Pacific High Seas fleet was told to merge back with the Atlantic fleet, the Atlantic fleet had not seen much action in their respective sea region due to the cautious nature the Naval commanders took, however the Pacific fleet consisted of battle hardened ships that fought constantly with the Japanese Navy in the South China sea as well as in the Pacific islands, giving them the necessary experience needed to fight in Archipelago seas. Yet despite the now combined High Seas Fleet being more experienced, Caribbean naval dominance remained contested.</p>
                    <p>High command had a new plan, utilizing paratroopers, they can completely bypass the Naval Dominance needed by performing a surprise paradrop operation on the Lower Antilles, and from there continue the paradropping operation up into Puerto Rico acquiring Naval Ports directly in the Caribbean for the High Seas Fleet to dock and repair. Thus on the 13th of September 1950, German paratroopers dropped into the Lower Antilles, forcing a second surrender of the West Indies Federation. Newly created Naval Bombers were deployed in the airports of the Lower Antilles to aid in achieving naval dominance.</p>
                    <p>On the 21st of September 1950 marked an important day in the battle for Naval Dominance. Starting off as a convoy raiding operation near Cuba, the battle escalated to a full scale Naval battle as both the German and American Fleets exchanged blows with naval bombers from both sides trying to sink as many ships as they can. In the end the Battle off the coast of Cuba was a decisive victory after having sank multiple American Battleships and Aircraft Carriers, forcing a sizable portion of the American Navy to retreat to port, giving the Germans a brief but crucial window of naval supremacy.</p>
                    <p>On the 13th of October 1950, a Naval Invasion was launched and liberated Cuba from American occupation, subsequently the Bahamas was also captured and the German Navy transferred over the majority of the German Army to be stationed in Cuba for the upcoming Invasion of America.</p>
                </div>

                <h2 id="event-7" className="event-header">Invasion of America, 26th Novmeber 1950</h2>
                <div className="paragraph-container">
                    <p>On the morning of the 26th of November 1950, the American Coast garrison in Miami were awakened by the sounds of a naval invasion by German forces, the garrison scrambled to form a cohesive defence of the city but were enveloped and circled by flanking German troops. Similar invasions were sighted up the Floridian Peninsula, capturing vital airports and military infrastructure. By the end of the 27th the entire peninsula was under German control, pushing up to Jacksonville and the border of Georgia. During December an offensive into the American deep south began, the Americans still caught off guard struggled to form a defensive line and thus had to abandon the states of Georgia and Alabama to German occupation. Fortunately for the US however, by January 1951 the offensive stopped as the Germans dug in for the winter. </p>
                    <p>During the invasion of Florida, a coalition of Reichspakt forces lead by the Austrians launched their own Naval Invasions into Mexico as a way to open up a second front on the mainland to pull troops away from the German lines in the Southern US. The initial landings were met with little resistance from the Mexican army, allowing the coalition to push deep into Mexico. After the fall of Mexico city the Mexican government collapsed, allowing Reichspakt forces to rush towards the US border. The Americans promptly pulled troops back to reinforce what remains of the Mexican army up in the north establishing a defensive line on the US border at which Reichspakt forces were unable to breakthrough. Focus drew back towards the Southeast as the Germans make aims to push towards the Mexican Border.</p>
                </div>

           <div className="year-header">

                <h1>1951</h1>
                </div>
                <h2 id="event-8" className="event-header">Push Towards Washington D.C, April 1951</h2>
                <div className="paragraph-container">
                    <p>As Spring appeared along to horizons, the Germans geared up for a push along the East Coast. the Tank corp had been positioned and following the devastation of the US air force between January and April, air superiority was achieved and Close Air Support were free from enemy interception. The Tank Corp broke through the American lines in the Carolinas, pushing and overrunning American forces on the retreat.</p>
                    <p>With a breach in the East, American forces were pulled back from both the Mexican front and west of the Mississippi, allowing German forces on the Eastern bank of the river to push through and make a march towards the Mexican border, simultaneously the Reichspakt forces in Mexico particularly on the Texan border started their own offensive into US territory aiming to meet in the middle as the Germans pushed into Louisiana. Linking up at around May 1951, Reichspakt forces were able to spread themselves out across a massive frontline stretching from now Virginia to California.</p>
                    <p>It was clear that despite having one of the largest armies in the world, the US were having trouble containing the overwhelming number of Reichspakt forces. Gaps in the American lines appeared more frequently giving the Germans the ability to exploit these gaps to rush towards major cities. </p>
                    <p>However when German forces arrive near the capital they found strong resistance in and around the Maryland, thus the Germans changed their objective and aimed to cut the US in half by pushing into the Midwest. In the span of 2 weeks, the German Tank Corp reached Lake Erie, capturing Detroit, Cleveland, Pittsburgh, and Chicago between the June 26th to June 29th, this effectively split the country in half, leaving everything in the west isolated from the capital.</p>
                </div>
                <h2 id="event-9" className="event-header">The Fall of America, 5th July 1951</h2>
                <div className="paragraph-container">
                    <p>As American defences crumbled, Washington DC stood as the US’s last stronghold but this was all futile. The American troops stationed in the capital put up a valiant effort to defend the city but in the end, the Washington DC was encircled and captured on the 1st of July 1951. General MacArthur was no where to be seen however, fleeing with the government to New York City to try to raise another stronghold but at this point the American public knew that there was no stopping the Reichspakt. Between the 2nd to the 5th of July 1950, the rest of the major east coast cities would come under German occupation, including New York City. MacArthur yet again tried to flee but the rest of his administration managed to wrestle control away from him and sued for peace with the German Empire, thus ending the American Military Junta. </p>
                    <p>After the fall of America, Canada would not be a challenge as it took only about 2 weeks for the Germans to reoccupy most Canadian cities. By August 6th 1951, the entirety of North America was now under German occupation. Yet the Entante still chose to fight, retreating to the last bastion of their empire, Australasia. but everyone including the Australasian people can see the writing on the wall, the Entante was about to lose the war.</p>
                </div>            
                <h2 id="event-10" className="event-header">The End of the Third Weltkrieg, 7th November 1951</h2>
                <div className="paragraph-container">
                    <p>It took about a month after the second fall of Canada to transport the necessary troops needed to invade Australasia. The Reichspakt, especially the Germans, did not want the Entante and Royal Family to escape their impending fate, thus they set up the most elaborate naval invasion to hit every major Australasian city simultaneously. The plan was complete on October 11st 1951, launching 1 day after on October 12nd.</p> 
                    <p>The first phase was to capture New Zealand, to test the defences of the Australasians, yet no resistance was met on the two islands. Capturing Christchurch, Auckland, and Wellington between October 12th-16th 1951</p>
                    <p>The Second phase of the Invasion started on October 24th, striking every Australian city simultaneously. From Perth to Canberra, German troops face what’s left of the Entante army as they desperately defend their positions to no avail, the Australian public as well as the army are tired of the war that has now lasted almost 8 years. Perth was captured on the 24th, Sydney and Brisbane was captured on the 27th, Canberra was captured on the 29th, and finally on 11:00, the 7th of November 1951,  the last major city of Australasia had fallen into German hands, Melbourne was captured and the British Exile government surrendered, ending the Third Weltkrieg.</p>
                </div>
                <div className="footer">
                    <button className="next-button" onClick={() => lastYear()}>1944 - 1948</button>
                    <button className="next-button" onClick={() => nextYear()}>Peace Treaties</button>
                </div>
            </div>

            
        </div>
    );
}