import { reactive } from 'vue';

export const state = reactive({
    urlAPI: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro',
    apiKey: '4529728a455fd554eacb1d7df41d13e5',
    cards: [],

    FoundLoading: true, //return cards array length
    loadingAPI: true, //while true, show a loading icon

});

//https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro

//https://image.tmdb.org/t/p/w342/vKp3NvqBkcjHkCHSGi6EbcP7g4J.jpg

//https://image.tmdb.org/t/p/w342/ + backdrop_path

// poster_sizes": [
//     "w92",
//     "w154",
//     "w185",
//     "w342",
//     "w500",
//     "w780",
//     "original"
//   ],