let btnSearch = document.getElementById("btnBuscar");
let inputSearch = document.getElementById("inputBuscar");
let URL_DATA = "https://japceibal.github.io/japflix_api/movies-data.json"
let result = {};

document.addEventListener("DOMContentLoaded", e => {
    fetchData();
})

btnSearch.addEventListener("click", e => {
    if (inputSearch.value.length > 0) {
        searchMovie();
    }
})

const fetchData = async () => {
    try {
        const response = await fetch(URL_DATA);
        if (response.ok) {
            result.data = await response.json();
            result.status = "ok";
        } else {
            throw Error(response.statusText);
        }
    }
    catch (error) {
        result.status = 'error';
        result.data = error;
    }
    return result;  
}

/* function searchMovie(){
    let array = [];
        for(let i = 0; i < result.data.length; i++){
        let category = result.data[i];
        let valueInclude = (category.title).includes(inputSearch.value, category)
        if (valueInclude) {
        console.log(category.title); 
        } 
}}*/ 

function searchMovie(){
    let array = [];
        for(let i = 0; i < result.data.length; i++){
        let category = result.data[i];
        let valueInclude = (category.title).includes(inputSearch.value, category)
        if (valueInclude) {
        console.log(category.title); 
        } 
}}