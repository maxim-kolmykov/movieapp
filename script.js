const API_KEY = "c550cfd9-1a19-40e6-8f96-0b13dcc50d16";
const API_URL_POPULAR =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
    "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

const API_URL_FILMS =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/";


getMovies(API_URL_POPULAR);

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
    /*     console.log(respData); */
    showMovies(respData);
}

function getClassByRate(vote) {
    if (vote >= 7) {
        return "green";
    } else if (vote > 5) {
        return "orange";
    } else {
        return "red";
    }
}

function showMovies(data) {
    const moviesEl = document.querySelector(".movies");

    document.querySelector(".movies").innerHTML = "";

    data.films.forEach((movie) => {
                const movieEl = document.createElement("div");
                movieEl.classList.add("movie__card");
                movieEl.innerHTML = `
        <div id="${movie.filmId}" class="movie__cover-inner">
        <a href="https://www.kinopoisk.ru/film/${movie.filmId}"><img
          src="${movie.posterUrlPreview}"
          class="movie__poster"
          alt="${movie.nameRu}"
        /></a>
        <a  id="${movie.filmId}" href="https://www.kinopoisk.ru/film/${movie.filmId}" class="movie__poster--select"></a>
      </div>
      <div  id="${movie.filmId}" class="movie__info">
        <div class="movie__title">${movie.nameRu}</div>
        <div class="movie__category">${movie.genres.map(
          (genre) => ` ${genre.genre}`
        )}</div>
        ${
          movie.rating &&
          `
        <div class="movie__rating movie__rating--${getClassByRate(
          movie.rating
        )}">${movie.rating}</div>
        <div  id="${movie.filmId}" class="overview">
        <h3>${movie.nameRu}</h3>
        <p>Год производства: ${ movie.year}</p>
        <p>Время: ${ movie.filmLength}</p>
        <p>Рейтинг: ${ movie.rating}</p>
        <p> Жанр: ${movie.genres.map(
            (genre) => ` ${genre.genre}`
          )}</p>
          <p>Страна: ${movie.countries.map(
            (country) => ` ${country.country}`
          )}</p>
          <div class="movie__disc"></div>
    </div>
        `
        }
      </div>
        `;
    moviesEl.appendChild(movieEl);
  });
}

const form = document.querySelector("form");
const search = document.querySelector(".header__search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
  if (search.value) {
    getMovies(apiSearchUrl);

  }
});

document.querySelector('.movies').addEventListener('mouseover', function(e){ 
  let filmId = e.target.id; 
 /*  console.log(filmId) */
 let apiFlmsUrl = `${API_URL_FILMS}${filmId}`; 
  console.log(apiFlmsUrl); 
  });

 /*  getMoviId(API_URL_FILMS); */
/*  console.log(getMoviId);  */
/*   async function getMoviId(url) {
      const resp = await fetch(url, {
          headers: {
              "Content-Type": "application/json",
              "X-API-KEY": API_KEY,
          },
      });
      const respDataId = await resp.json();
 console.log(respDataId); 
      showMoviesId(respDataId);
  }

  function showMoviesId(data) {
    const moviesElID = document.querySelector(".movie__disc");

document.querySelector(".movie__disc").innerHTML = "" 

      data.Film.forEach((movie1) => {
                const movieElD = document.createElement("div");
                movieElD.classList.add("movie__c");
                movieElD.innerHTML = `<p>${shortDescription}</p>`;
    moviesElD.appendChild(movieElD);
  }); 
}  */


    /// button
    ///TODO переделать код на нормальный если будет время
    function changeItem() {
        document.getElementById('button-search').style.backgroundColor = '#c8c8c8';
        document.getElementById('button-clear').style.backgroundColor = '#c8c8c8';
    }

    function rechangeItem() {
        document.getElementById('button-search').style.backgroundColor = 'rgba(62, 62, 62, 0.8)';
        document.getElementById('button-clear').style.backgroundColor = 'rgba(62, 62, 62, 0.8)';
    }

    function changeButton() {
        document.getElementById('button-search').style.backgroundImage = "url('./assets/svg/searchwhite.svg')";
    }

    function rechangeButton() {
        document.getElementById('button-search').style.backgroundImage = "url('./assets/svg/search.svg')";
    }

    ///search active
    window.onload = function() {
        document.getElementById("textbox-search").focus();
    };