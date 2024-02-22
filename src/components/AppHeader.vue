<script>
import { state } from '../../state.js';
//import * from '';

export default {
    name: 'AppHeader',
    //emits: [''],
    components: { //imported components 
        //*,

    },
    data() { //variables, bool, array, objects and so on

        return {
            state,
        }
    },
    methods: { //functions; all kind of manipulations
        movieSearch() {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${state.apiKey}&query=${state.selectedMovie}`;

            if (selectedMovie === '') {
                state.loadingAPI = true;
            }
            else {
                //state.FoundLoading = true;
                fetchData(url);
            }
        },
    },
    computed() { // computed properties are cached based on their reactive dependencies
        return //example this.value1 + this.value2;

    },
}
</script>

<template>
    <header>
        <div class="container">
            <h2>boolflix</h2>
            <input type="text" placeholder="Write here a movie and press enter" v-model="state.selectedMovie"
                @keyup="movieSearch()">
        </div>
    </header>
</template>

<style scoped>
header {
    min-height: 60px;
    background: linear-gradient(#232323, #181818, #141414, #181818, #232323);

    & .container {
        width: 90%;
        height: 65px;
        max-width: 1440px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        >h2 {
            text-transform: uppercase;
            color: var(--boolflix-header-writing);
            font-weight: 500;
            transform: skewX(-5deg);
            filter: drop-shadow(0 0 3px rgba(128, 128, 128, 0.629));
        }

        >input {
            width: calc((100% / 12) * 3);
            padding: .3rem;
            border-radius: 8px;
            text-align: center;
            color: rgb(53, 53, 53);
            font-size: medium;
        }
    }

}

@media (max-width: 350px) {
    header {
        >.container {
            >h2 {
                width: calc((100% / 12) * 5);
                font-size: 90%;
            }

            >input {
                width: calc((100% / 12) * 5);
                font-size: xx-small;
            }
        }
    }
}

@media (max-width: 450px) {
    header {
        >.container {
            >h2 {
                width: calc((100% / 12) * 5);
                font-size: 100%;

            }

            >input {
                width: calc((100% / 12) * 5);
                font-size: small;
            }
        }
    }
}
</style>