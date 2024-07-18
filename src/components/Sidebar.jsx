
function Sidebar(props){

    function eventScroll(toWhere){
        console.log(toWhere);
        let e = document.getElementById(toWhere.element_id);
        e.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'start'});
    }

    return(            
    <div className="page-sidebar">
        <h3 className="sidebar-title">Major Events</h3>
        {props.menu.map((element, index) => (
            index % 2 != 0 ? (
                <div className="sidebar-element" key={index} onClick={() => eventScroll(element)}>
                    <h3 className="sidebar-h3">
                        {element.name}
                    </h3>        
                    <div id="sidebar-underline" className="underline"></div>        
                </div>
            ) : (
                <div id="odd-element-index" className="sidebar-element" key={index} onClick={() => eventScroll(element)}>
                    <h3 className="sidebar-h3">
                        {element.name}
                    </h3>           
                    <div id="sidebar-underline" className="underline"></div>             
                </div>
            )
            ))
        }
    </div>
    );
}

export default Sidebar