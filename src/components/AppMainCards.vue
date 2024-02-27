<script>
import { state } from '../state';
import { languages } from '../languages';

export default {
    name: 'AppMainCards',
    data() {
        return { state, languages }
    },
    methods: {
        flagIcon(country) {

            if (country === '' || country === undefined) {
                return `<span>Flag not available</span>`
            }
            else {
                let tempStr = String(country);
                tempStr = tempStr.toUpperCase();
                tempStr = languages.lang[tempStr];
                tempStr = tempStr.toLowerCase();
                tempStr = tempStr.split(' ');
                tempStr = tempStr.join('-');

                return `<img width="15" height="15" src="https://img.icons8.com/color/15/${tempStr}.png" alt="${tempStr}"/>`;
            }
        },
        h6slice(title) {
            if (title === '' || title === undefined) {
                return 'no data available';
            }
            else if (title.length <= 50) {
                return title;
            }
            else {
                return title.slice(0, 30) + '...';
            }
        },
        titleEvaluating(movie) {
            if (movie.title === '' || movie.title === undefined) {
                return movie.original_name;
            }
            else if (movie.original_name === '' || movie.original_name === undefined) {
                return movie.title
            }
            else {
                return 'title not available';
            }
        },
        imgRender(movie) {
            if (movie.backdrop_path) {
                //console.log('img path: https://image.tmdb.org/t/p/w500/', movie.backdrop_path, ' ', movie.original_title);
                return `https://image.tmdb.org/t/p/w500` + movie.backdrop_path;
            }
            else if (movie.poster_path) {
                //console.log('img path: https://image.tmdb.org/t/p/w500/', movie.poster_path, ' ', movie.original_title);
                return `https://image.tmdb.org/t/p/w780` + movie.poster_path;
            }
            else {
                console.log('img path not available ', movie.original_title);
                return `./src/assets/img/picture-not-available.jpg`;
            }
        }
    },
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div v-for="movie in state.cards" class="card col-sm-6 col-md-4 col-lg-3">
                    <div id="hide_content">
                        <p><span>Titolo: </span>{{ titleEvaluating(movie) }}</p>
                        <p><span>Titolo originale: </span>{{ movie.original_title ? movie.original_title : 'text\
                                                    not available' }}</p>
                        <p><span>Lingua originale: </span><span id="language_icon"
                                v-html="flagIcon(movie.original_language)"></span> {{
                                    movie.original_language ? movie.original_language : 'text not available' }}</p>
                        <p id="p_rate"><span>Voto: </span><i v-for="n in (Math.ceil(movie.vote_average))"
                                class="fa-solid fa-star" style="color: #ffbd00;" :key="n"></i><span id="span_rate">({{
                                    movie.vote_average ?
                                    movie.vote_average.toFixed(1) : 'no data' }})</span></p>
                        <p id="p_overview"><span>Overview: </span>{{ movie.overview ? movie.overview : 'text not available'
                        }}</p>
                    </div>
                    <img :src="imgRender(movie)" :alt="movie.original_title ? movie.original_title : movie.original_name">
                    <!-- <img :src="movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/` + movie.backdrop_path : `./src/assets/img/picture-not-available.jpg`"
                        :alt="movie.original_title"> -->
                    <h6>{{ h6slice(titleEvaluating(movie)) }}</h6>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.d-none {
    display: none;
}

.container {
    width: 90%;
    margin: 1rem auto auto auto;
}

.row {
    >.card {
        position: relative;
        max-height: 300px;
        margin-top: 1rem;
        padding: 0 1rem;

        >img {
            position: relative;
            max-width: 100%;
            width: 100%;
            height: 300px;
            filter: contrast(.9) saturate(1.1) sepia(.2) drop-shadow(0 0 5px rgba(255, 255, 255, 0.474));
        }

        & h6 {
            z-index: 1;
            position: absolute;
            top: 0;
            left: 15;
            color: rgb(17, 17, 17);
            background-color: rgba(128, 128, 128, 0.571);

            padding: .1rem;
            border: solid .5px rgba(128, 128, 128, 0);
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }



        & #hide_content {
            display: none;

            position: absolute;
            top: 0;
            left: 10;
            padding: 1rem;

            width: calc(100% - 2rem);
            max-width: 100%;
            height: 300px;

            border: 1px solid white;
            border-radius: 8px;

            display: flex;
            flex-direction: column;

            background-color: black;
            color: white;

            & span {
                font-weight: bold;
                font-size: medium;
            }

            & p {
                font-size: small;
            }

            & #p_rate {
                margin-bottom: .5rem;

                >span {
                    margin-right: .5rem;
                }

                & i {
                    margin: auto .2rem auto 0;
                }

                & span#span_rate {
                    font-weight: 400;
                    font-size: xx-small;
                    margin: auto .1rem auto .1rem;
                    color: rgb(255, 255, 255);
                }
            }

            & #p_overview {
                border: .5px solid white;
                padding: .2rem;
                border-radius: 8px;
                overflow-y: scroll;
            }
        }

    }
}

/* sm */
@media screen and (min-width: 568px) {
    .col-sm-6 {
        width: 50%;
    }

    .card:hover {

        & img,
        h6 {
            display: block;
        }

        & #hide_content {
            display: none;
        }
    }
}

/* md */
@media screen and (min-width: 768px) {
    .col-md-4 {
        width: calc((100% / 12)* 4);
    }

    .card span {
        font-weight: 600;
        font-size: small;
    }

    #p_rate {
        >span {
            margin-right: .2rem;
        }

        & i {
            margin: auto .1rem auto 0;
        }

        & span#span_rate {
            font-weight: 300;
            font-size: xx-small;
            margin: auto .1rem auto .1rem;
            color: rgb(255, 255, 255);
        }
    }

    .card:hover {

        & img,
        h6 {
            display: none;
        }

        & #hide_content {
            display: block;
        }
    }
}

/* lg */
@media screen and (min-width: 1024px) {
    .col-lg-3 {
        width: calc((100% / 12)* 3);
    }

    .card:hover {

        & img,
        h6 {
            display: none;
        }

        & #hide_content {
            display: block;
        }
    }
}
</style>