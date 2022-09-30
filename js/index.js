let btnSearch = document.getElementById("btnBuscar");
let inputSearch = document.getElementById("inputBuscar");
let URL_DATA = "https://japceibal.github.io/japflix_api/movies-data.json"
let moviesArray = [];
document.addEventListener("DOMContentLoaded", e => {
    fetchData();
})
btnSearch.addEventListener("click", e => {
    if (inputSearch.value.length > 0) {
        searchMovie();
    }
})
const fetchData = async () => {
    const response = await fetch(URL_DATA);
    if (response.ok) {
        moviesArray = await response.json();
    } else {
        throw Error(response.statusText);
    }
    console.log(moviesArray);
}
function searchMovie() {
    let arraySearch = [];
    arraySearch = moviesArray.filter(({ title, overview, tagline, genres }) =>
        title.toLowerCase().includes((inputSearch.value).toLowerCase()) ||
        overview.toLowerCase().includes((inputSearch.value).toLowerCase()) ||
        tagline.toLowerCase().includes((inputSearch.value).toLowerCase()) ||
        genres.some(({ name }) => name.toLocaleLowerCase().includes(inputSearch.value)))
    showMovie(arraySearch);

}

function showMovie(showArray) {
    let htmlContentToAppend = "";
    let aa = "";
    for (let i = 0; i < showArray.length; i++) {
        let movies = showArray[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active">
        <div class="row">
        <div class="col">
        <div class="d-flex w-100 justify-content-between">
        <div class="mb-1">
            <h5>${movies.title} </h5>
            <p>${movies.tagline}</p>
            <div id="stars" "stars(${movies.vote_average})"></div>
        </div>
    </div>
    </div>
    </div>
    </div>  
        `
        document.getElementById("lista").innerHTML = htmlContentToAppend;

    }

}

function stars(aa) {
    let htmlContentToAppend = "";
    console.log(aa.vote_average)
        varm = parseInt(aa / 2)
        for (let x = 0; x < varm; x++) {
            htmlContentToAppend += `<span class="fa fa-star checked"></span>`
        }
        for (let x = 0; x < (5 - varm); x++) {
            htmlContentToAppend += `<span class="fa fa-star"></span>`
        }
        
    }
