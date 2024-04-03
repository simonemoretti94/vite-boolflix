import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    urlAPI: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=the',
    apiKey: '4529728a455fd554eacb1d7df41d13e5',
    cards: [],

    FoundLoading: true, //return cards array length
    loadingAPI: true, //while true, show a loading icon

    //AppMain variables
    showH1: false,

    //AppHeader variables
    selectedMovie: '',



    //Methods
    fetchData(url) {

        axios
            .get(url)
            .then((response) => {

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