import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import articleStyle from "../CSS-files/Article.module.css"
import homepageStyle from "../CSS-files/Homepage.module.css"


export default function Treaties(){

    const sidebarArr = [
        {
            "name": "Treaty of Paris",
            "element_id": "treaty-1",
        },
        {
            "name": "Treaty of London",
            "element_id": "treaty-2",
        },
        {
            "name": "Treaty of Algiers",
            "element_id": "treaty-3",
        },
        {
            "name": "Treaty of Moscow",
            "element_id": "treaty-4",
        },
        {
            "name": "Treaty of Delhi",
            "element_id": "treaty-5",
        },
        {
            "name": "Treaty of Tokyo",
            "element_id": "treaty-6",
        },
        {
            "name": "Treaty of Beijing",
            "element_id": "treaty-7",
        },
        {
            "name": "Treaty of Bangkok",
            "element_id": "treaty-8",
        },
        {
            "name": "Treaty of Ottawa",
            "element_id": "treaty-9",
        }
    ];
    return(
        <div>
            <Header/>
            <Sidebar menu= {sidebarArr} />
            <div className={articleStyle.section_container}>
                <div id="link-peace" className="image-Container">
                    <div id ={articleStyle.section_top_title} className="imageText-Centered">
                        <h1>Peace Treaties</h1>
                    </div>
                </div>
                <div id="treaty-1" className={articleStyle.year_header}>
                    <h1>Treaty of Paris, 2nd June 1943</h1>
                </div>
                <h2 className={articleStyle.treaty_header}>The Fate of Iberia</h2>
                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>The Iberian Peninsula although initially allies of the Entante, were now under the occupation of the Reichspakt after being under Internationale occupation since 1941. In order to compromise with the Reichspakt, the Entante abandoned the Carlist Kingdom of Spain to the Germans in order to secure Portugal for the Entante.</p>
                        <p id={articleStyle.treaty_p}>It was decided that Spain's most prominent autonomous regions Catalonia and the Basque Region were to be given independence from Spain but remain as members of the Mittleeuropa and the Reichspakt. The new Catalan state would comprise of Catalonia, Valencia, and the Baleric Islands while the new Basque state would be given Navarre and the Basque Country.</p>
                        <p id={articleStyle.treaty_p}> Meanwhile the Kingdom of Spain would be reorganized as a puppet state of the German Empire with the House of Bourbon reinstated as the official royal family after their loss in the Spanish Civil War. Gibraltar remained under the German Empire to serve as a naval base along side with Northern Morrocco.</p>
                    </div>
                    <div id="TP-Spain" className="image-Container"></div>
                </div>

                <h2 id="treaty-event" className={articleStyle.treaty_header}>The Commune of France</h2>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p} >As one off the major powers that lead the Third Internationale and the aggressor that pulled the Reichspakt into the Second Weltkreig, the Commune of France would be officially reorganized into an interim military junta with the aim of establishing post-war stability and desyndicalisation. This military governemnt would be lead by General [find name here].</p>
                        <p id={articleStyle.treaty_p}>Territory wise, France would recieve only minor border changes. The state of Labourd was ceded to the newly established Basque Country, the state of Roussillon was ceded to the newly established Catalonia, and the state of Lille was given to the German Protectorate of Flanders-Wallonia. There were also talks of establishing an independent Brittany but those proposals were rejected inorder to not anger the defeated French population and help strengthen the Military Government</p>
                        <p id={articleStyle.treaty_p}>As expected the French Republic in North Africa were vehemently opposed to the establishement of a German Military Governemnt in Paris as the French Republic see themselves as the legitimate French state, yet they were powerless to do anything as they had no foothold on France aside from retaining control on Corsica.</p>
                    </div>
                    <div id="TP-France" className="image-Container"></div>
                </div>

                <h2 className={articleStyle.treaty_header}>Socialist Norway</h2>


                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>Socialist Norway was to be incorperated into Sweden, who later formed the Kingdom of Sweden-Norway, uniting the crowns of Sweden and the deposed Norwegian crown to improve efforts of desyndicalization.</p>
                    </div>
                    <div id="TP-Norway" className="image-Container" ></div>
                </div>

                <h2 className={articleStyle.treaty_header}>Socialist Republic of Italy</h2>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p} >The Danubian Federation was given control over the fate of the Italian Peninsula as they were the major occupier of the Socialist Republic of Italy. In turn, they had established the Italian Federation under the supervision of Vienna as they transistion out of Radical Socialism into the more moderate Social Democrat government style seen in the Danubian Federation.</p>
                        <p id={articleStyle.treaty_p} >Although there were talks with Sardinia to unite with the Italian Federation, those talks would ultimately lead to no where as the Entante pressured the Sardinian government to severe ties with the Reichspakt and its allies</p>

                    </div>
                    <div id="TP-Italy" className="image-Container" ></div>
                </div>
                
                <div id="treaty-2" className={articleStyle.year_header}>
                    <h1>Treaty of London</h1>
                </div>
                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>As the other major power in the Third Internationale, a similar interim Military Governemnt was put in place in England to handle stablizing the country and with desyndicalization efforts.</p>
                        <p id={articleStyle.treaty_p}>Yet as a way to hamper the power of England, Scotland was to be given independence similar to the situation with the Basque and Catalonia in Spain. Ireland was also given Northern Ireland for their efforts against the Union of Britain during the Second Weltkreig</p>
                        <p id={articleStyle.treaty_p}>Also similarly to the French Republic, the Canadians especially the British Exiles were vehemently opposed to the establishement of a Military Junta in London as they too claim to be the legitiment government of the United Kingdom of Great Britain. Yet like the French Republic, they are powerless to the Germans as they too have no foothold on the island</p>
                        <p id={articleStyle.treaty_p}>Both the Treaties of London and Paris served as catalysts and justification for the Entante's declaration of war on the reichspakt, starting the Thrid Weltkreig </p>

                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>
                
                <div id="treaty-3" className={articleStyle.year_header}>
                    <h1>Treaty of Algiers</h1>
                </div>
                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>

                   <div className={articleStyle.paragraph_inner_container}>
                      <p id={articleStyle.treaty_p}>The French Republic in Africa was divided between the German Empire and the Ottoman Empire. In North Africa, Algeria and Tunisia had been given to the Ottomans, who had established new puppet states in their respective regions, the Germans secured Morrocco and restablished a German protectorate. The Ottomans held no interest in West Africa, thus, all remaining French territory was handed over to the German colonial government of Mittleafrika. This included Portuguese Guinea-Bissau which is under Mittleafrikan occupation after the collapse of the French Republic.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>

                <div id="treaty-4" className={articleStyle.year_header}>
                    <h1>Treaty of Moscow</h1>
                </div>
                
                <h2 className={articleStyle.treaty_header}>Western Russia</h2>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>Despite the harsh concessions the Russians had to give during the Treaty of Brest-Litovsk in 1918, the Russians were able to bounce back and threaten German interest in Eastern Europe. Thus the goal of the Treaty of Moscow was to completely destory any chances of another ressurgent Russian state.</p>
                        <p id={articleStyle.treaty_p}>The Russian Republic would see more land concessions in Western Russia, giving more states to many German allies bordering Russia. The Ukrainian State would see a massive expansion in the east of their country, being given the states of Belgorod, Kursk, Rostov, Ekaterinodar, and Novorossiysk.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>White Ruthenia would also see a massive eastern expansion as well, being given the states of Vitebsk, Krichev, and Smolensk. The United Baltic Duchy would see slight border adjustments, being given Latgale which held a significant Latvian population. The Kingdom of Finland would recieve a massive eastern expansion as well, being given the states of Petrozavodsk, White Karelia, and Murmansk, allowing Finalnd to achieve its "Greater Finland" ambitions.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>


                <h2 className={articleStyle.treaty_header}>Central Asia and Siberia</h2>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>

                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>The Ottomans and their sphere of influence had been instrumental in helping defeat the Moscow Accord, thus they were able to secure the valuable caucasian oil fields by establishing the Mountain Republic in the states of Vladikavkaz, Terek, Chechnya, and Dagestan. The Ottomans were also given control over Central Asia, establishing the Central Asian Federation.</p>
                        <p id={articleStyle.treaty_p}>To further cripple the Russian state, all states east of the Ural Mountains was to be seperated from Moscow, creating a new Siberian State, stretching from the Urals to the borders of the Far Eastern Republic. Lastly the Russian Republic would be reorganized into an "Oststat", seizing a large majority of what remains of the Russian industry and resources, making Russia solely reliant on German goods.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>

                </div>

                <h2 className={articleStyle.treaty_header}>The Balkan Nations</h2>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>The Balkan nations that have aligned with the Moscow Accord have all been given control to the Danubian Federation, who would establish new republics in Greece, Montenegro, and Serbia. Bulgaria would recieve the states of Macedonia and Nish which were lost when Serbia and the Balkan League defeated the Bulgarians in late 1936.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>

                <div id="treaty-5" className={articleStyle.year_header}>
                    <h1>Treaty of Delhi</h1>
                </div>
                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>

                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>The Domuinion of India was one of the last major powers of the Entante before the US intervened in the Third Weltkrieg. In order to help establish an independent Indian state, the Dominion of India was reorganised with a new government headed in Calcutta.</p>
                        <p id={articleStyle.treaty_p}>With the fall of India, the Entante lost its last major position in Asia, adding another nail to the coffin of the Entante and allowing the Reichspakt access to valuable Indian resources.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>

                <div id="treaty-6" className={articleStyle.year_header}>
                    <h1>Treaty of Tokyo</h1>
                </div>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>

                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>Similar to French West Africa being placed under control of the Mittleafrikan colonial administation, Insulindia and the Philippines were handed over to the restablished German East Asian administation, who had been under Co-Prosperity occupation since 1940. This greatly expanded the colony and gave the Reichspakt access to the valuable resources of the Insulindian Archipelago.</p>
                        <p id={articleStyle.treaty_p}>The Japanese government was to be reorganized back into a democratic monarchy, dissolving the military dictatorship that had ruled Japan since 1937. The Japanese Royal Family was handed over to the new Japanese government. They would later reinstate the monarchy to avoid angering the populace but had stripped the monarch of all political power, rendering the monarch as a figurehead. The Korean peninsula was to also be liberated from Japan, establishing the Republic of Korea.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>

                <div id="treaty-7" className={articleStyle.year_header}>
                    <h1>Treaty of Beijing</h1>
                </div>

                
                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>

                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>The Chinese government was currently being lead by the Fengtian Clique, who with the help of Japan defeated the Qing Empire in 1946 to unite all of China. However during the previous years before the defeat of the Qing Empire, the German Empire had been backing the Nanjing Clique ever since their victory in the League Wars of 1936. In order to recouperate their losses and restablish their influence in China, the Fengtian led Republic of China would be dissolved in favour of a Republic of China led by a now restablished Nanjing Clique. Territorial concessions would still take place however.</p>
                        <p id={articleStyle.treaty_p}>The Xinjiang province which has a prodominently muslim population was to be incorperated into the Ottoman controlled Central Asian Federation. Mongolia would be restablished into a democratic governemnt and would retain their Inner Mongolian territorries of [insert names of states here]. Lastly, the Legation Cities would be restablished, German East Asia would regain its port concessions in the Shangdong province, and the Far Eastern Republic was incorperated into Siberia.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>

                <div id="treaty-8" className={articleStyle.year_header}>
                    <h1>Treaty of Bangkok</h1>
                </div>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>

                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>The Kingdom of Siam was restablished into a democratic republic, similar to the Japanese, the Siamese government also kept the monarchy but they too reduced its power to a figurehead. Siam's puppet government in Burma was to become a democratic republic as well. Lastly the territories in Laos, Cambodia, and Vietnam were reincorperated back into German East Asia.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>

                <div id="treaty-9" className={articleStyle.year_header}>
                    <h1>Treaty of Ottawa</h1>
                </div>
                <h2 className={articleStyle.treaty_header}>The Kingdom of Canada and Portugal</h2>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>The remains of the British Empire were now in the hands of German Empire. Firstly, the Canadian government was to be restablished into a republic with power taken away from the British Exiles, the fate of the British Exiles themselves would be a responsibility for the new Canadian government to handle. The West Indies Federation was also restablished into a republic similar to Canada's republic. The Portugeuse mainland was also restablished into a republic as well, but unlike the Japanese and Siamese, the portugeuse monarchy was abolished.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>
                <h2 className={articleStyle.treaty_header}>The British African Colonies</h2>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>The breakaway states of Kenya, the Gold Coast, and Nigeria would be reintegrated back into Mittleafrika but this time, the states would not retain any form of autonomy or special treatment from the colonial governemnt. Mittleafrika was also give control of Portuguese Angola, Guinea, and Northern Mozambique. The only Entante territory in Africa that was not handed over was South Africa. Instead the South African governemnt was to be established as a republic, they would also retain the British protectorates of Sothern Rhodesia and Natel as well as gaining control over Southern Mozambique.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>
                <h2 className={articleStyle.treaty_header}>Australasia and the Pacific</h2>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>Similar to what happened in Canada, the West Indies, and South Africa, the Australasian Federation was restablished into a republic, meanwhile the remaining pacific islands were handed over to German East Asia, these include [insert islands here]. The Legation Cities would see minor expansion with the inclusion of Hong Kong and Macau as part of the series of port cities the council now controls.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>
                <h2 className={articleStyle.treaty_header}>The United States of America</h2>

                <div id={articleStyle.paragraph_with_image} className={articleStyle.paragraph_container}>
                    <div className={articleStyle.paragraph_inner_container}>
                        <p id={articleStyle.treaty_p}>Ever since achieving victory in the Second American Civil War in 1937, MacArthur's military junta remained in power and had effectively turned the United States of America into a military dictatorship, stomping out any attempt at reinstating American democracy. However, with MacArthur's junta surrendering, the Germans dissolved the military junta and reorganized the US as a republic, finally returning democracy to America after over ten years of absence. Hawaii in the meanwhile would be given control to German East Asia as a forward operating base in the middle of the Pacific.</p>
                        <p id={articleStyle.treaty_p}>With the Fall of the Entante and the Treaty of Ottawa signed, November 9th 1951 is marked as the day the Third Weltkrieg ends, and the German Hegemony rises.</p>
                    </div>
                    <div id="TE-England" className="image-Container" ></div>
                </div>


            </div>
        </div>
    );
}