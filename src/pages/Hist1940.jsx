import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import articleStyle from "../CSS-files/Article.module.css"
import homepageStyle from "../CSS-files/Homepage.module.css"

export default function Hist1940(){

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
            <Header/>
            <Sidebar menu= {sidebarArr} />
            <div className={articleStyle.section_container}>
                <div id="link-1940" className="image-Container">
                    <div id ={articleStyle.section_top_title} className="imageText-Centered">
                        <h1>1940 - 1944</h1>
                    </div>
                </div>

                <div className={articleStyle.year_header}>
                    <h1>1940</h1>
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

                <h2 id="event-2" className={articleStyle.event_header}>The Pacific War, 6th December 1940</h2>
                
                <div className={articleStyle.paragraph_container}>
                    <p>As the fires of the Second Weltkrieg spread in Europe, the Japanese Empire in Asia saw an oppartunity to expand their influence in the Pacific as German East Asia, despite having a large fleetof ships, still heavily relied on their overlords for support. Seeing the the German homeland is currently focused on the war in Europe, Japan would declare war on German East Asia in late November in hopes that the German Empire would not retaliate. The colony would request support from the German Empire but the Japanese were correct about their assumptions, the homeland would send a strong condemnation of Japan’s actions but were only able to offer material support in the form of weapons due to the distance as well as the situation threatening the homeland at that instance. </p>
                    <p>Without support from the German homeland, German East Asia would not last long, their navy was decimated by the Japanese Navy and Singapore would come under occupation by the end of the year. Yet the War in the Pacific did not end as the German Empire would vow to return to Asia in the future.</p>
                </div>
                
                <h2 id="event-3" className={articleStyle.event_header}>Halifax Conference of December 1940</h2>
                
                <div className={articleStyle.paragraph_container}>
                    <p>With the Germans and the Entante on the same side in this war, it was clear to both parties that it would be beneficial towards the war effort if they were to cooperate with each other. Thus during December of 1940, German Delegates were invited to Halifax to discuss the possibility of cooperating with the Entante. </p>
                    <p>The Conference opened up with recognition of the German colonial gains after the first Weltkrieg as eventhough the Entante had conceded a large chunk of their colonial empire to the German Empire, they had refused to recognize such concessions. These concessions notably include all British territory apart from South Africa, French Indochina, Sri Lanka, Madagascar. Luckily for the Germans the Entante agreeded to officially recognize its concessions at the end of the first Weltkrieg.</p>
                    <p>The second issue to bring up was with France, the French Exiles made their demands clear when they wanted to reclaim all core French territories, including Alsace Lorraine. The Germans made it clear that they were not giving up Alsace-Lorraine but made a counter-offer that in exchange for helping liberate the French homeland, France would join Mittleuropa. </p>
                    <p>Unfortunately the French remained defiant to any subsequent offer the Germans made, seeing that no progress was being made with the conference, the German delegates decided to leave the conference entirely, resulting in the failure of the Halifax conference. The Entante and Reichspakt would officially not cooperate with each other. </p>
                </div>
                
                <h2 id="event-4" className={articleStyle.event_header}>Early German War Plans</h2>
                <h3>The Eastern Front</h3>

                <div className={articleStyle.paragraph_container}>
                    <p>The Eastern front was the largest front the Reichspakt had to cover, stretching from the Baltic Sea to the Black Sea the initial plan of action was to the border in White Ruthenia and the Baltic Duchy since fortifications had been built in preparation for such an event</p>
                    <p>The Southern part of the eastern front was left in the hands of primarily the Ukrainians and Austria as German forces risk letting go effective defences if they chose to spread out across the wide front</p>
                    <p>The military high command deduced that the best course of action when fighting the Russian was to play the defensive game, allowing the Russian make the first move. Their goal was that if the defences hold effectively, planning for the war effort can be used somewhere else, particularly in the West with the Internationale. When all other fronts have been dealt with the Eastern front could be dealt with swiftly.</p>
                </div>

                <h3>The Western Front</h3> 

                <div className={articleStyle.paragraph_container}>

                <p>The Western was the narrowest front of the war, with the declaration of neutrality from the Benelux Union the frontline only stretched from the Belgian border of Lorriane down to the Alpine border of Switzerland. Thus the army was tasked to initially hold the border with the fortifications built in Lorraine, while the air force was tasked to clear the skies of enemy fighters and bombers to secure future air superiority for any future offensive operations</p>
                </div>

                <h3>The Italian and Balkan Front</h3>

                <div className={articleStyle.paragraph_container}>
                    <p>With the entrance of Austria and the Donau-Adribund Alliance, a southern front opened consisting of Socialist Italy in the west as well as Serbia and Greece in the east (who are part of the Moscow accord)</p>
                    <p>The German high command considered the Balkan nations to be the easiest nations to take out early on, this would allow the Austrians to redirect forces to other fronts and allow direct access to Ottoman and Iranian Oil fields, vital to keep the Air Force, Tank Corp, and German High Seas Fleet running at maximum efficiency. </p>
                </div> 


                <div className={articleStyle.year_header}>
                    <h1>1941</h1>
                </div>

                <h2 id="event-5" className={articleStyle.event_header}>The Balkan Front, January 1941</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>The German Balkan Army was created to fight in the Serbia, comprising of mainly an infantry army pulled from the Western front but included was the newly created German Tank Corp who’s objectives were to breakthrough the Serbian defensive lines on the Danube and Serbian border</p>
                    <p>As January 1941 comes in, the offensive began with a quick and decisive breach of the Serbian river line. This breach was unexpected by the Serbians who quickly moved to secure the hole in their defensive as German tanks tried to exploit the breach. Serbian forces were unable to contain the breach and soon Belgrade was surrounded and captured on the 13th of January 1941</p>
                    <p>The rest of Serbia soon surrendered and the German Army quickly moved towards the Greek border. The surrender of Serbia caught the Greek army by surprise but they were able to move into defensible positions. The German Tank Corp was only able to capture a small part of the northern Greece before they had to stop due to mounting Greek resistance and overextension, having to wait for their supply lines to catch up.</p>
                </div>            
                <h2 id="event-6" className={articleStyle.event_header}>Romanian Intervention in the Balkans, May 1941</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>When the Second World War began, Romania didn’t initially enter the war despite having close relations with the Moscow accord. However when the Austrian intervention occurred and fighting in the Balkan began, the Romanian government saw this as an opportunity to seize more land, particularly Austrian Transylvania, thus during the first few months into the German Offensive into the Balkan, a Romanian lead Transylvanian uprising took hold of all major supply lines and cities in Austrian Transylvania, officially marking Romania’s entry into the war but peculiarly never joined the Moscow Accord.</p>
                    <p>the Austrian garrison on the now old Romanian border were now effectively encircled, with Austrian high command scrambling to free the encircled divisions, too no avail. This also put the supply lines of the German forces in Greece in jeopardy as well as the forces allocated to the Balkan front were minimal, leaving no one to garrison occupied Serbia. </p>
                    <p>The Romanian intervention turned out to be only a minor inconvenience as when Greece surrendered on the 17th of April 1941, German forces were redirected to Romanian, leading the the fall of Bucharest on the 19th of August 1941, concluding the Balkan Front</p>
                </div>            
                <h2 id="event-7" className={articleStyle.event_header}>The Western Winter Offensive, December 1941</h2>
                
                <div className={articleStyle.paragraph_container}>
                    <p>After the Balkan front wrapped up, the Tank Corp was moved to the western front in preparation for an offensive into the commune of France, initially the Communard and British forces initiated an offensive into the German frontlines, however the offensive was a huge failure as they were unable to break through the border fortifications and thus decided to also play the defensive game. Thus the western front saw little to no action, until the start of the winter western offensive.</p>
                    <p>Initial confidence in the offensive was high due to the successes seen in the Balkan front with the tank corp, war unpreparedness was resolved, the air force had cleared a significant number of enemy fighters, and the Internationale forces on the western front was looking sparser than it was months ago. Thus when December 1941 came around, the offensive began.</p>
                    <p>The tanks were able to break through the Internationale’s defences beginning to spread out to try an encircle the enemy front line by outflanking their retreat to the south, however near by communard reinforcements made that task impossible. the Internationale redirected forces from Italy to secure the breach, successfully blocking the Tank Corp from completing their encirclement. Thus the German Army was ordered to do advance across the entire frontline. With the full weight of the German army and supply problems on the frontlines the Internationale ordered its armies to evacuate the frontline at lorraine to a more defensable position near Verdun and Dijon. The German Army was unable to captialize on their retreat as the Internationale had meticulously planned its retreat to minimize chaos. </p>
                    <p>The frontlines solidified along a defensive line going from Dijon up to western Walonia</p>
                </div>

                <h2 id="event-8" className={articleStyle.event_header}>Operation Red Flood, December 1941</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>Months before the German offensive into Communard France, the Internationale were preparing for a daring maneuver to cripple the German war industry. A British led naval invasion was planned to hit the coastal cities of Bremen and Wilhelmshaven with a push towards the Rhineland and into central Germany. In order for this operation to be successful the British need the German High command to be distracted by a major event, thus as an effort to orchestrate a German offensive the British instructed the Communards to pull back troops from the frontlines to give the appearance of a thin defence.</p>
                    <p>The French were initially sceptical of this plan, arguing that the Germans would not fall for such an easy deception, yet complied with Britain’s request as the Communard intelligence predicts that an incoming German offensive was soon to be initiated. When January 1941 rolled around the promised German invasion was underway, giving the British the perfect opportunity to launch the naval invasion. </p>
                    <p>In preparation for Operation Red Flood, the Internationale initiated a massive deception campaign to cause mass confusion among the German high command, the aim was to get the Germans to pull off the port garrisons, feeding intelligence about how the German navy managed to crush the British navy, giving them full naval supremacy, but in reality the German navy was docked in Kiel for naval exercises. Communication lines between the fronts and Berlin were cut by saboteurs leaving Berlin mostly in the dark for the incoming naval invasions. </p>
                </div>

                <div className={articleStyle.year_header}>
                    <h1>1942</h1>
                </div>

                <h2 id="event-9" className={articleStyle.event_header}>British and French Troops Step Foot in Northern Germany, January 1942</h2>
                
                <div className={articleStyle.paragraph_container}>
                    <p>Early January 1942, British and French troops successfully capture Bremen and Wilhelmshaven, as reinforcements arrive the invasion force spreads outs rapidly, sweeping through western central Germany, disrupting the Western Front’s supply lines and logistics. However, high command was still caught in the dark as communication lines are being repaired. By now the Internationale forces have reached major cities such as Hamburg, Cologne, and large areas of the Rhineland. It was only when enemy forces reached the outskirts of Berlin did high command realize they had a massive problem on their hands.</p>
                    <p>By now, the offensive into France had stopped due to the Internationale's invasion cutting supply lines, it was only now that generals from the western front received orders to redeploy troops to defend the home front. Reichspakt members also came to aid in containing the situation in the German home front. Efforts to contain Internationale forces initially failed as Communard and British forces still continued to push agressively even though losses were mounting. Extra effort would be put in the east as internationale forces close in on Berlin during the last days of January, Berlin itself would unfortunately come under occupation on the 2nd of February 1941. Operation Red Flood was a massive embarrassment to the German military as in the span of one month, half of the country including the capital and major industrial centers like the Rhineland would come under occupation. But unfortunately for the Internationale, that was as far as their invasion would go.</p>
                </div>

                <h2 id="event-10" className={articleStyle.event_header}>German Liberation of the Home Front, February 1942</h2>
                
                <div className={articleStyle.paragraph_container}>
                    <p>The German Tank Corp along with the assistance of a couple wings of Fighters and Close Air Support bombers started conducting counteroffensive operations in mid February. Their goal was simple, drive the invaders back out to the sea. The German Tank Corp began their counteroffensive on the Rhine river, pushing upwards towards the city of Cologne and continuing until they liberated Bremen and Wilhelmshaven. The speed that the Tank Corp was going at took the Internationale by surprised, causing them to start retreating from the front to more defensive territory in an effort to stop the Tank Corp from taking the last major port city Hamburg. This retreat lead to the liberation of Berlin on the 30th of March 1942. </p>
                    <p>Unfortunately the Internationale they were unable to fortify Hamburg fast enough as in early April 1942, the city was liberated by Reichspakt forces, causing the entire invasion force to be cut off from reinforcements. By mid April 1942, the last of the Internationale forces in Germany surrendered. Operation Red Flood though successful at first turned out to be a massive loss for the Internationale, just over one hundread thousand men were left stranded to become German POWs</p>
                    <p>The German High Command would never let this type of event ever happen again, leaving 3 divisions of Infantry to guard all coastal ports that border the North Sea, while the rest of the home front army were redeployed back to the western front to in preparation for a Spring Offensive into France. </p>
                </div>

                <h2 id="event-11" className={articleStyle.event_header}>Austria Defeats Italy, April 1942</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>During the First Western Offensive and the subsequent battle of the home front, the Austrian Army had been hard at work trying to break through the Italian Alps. With the help of the German Airforce in the Region, the Austrians managed to breakthrough the eastern alps and from there were able to sever supply lines between northern Italy and Rome. From there with the assitance of German troops, the Austrians pushed down the Italian peninsula, reaching Rome by mid April. By mid May, the Italians had surrendered to the Austrians, leaving southern France vulnerable to an Austrian invasion. </p>
                </div>            
                <h2 id="event-12" className={articleStyle.event_header}>The Spring Western Offensive, April 1942 - April 1943</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>With the Battle of the Home front concluded, the German army were now more motivated than ever to bring down the Internationale. The plan was to sweep through northern France, quickly capturing Paris and reaching the English channel, cutting the entire northern front from supply allowing for an easy clean up effort. Then from there, sweep through western France and down to the Pyrenees.</p>
                    <p>The Offensive began in mid April, smashing through the weaker Communard forces. However the Germans had under estimated the enemy fighting capabilities leading to a slower than more expected breakthrough. As the German army advanced into western France, resistance grew stronger and stronger with the fighting intensifying as German forces reached the outskirts of Paris on the 28th of July 1942. Despite fierce resistance, German forces were able to capture Paris on the 29th of July 1942. </p>
                    <p>A brief period of rest would follow after the fall of Paris to recuperate the losses of the first phase of the offensive. Now learning from their mistakes of phase one, the German army continued offensive operations in February 1943, this time they saw massive success as a breakthrough in the North lead to the encirclement of Internationale forces in Normandy and Pas de Calais. The Tank Corp would take this opportunity to punch through the now thin Northern front, reaching the Bay of Biscay and Capturing Nantes on the 23rd of February 1943. Brest would fall on the 11th of March 1943 followed by Bordeaux on the 6th of April 1943. By late April, the German army had managed to cut off Communard France from Iberia, surrounding what’s left of the French and British forces in Southern France unable to escape to Britain. </p>
                </div>


                <div className={articleStyle.year_header}>
                    <h1>1943</h1>
                </div>

                <h2 id="event-13" className={articleStyle.event_header}>Iberian Liberation, May 1943</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>In an effort to secure Iberia due to the failure of the Halifax conference, the German Tank corp and first Army launched a brief invasion of Iberia to liberate Spain and Portugal who had been under Internationale occupation ever since 1941. This liberation’s goal was to install friendly Reichspakt aligned governments who would build legitimacy, eventually joining the Reichspakt after the war.  The campaign was swift, taking just over one month to reach Lisbon in May 1943.</p>
                </div>            
                <h2 id="event-14" className={articleStyle.event_header}>The Fall of the Commune of France, 2nd June 1943</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>On the 2nd of June 1943, the government of the Commune of France announced their formal surrender as German troops advanced into Southern France and the Austrians broke through the French Alpine defences, capturing Annecy. This left the reamining British army stranded in Southern France. German forces soon closed in on their positions and the Entante Navy blocked any convoys from leaving Marseilles and Nice. The Union of Britain now stood alone as the last bastion of Syndicalism in Europe. Over the next days, the German air force began a massive bombing campaign in Britain to destroy military installations while the German High Seas fleet began to prepare the English Channel for a large scale naval invasion.</p>
                </div>            
                <h2 id="event-15" className={articleStyle.event_header}>Operation Sea Lion, 23rd August 1943 - 31st September 1943</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>On the dawn of the 23rd of August 1943, German troops in Normandy were given the green light, the seas were calm as the High Seas fleet escorted the invasion to their destination, the city of Dover. Dover was selected as the beach head as it is the closest major port on Great Britain to continental Europe, but anticipating that the Union of Britain would have defended Dover, the Invasion was also set on landing nearby in Portsmouth to then link up with forces in Dover. As both invasions landed they faced stiff resistance against the British, however as the day went on, the garrison in both Portsmouth and Dover began to collapse leading to the surrender of the cities.</p>
                    <p>From there the German Army was able to link up the two beach heads and pushed out towards the London and down the rest of the southern coastline. London would fall on the 1st of September 1943, with the British government evacuating to Liverpool. Resistance from British troops grew day by day but as the Germans pushed deeper into Britain it was clear that the Third Internationale was on its last legs made even more apparent as Birmingham and Bristol would fall soon after London. As German troops came just 50 Km from Liverpool, the British Government issued an order to all Internationale troops to lay down their arms as the Union of Britain surrenders on the 21st of September 1943, ending the second world war on the western front. What follows would be a tense peace treaty negotiation as the Entante and Reichspakt would be invited to London to discuss the future of Western Europe. </p>
                </div>            
                <h2 id="event-16" className={articleStyle.event_header}>The Autumn Eastern Offensive, September 1943</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>Once the Internationale fell, the western armies were sent eastwards for one final push into the Russian Empire, starting in Ukraine, the armies of the Reichspakt spearheaded by the German Tank Corp pushed forward across the border, shattering the Russian frontline which had stayed stagnant for almost 3 years, this sudden push prompted the Russian army to reallocate troops but due to the sheer number of divisions on the frontline no effective defence was able to be formed allowing the Germans especially the tanks to carve deep into south western Russia. The north western Russian in the meanwhile faced more resistance resulting in a more slower but methodical push towards major cities such as Moscow and St-Petersburg. But as the offensive continued into November 1943, the start of a new war would be brought to Berlin. </p>
                </div>
                <h2 id="event-17" className={articleStyle.event_header}>The Third Weltkrieg, 7th November 1943</h2>
                <div className={articleStyle.paragraph_container}>
                    <p>Ever since the conclusion of the Treaty of London, the Entante had been hostile to any attempt at normalization of relations with the Reichspakt. Although the Canadian/British Exiled government were unwilling to provoke the German Empire, public pressure from British Exiles, Canadians, and pressure from the French government forced the issue through, publicly announcing that the British and French military governments on their homelands were nothing but another foreign occupier and an illegal occupation. At first the German empire ignored these comments made as they’d believe that the Entante would never be so bold to act on their words. Yet on the 7th of November 1943, Canada declared war on the British Military Government with the French Republic following suit with their own declaration on the French Military Government. Some believe that this will be a quick war as by now the Germans has both one of the largest armies, navies, and air forces in the world. Yet nobody realized that this war was going to drag the German Empire through eight years of consistent war.</p>
                </div>    
                <div className={homepageStyle.footer}>
                    <button className={articleStyle.next_button} onClick={() => nextYear()}>1944 - 1948</button>
                </div>

            </div>
 

            
        </div>
    );
}