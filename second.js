/* Henter id-en og legger til eventListener og funksjon, samt lager if-test for å hente rett informasjon fra arrayen.
Kilder: https://www.w3schools.com/jsref/event_target.asp , https://www.w3schools.com/jsref/prop_element_tagname.asp , https://www.w3schools.com/jsref/met_element_getattribute.asp */
document.getElementById("info").addEventListener("click", function(event){
    if(event.target.tagName === "A"){
        const index = event.target.getAttribute("class")
        content(index)
        
        //Legger til en ekstra classe på det elementet som blir trykket på, og fjerner den fra de andre elementene. 
        //Kilde: https://stackoverflow.com/questions/74813996/toggle-a-classlist-within-a-foreach-loop-in-javascript  
        const active = document.querySelectorAll("#info a");
        active.forEach(function (item) {
            item.classList.remove("active");
        });
        event.target.classList.add("active");
    } 
})


/* Lager en funksjon for å hente og skrive ut informasjonen i arrayen resources. Kilde til map: https://stackoverflow.com/questions/49094137/reactjs-map-inside-a-map*/
function content(index){
    const select = resources[index]

    let info = `<h2>${select.category}</h2>
    <p>${select.text}</p>`  

    select.sources.map((source) => {
        info += `<ul>
        <li><a href="${source.url}">${source.title}</a></li>
        </ul>`
    })

    const main = document.querySelector("main")
    main.innerHTML = info
}

