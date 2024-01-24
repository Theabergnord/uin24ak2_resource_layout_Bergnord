console.log(resources)

let con = ""

resources.map((res) => { con += `<h2>${res.category}</h2>
<p>${res.text}</p>`

res.sources.map((sor) => {
    con += `<ul>
    <li><a href="${sor.url}">${sor.title}</a></li>
    </ul>`
})
})
/* Kilde til map inni map: https://stackoverflow.com/questions/49094137/reactjs-map-inside-a-map */

const main = document.getElementsByTagName("main")
main[0].innerHTML = con

