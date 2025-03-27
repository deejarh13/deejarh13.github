let movieinput = document.getElementById('search-input');
let searchButton = document.getElementById('search-btn');
let result = document.getElementById('result');
const imglink = `https://image.tmdb.org/t/p/original`;

//  --url 'https://api.themoviedb.org/3/tv/series_id?language=en-US' \
// --url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' \
// rl 'https://api.themoviedb.org/3/genre/movie/list?language=en' \
// 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US' 
// --url 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1' \



movieinput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
})

searchButton.addEventListener('click', () => {
    let movieName = movieinput.value;
    let api_key = '8c8de6d106d66037e8b9209ac123ad9f';
    let url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${api_key} `;




    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = '';

            data.results.forEach(movie => {
                let voteAverage = movie.vote_average;


                let movieContent = `
            <div class=movie> 
                <div class="movie-item">
                    <h2 id="title">${movie.title}</h2>
                    <img src="${imglink + movie.poster_path}" id="img-disp" />
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Overview: </h4>
                            <span>${movie.overview}</span>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Language:  <span>${movie.original_language}</span></h4>
                            
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>IMdb Rating:  <span>${parseFloat(voteAverage.toFixed(2)) + '/10'}</span> </h4>
                            
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Release Date:  <span>${movie.release_date}</span> </h4>
                            
                        </div>
                    </div>
             </div>
                      <br>  
                      
            `;
                result.innerHTML += movieContent;



            });
            if (result.innerHTML === "") {
                alert('Invalid Movie name.')

            }



        })



});
