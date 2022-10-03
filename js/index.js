let btnSearch = document.getElementById("btnBuscar");
let inputSearch = document.getElementById("inputBuscar");
let URL_DATA = "https://japceibal.github.io/japflix_api/movies-data.json"
let moviesArray = [];

let canva = document.getElementById("boton");

document.addEventListener("DOMContentLoaded", e => {
    fetchData();
})

btnSearch.addEventListener("click", e => {
    if (inputSearch.value.length > 0) {
        searchMovie();
    }

});
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
    Stars2(arraySearch)
}

function showMovie(showArray) {
    let htmlContentToAppend = "";
    for (let i = 0; i < showArray.length; i++) {
        let movies = showArray[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active" onclick="showCanva(${movies.id})">
        <div class="row">
        <div class="col">
        <div class="d-flex w-100 justify-content-between">
        <div class="mb-1">
            <h5>${movies.title} </h5>
            <p>${movies.tagline}</p>
            <div id="${movies.id}"></div>
        </div>
    </div>
    </div>
    </div>
    </div>  

        `
        document.getElementById("lista").innerHTML = htmlContentToAppend;

    }

}

function showMovies(arraySearch) {


    let htmlContentToAppend5 = "";
   arraySearch.forEach(element => {
    htmlContentToAppend5 = `
            <h5>${element.title} </h5>
           
            <p>${element.tagline}</p>
           
            
        `
        document.getElementById("title").innerHTML = htmlContentToAppend5;
   });
}

function Stars2(showArray) {

    for (let i = 0; i < showArray.length; i++) {
        let htmlContentToAppend1 = "";
        let movie = showArray[i];
        //let aa = showArray[i];
        console.log(movie.vote_average)
        varm = parseInt(movie.vote_average / 2)
        for (let x = 0; x < varm; x++) {
            htmlContentToAppend1 += `<span class="fa fa-star checked"></span>`
        }
        for (let x = 0; x < (5 - varm); x++) {
            htmlContentToAppend1 += `<span class="fa fa-star"></span>`
        }
        document.getElementById(movie.id).innerHTML = htmlContentToAppend1;
    
    }
}

function showCanva(valueData) {
    let listGenres="";
    for (let i = 0; i < moviesArray.length; i++) {
        let movie = moviesArray[i];
        if (valueData == movie.id){
            document.getElementById("titleCanva").innerHTML = movie.title;
            document.getElementById("overviewCanva").innerHTML = movie.overview;
            for (let x = 0; x < movie.genres.length; x++){
                let genresData = movie.genres[x];
                listGenres = `${genresData.name} - `
                document.getElementById("genresListCanva").innerHTML += listGenres
            }
            document.getElementById("yearCanva").innerHTML += (movie.release_date).substring(0, 4);
            document.getElementById("runtimeCanva").innerHTML += movie.runtime;
            document.getElementById("budgetCanva").innerHTML += movie.budget;
            document.getElementById("revenueCanva").innerHTML += movie.revenue;
        }
        }
}
       
function showInfo(showArray){  
    let htmlContentToAppend = "";
    for (let i = 0; i < showArray.length; i++) {
        let movie = showArray[i];
        htmlContentToAppend = 
        `${movie.title} ${movie.overview} <hr> ${movie.genres.name}`;       
    }
    document.getElementById("offcanvas-info").innerHTML = htmlContentToAppend;
}

function openNav() {
    document.getElementById("boton").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("boton").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

