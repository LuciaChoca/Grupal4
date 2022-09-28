let search = document.getElementById("inputBuscar");
let button = document.getElementById("btnBuscar");
let MOVIES_URL = "https://japceibal.github.io/japflix_api/movies-data.json";


const fetchData = async () => {
    const result = {};
    try {
        const response = await fetch(MOVIES_URL);
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
    console.log(result);
    return result;
}

function searchMovies() {
   const {title} = data;
   console.log(title);
    
   
}



document.addEventListener("DOMContentLoaded", e => {
    fetchData();
    

    button.addEventListener("click", e => {
        if (search.value.length > 0){
            searchMovies();
        }
    })


})

