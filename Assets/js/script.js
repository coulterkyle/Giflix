// Kyle C Gify API Key - cmVU7ix5dloWzAOS2tEDijL0F1CEkuZT
// Kyle C OMDB API Key - b4e4f55f


//Movie Variables
const formEl = document.getElementById('movieTitleSearchForm');
const movieDisplay = document.getElementById('movieDisplay');
const movieTitleEl = document.getElementById('movieTitle');
const movieRatedEl = document.getElementById('movieRated');
const moviePlotEl = document.getElementById('moviePlot');
const movieRtRatingEl = document.getElementById('rottenTomatoRating');
const movieGenreEl = document.getElementById('movieGenre');
const movieActorsEl = document.getElementById('movieActors');
const moviePosterEl = document.getElementById('moviePoster');
const releaseYearEl = document.getElementById('releaseYear');
const url = 'http://www.omdbapi.com/?type=movie&apikey=b4e4f55f';

//Event Listeners
formEl.addEventListener("submit", handleSearchFormSubmit);

//Pulls the year that was searched into storage and runs the showMovies function.
function handleSearchFormSubmit(event) {
  event.preventDefault();
  // console.log("search form clicked!"); - works!

  //Removes Hide class once submit button is clicked
  movieDisplay.classList.remove("hide");

  const movieTitleInput = document.getElementById('movieTitleInput').value;
  // console.log('should see movie name, no quotes: ', movieTitleInput); - works

  localStorage.setItem('movieTitle', movieTitleInput);

  if (!movieTitleInput) {
    console.log("You need to enter a movie title!"); //works!
    return;
  }

  showMovies();
}

function displayRatingMeme(rating) {
  console.log(rating);

  let memQuery = "";
  if (rating >= 85) {
    memQuery = "awesome";
  } else if (rating >= 50) {
    memQuery = "meh";
  } else if (rating < 50) {
    memQuery = "eww";
  }

  // switch (rating) {
  //   case 1:
  //     rating >= 85;
  //     memQuery = "awesome";
  //     break;
  //   case 2:
  //     rating >= 50;
  //     memQuery = "meh";
  //     break;
  //   case 3:
  //     rating < 50;
  //     memQuery = "eww";
  //     break;
  //   default:
  //     memQuery = "https://example.com/memes/default-meme.gif";
  //     break;
  // }

  console.log(rating)

  // let memeUrl = `${memeUrlBase}?q=${memQuery}`
  let memeUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${memQuery}&rating=pg-13&limit=10`;
  fetch(memeUrl)
    .then(function (d) {
      return d.json()
    })
    .then(function (data) {
      console.log(memeUrl)
      console.log(data)
    })

}
function showMovies() {
  //Pulls movie title searched:
  var searchedMovieTitle = localStorage.getItem('movieTitle');
  // console.log("should see movie title, with no quotes: ", searchedMovieTitle); //- works

  //Adds the year to search to URL
  var urlBySearchYear = url + '&t=' + searchedMovieTitle;
  // console.log(urlBySearchYear); //- works!

  //Gets information from API
  fetch(urlBySearchYear)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data); //works!
      console.log(data);
      let movieTitle = data.Title
      let releaseYear = data.Year
      let movieRated = data.Rated
      let moviePlot = data.Plot
      let rating = data.Ratings[1].Value.slice(0, -1)
      let movieGenre = data.Genre
      let movieActors = data.Actors
      let moviePoster = data.Poster
      // console.log(movieTitle, movieRated, moviePlot);//works!!
      // console.log(rottenTomatoRating);//works
      // console.log(moviePoster);

      //Shows data on page
      movieTitleEl.textContent = movieTitle;
      releaseYearEl.textContent = releaseYear;
      movieRatedEl.textContent = "Rated: " + movieRated;
      movieGenreEl.textContent = "Genre: " + movieGenre;
      movieActorsEl.textContent = "Main Actors: " + movieActors;
      moviePlotEl.textContent = moviePlot;
      moviePosterEl.src = moviePoster;
      movieRtRatingEl.textContent = rating + "%";
      displayRatingMeme(parseInt(rating));
    }
    )

}

const above50Memes = [];
const randomIndex = Math.floor(Math.random() * above50Memes.length);
const randomMeme = above50Memes[randomIndex];
const apiKey = 'dLg5M2Mlv8CQ642sfvMyyvV9C1GcK7vg';
// const searchTerm = 'Awesome';
// NEEDED?
// fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&rating=pg-13&limit=10`)
//   .then(response => response.json())
//   .then(data => {
//     // Process the response data here
//     const gifs = data.data;
//     // console.log(gifs);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// Function to display the rating meme/gif
const awesomeUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=awesome&rating=pg-13&limit=10`
const mehUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=meh&rating=pg-13&limit=10`
const ewwUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=eww&rating=pg-13&limit=10`
// function displayRatingMeme(rottenTomatoRating) {
//   console.log(rottenTomatoRating.value);
//   let memeUrl = "https://media.giphy.com/media/fYqHQ3HMuU1KK2NX0p/giphy.gif?cid=ecf05e4722af56fabb2783439d698fc7f375e47dce9eb261&ep=v1_user_favorites&rid=giphy.gif&ct=g";



//   switch (rating) {
//     case 1:
//       rating >= "85";
//       memeUrl = awesomeUrl;
//       break;
//     case 2:
//       rating >= "50";
//       memeUrl = mehUrl;
//       break;
//     case 3:
//       rating < "50";
//       memeUrl = ewwUrl;
//       break;
//     default:
//       memeUrl = "https://example.com/memes/default-meme.gif";
//       break;
//   }

// }

// Function to handle idle time
function handleIdleTime() {
  const idleTime = 60000; // 1 minute in milliseconds
  let idleTimer;

  $(document).on("mousemove", () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(displayIdleMeme, idleTime);
  });

  idleTimer = setTimeout(displayIdleMeme, idleTime);
}

// Function to display the idle meme
// function displayIdleMeme() {
//   const idleMemeUrl =
//     "https://media.giphy.com/media/fYqHQ3HMuU1KK2NX0p/giphy.gif?cid=ecf05e4722af56fabb2783439d698fc7f375e47dce9eb261&ep=v1_user_favorites&rid=giphy.gif&ct=g";
//   alert("You are taking too long!\n\n" + idleMemeUrl);
// }

// Example usage
// const zipCode = ""; // Replace with the actual zip code entered by the user
// searchByZipCode(zipCode);
// handleIdleTime();

const MemeContainer = () => {
  const memeContainer = document.createElement("div");
  memeContainer.classList.add("meme-container");

  const img = document.createElement("img");
  img.src =
    "https://media.giphy.com/media/sQuHLqjWwRXGvrjkg0/giphy.gif?cid=ecf05e4722af56fabb2783439d698fc7f375e47dce9eb261&ep=v1_user_favorites&rid=giphy.gif&ct=g";
  img.alt = "Good Rating Meme";

  const p = document.createElement("p");
  p.textContent = "This movie has a good rating!";

  memeContainer.appendChild(img);
  memeContainer.appendChild(p);

  return memeContainer;
};

// const memes = [
//   { name: "Meme 1", rating: 80, imageURL: "https://media.giphy.com/media/sQuHLqjWwRXGvrjkg0/giphy.gif?cid=ecf05e4722af56fabb2783439d698fc7f375e47dce9eb261&ep=v1_user_favorites&rid=giphy.gif&ct=g" },
//   { name: "Meme 2", rating: 30, imageURL: "meme2.jpg" },
//   { name: "Meme 3", rating: 60, imageURL: "meme3.jpg" },];
// const above50Memes = [];
// const below50Memes = [];
// memes.forEach((meme) => {
//   if (meme.rating > 50) {
//     above50Memes.push(meme);
//   } else {
//     below50Memes.push(meme);
//   }
// });


// Example usage:
// const appContainer = document.getElementById("app");
// appContainer.appendChild(MemeContainer())