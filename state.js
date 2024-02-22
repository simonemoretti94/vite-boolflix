import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    urlAPI: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro',
    apiKey: '4529728a455fd554eacb1d7df41d13e5',
    cards: [],

    posterImgPath: [],

    FoundLoading: true, //return cards array length
    loadingAPI: true, //while true, show a loading icon

    //AppHeader variables
    selectedMovie: '',



    //Methods
    fetchData(url) {


        axios
            .get(url)
            .then((response) => {
                console.log('response.data.results: ', response.data.results);
                response.data.results.forEach(element => {

                    //pushing API element
                    this.cards.push(element);

                });
                //this.cards = response.data.results;
                this.loadingAPI = false;
            })
            .catch((error) => {
                console.error('axios error log: ', error);
            });

        console.log('cards log: ', this.cards);
    },
});

/* data path */

//https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro

/* img path */

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