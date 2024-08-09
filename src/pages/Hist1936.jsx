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
                The Second American Civil War
            </h2>
            <h3>A Political Powder Keg</h3>
            <div className={articleStyle.paragraph_container}>
                <p>During the years leading up to 1936, two political parties built up enough political support to rival the likes of the Democrats and Republicans. These were the Socialist Party of America headed by John Reed and the America First Party headed by Huey Long. The SPA were supporters of Syndicalism and left leaning ideologies that advocated for the workers of America and wished to bring about a Syndicalist revolution, while the America First Party was a right leaning party formed by Huey Long in hopes of implementing the party’s Share Our Wealth program and were highly against the SPA. </p>
                <p>When Black Monday hit the US economy, a previously shot down bill reintroduced into the senate in hopes of its policies being able to alleviate the damage done by the Black Monday. The Garner-Wagner Bill was promised to be the bill that can help jump start economic recovery, however the bill had trouble gaining support in the senate due to conflicting interests between the SPA and AFP. With this, the Republicans and Democrats agreed to form a coalition government in order to counteract the rising influences of the SPA and AFP as well as having a better chance at maintaining order. This move was able to put more support behind the Garner-Wagner bill with further support gained by compromising with the SPA to modify the bill to include more worker friendly policies. Yet in the end the bill was shot down, angering both the AFP and SPA.</p>
                <p>As months went on, violence within the nation began to dramatically rise. Influence for both the SPA and AFP began to grow as more senate seats were given to each respective party due to state elections. Violence between the SPA and AFP had gotten so high that the national guard were called in various states to help break up clashes between supporters. At the same time, cracks began to form within the Republican-Democrat coalition, but these rifts would be temporarily mended as the coalition focused on maintaining what power they have left within the states as the election of 1936 comes in. </p>                
            </div>

            <h3>The 1936 US Presidential Election</h3>
            <div className={articleStyle.paragraph_container}>
                <p>When November 1936 rolled around, the elections were mired with controversy, but none were more controversial as when the AFP candidate Huey Long wins the election. Immediately the SPA contested the results, citing voter fraud and refused to recognize the AFP’s victory. Now former president Herbert Hoover criticised the winner, saying that this choice would bring upon a dangerous future for the nation. In protest of the election results, the SPA declares a strike for New Years Day, crippling the US as the nation heads into 1938. After President Long’s inauguration his first orders were to ban the SPA from the government. Unsurprisingly this angered the SPA who refused to recognize his presidency. The SPA’s anger would only increase from here as one of president Long’s executive order was to label the SPA as a terrorist organisation, this was deemed unconstitutional by the SPA and was the last straw for the party, cutting all communication to Washington. The state of the US at this point was on the brink of collapse, in order to restore order, General MacArthur of the US Armed Forces marched on Washington DC to remove President Long on the grounds of being unable to perform the duties of a constitutional president. However, due to an informant in the military, President Long had already fled Washington, making his way down to Baton Rouge. MacArthur was later sworn in as "Provisional President" until the nation can be stabilized. </p>
            </div>

            <h3>Rise of the Rebel States</h3>
            <div className={articleStyle.paragraph_container}>
                <p>Yet the move to march on the capital would be the tipping point that would plunge the US into further fracturing along party lines. When President Long arrived in Baton Rouge, Louisiana, he declared that MacArthur and the SPA were traitors and enemies to the US, and that states should side with him as he claimed to be the legitimate winner of the 1936 US elections. From this address the American Union State would be established and officially secede from the US. multiple states in the US deep south would pledge their allegiance to President long and the Union State, which included states from Texas to Alabama to South Carolina. </p>
                <p>The SPA would respond with a similar message, except directed towards Long and MacArthur, in order to bring about the Syndicalist revolution, the SPA established the Combined Syndicates of America, basing themselves out of Chicago. Several states along the Steel Belt pledged their allegiance to the CSA, joining with Chicago and seceding as well.</p>
                <p>Seeing the threat that is upon the nation as well as an apparent subversion of the US’s democratic ideals, the Pacific states of California, Oregon, and Washington State declared that the SPA, AFP, and MacArthur in Washington were all enemies of the US and democracy, while not necessarily seceding from the US, the Sacramento lead Pacific States of America pledged that it will defeat the enemies in Baton Rouge, DC, and Chicago in order to save the US and preserve a true democracy. </p>
            </div>

            <h3>The Standoff of America and the 30 Day Deadline</h3>
            <div className={articleStyle.paragraph_container}>
                <p>In response to the rebel states declaring their intentions, General MacArthur issued the 30 day deadline, an ultimatum to each rebel state to stand down and disarm before the Federal Government will have to intervene and force the rebels to disarm. Yet he and everyone in Washington knew that this ultimatum would fall upon deaf ears as the factions of America now face each other in a standoff, biding their time and building their strength before the inevitable civil war began.</p>
                <p>The Standoff began with the CSA seizing control of Minnesota as Syndicalist militias march on Minneapolis. North Carolina would pledge its allegiance for the American Union State while Tennessee would be forcefully integrated by Longist militia. Federal forces managed secured New Jersey, kicking out syndicalist militias trying to take control to allow easy access to New York City. The Western states past the Mississippi that remained loyal to MacArthur in Washington stood their ground against any rebel state as the general vowed to protect them and not cede any land to those traitors. However, every military installation was abandoned as Washington aligned militias and troops moved east to fortify Virginia.  Despite the New England region remaining loyal to the Federal government, the governors of these states had secretly approached the Canadians to occupy New England as they did not want to endanger their people and bring devistation to their states in the upcoming civil war. Meanwhile, Federal forces were forced out of Southern Texas, firmly securing Texas into the American Union State. Iowa would later pledge its allegiance to the CSA and joined Chicago in seceding. From there, the borders solidified and as the deadline comes to an end on the 3rd of April 1937, shots were fired across the nation as the Second American Civil War begins. </p>
                <p>Acting on the wishes of the New England governors, the Canadians moved in and occupied New England, establishing the Provisional Republic of New England under the protection of Canada and the Entante. The three rebel nations scramble to grab as much of the west as they can as Washington  fortifies and holds their positions on the Appalachian mountains of Virginia and in the northern borders of Maryland.</p>
            </div>

            <h3>The Journey Towards Unification</h3>
            <div className={articleStyle.paragraph_container}>
                <p>Soon after the start of the civil war, the three rebel nations rushed to seize as much of the west as they possibly can. By July of 1937 the west was fully occupied by rebel forces. The Pacific States managed to take the states of Arizona, Idaho, Nevada, Utah, Colorado, Montana, Wyoming, and western New Mexico. The CSA managed to grab the Dakotas, Nebraska, and Northern Kentucky, while the Union State secured Eastern New Mexico, Kansas, and southern Kentucky. All the while the Federal government received support from the Entante, sending equipment and volunteer forces to help strengthen MacArthur’s government.  However on the CSA’s side was the Third Internationale who similarly sent men and equipment to the Chicago in hopes of securing a strong ally for the Internationale in the future. </p>
                <p>As the war went on into August and September of 1937, the western frontlines fought between the CSA, Union State, and Pacific States remained stagnant. In the meanwhile, Federal forces began rapidly advancing against the CSA, making a push towards Lake Erie and cutting off a large part of the CSA army including New York City. It took another 4-6 months for the Pennsylvania pocket to be cleaned out however as Syndicalist forces remained strong in places such as Philadelphia and New York City. By January 1938, the Federal forces marched west towards Cleveland, this move caught the CSA off guard, costing them dearly as the Internationale volunteers were trapped in an encirclement and destroyed. Meanwhile in the west, the front remained stagnant in the north between the Pacific States and the CSA. However, a major development in the south with the Union State hit as the Pacific States managed a breakthrough in northern New Mexico, a blunder that would cost the Union State dearly. </p>
                <p>The Pacific State’s breakthrough in New Mexico quickly spiralled out of control for the Union State, due to logistical challenges and equipment shortages, the Pacific States faced little challenged as they maintained their momentum into Texas, driving a wedge between the state and Baton Rouge as the Pacific States reach the Gulf of Mexico by July of 1938. The Pacific states at the same time conducted an offensive into Minnesota, capturing Minneapolis and pushing into Iowa. The Federal government also took advantage of the situation and launched an offensive to capture key regions of Ohio, including the city of Columbus. </p>
                <p>After securing Texas in Aug 1938, the Pacific States pushed towards Baton Rouge, by now the Union State’s army is in no position to stop their offensive and thus were on the backfoot in the civil war. Taking advantage of this, the Federal Government also conducted an offensive down the east coast, capturing North Carolina and pushed towards Charleston in South Carolina. Baton Rouge would be captured by the Pacific States during April of 1939, Federal forces in the meantime managed to secure Georgia and Florida as well as pushing towards Birmingham in Alabama. With no way to stop the collapse of the east and the west, the Union State surrenders during June of 1939. </p>
                <p>Attention was now focused on eliminating the CSA, Pacific and Federal forces were redeployed towards the Steel Belt and a massive offensive was launched by the Federal Government to capture Chicago before the Pacific States. The Federal Government managed to capture Detroit and Gary but were not able to reach Chicago in time before the CSA surrendered in October of 1939. </p>
                <p>With the CSA and the Union State gone, the two remaining factions fought in a bitter struggle as the frontlines reached the Mississippi River by December of 1939. Yet through superior tactics and the support of the Entante, Pacific forces were systematically encircled and destroyed, severely reducing their capabilities to hold the line at the Mississippi. By February of 1940, a massive offensive across the entire front took place and pierced the Pacific State’s frontlines at several key locations, such as St Louis and New Orleans. Unable to form a proper defensive line past the Mississippi, Federal forces continued to encircle and destroy many Pacific division, by June of 1940, the Pacific States were pushed back to Denver and at this point, unable to fully secure the frontline stretching from Eastern Montana down to Western Texas. Yet despite being out numbered, the Pacific States fought on until the end, it took until October 4th 1940 for the Federal forces to reach the West Coast and force the Pacific government to surrender. </p>
            </div>

            <h3>The United States Reborn</h3>
            <div className={articleStyle.paragraph_container}>
                <p>As the civil war came to a close, the US was left with economic and political wounds that would take over half a decade to heal, but the Federal Government that came out of the civil war and reconstruction era wouldn’t resemble anything like the Federal Government of 1937 and before. Since the rebel states have been defeated, many in Washington have demanded that MacArthur step down as president and return democracy to the nation, this was particularly vocal within the civilian sectors, but the military and MacArthur had other plans. During a speech on November 4th 1940, president MacArthur announced to the public that he would not be stepping down as president of the United States until the “wounds of the civil war were fully healed”. Many did not take this news kindly and riots across the sprang up in protest of MacArthur’s "tyranical" decision. yet they would all be quelled with relative ease as the military began to strengthened its grip on civilian life. Over the next 5-7 years of reconstruction, the US and its democratic ideals would be slowly but surely stripped away as it slipped into an era of military dictatorship. Replacing the American Democracy with an American Stratocracy helmed by MacArthur.</p>
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