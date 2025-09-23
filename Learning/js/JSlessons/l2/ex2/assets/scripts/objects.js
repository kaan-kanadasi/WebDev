const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movieList = document.getElementById('movie-list');

const movies = [];

const renderMovies = (filter = '') => {
  
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.toLowerCase().includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    movieEl.dataset.id = movie.id;
    const { info } = movie; /* stores info = movie.info  */
    const { title: movieTitle } = info;/* movieTitle is the name of the var  */
    let { getFormattedTitle } = movie;
    //getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle().call(movie) + ' -- ';
    for(const key in info) 
    { 
      if(key !== 'title') 
        text += `${key}: ${info[key]}`; 
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title, /**short for title:title */
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase(); /**this keywork makes it look to the object that calls the keywork in this case newMovie obj */
    }
  };

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value.toLowerCase();
  renderMovies(filterTerm);
};

searchBtn.addEventListener('click', searchMovieHandler);
addMovieBtn.addEventListener('click', addMovieHandler);
console.log(movies);