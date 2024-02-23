<script>
import { state } from '../../state.js';

export default {
    name: 'AppMainCards',
    //emits: [''],
    components: { //imported components 
        //*,

    },
    data() { //variables, bool, array, objects and so on

        return { state, }
    },
    methods: { //functions; all kind of manipulations

    },
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div v-for="movie in state.cards" class="card col-sm-6 col-md-4 col-lg-3">
                    <div id="hide_content">
                        <p><span>Titolo: </span>{{ movie.title }}</p>
                        <p><span>Titolo originale: </span>{{ movie.original_title }}</p>
                        <p><span>Voto: </span>{{ movie.vote_average }}</p>
                        <p><span>Overview: </span>{{ movie.overview }}</p>
                    </div>
                    <img :src="`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path" :alt="movie.original_title">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    width: 90%;
    margin: 1rem auto auto auto;
}

.row {
    >.card {
        position: relative;
        max-height: 300px;
        margin-top: 1rem;

        >img {
            /* display: none; */
            position: relative;
            z-index: 1;
            max-width: 100%;
            height: 300px;
            filter: contrast(.9) saturate(1.1) sepia(.2) drop-shadow(0 0 5px rgba(255, 255, 255, 0.474));
        }



        & #hide_content {
            position: absolute;
            /* display: none; */
            top: 0;
            left: 0;
            background-color: black;
            max-width: 100%;
            height: 300px;
            border: 1px solid white;
            padding: 1rem;
            overflow-y: hidden;
            display: flex;
            flex-direction: column;
            color: white;


            & span {
                font-weight: bold;
                font-size: medium;
            }

            & p {
                font-size: small;
            }
        }

    }

    >.card:hover {
        >img {
            display: none;
        }

        & #hide_content {
            display: block;
        }
    }

}

/* sm */
@media screen and (min-width: 568px) {
    .col-sm-6 {
        width: 50% -.5rem;
    }
}

/* md */
@media screen and (min-width: 768px) {
    .col-md-4 {
        width: calc((100% / 12)* 4);
    }
}

/* lg */
@media screen and (min-width: 1024px) {
    .col-lg-3 {
        width: calc((100% / 12)* 3);
    }
}
</style>