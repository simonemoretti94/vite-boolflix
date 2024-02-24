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
    methods: {
        flagIcon(country) {
            //return `<link type="image/png" sizes="16x16" rel="icon" href=".../icons8-italy-16.png">`;

            switch (country) {
                case ('en'): {
                    return `<img width="15" height="15" src="https://img.icons8.com/color/15/great-britain.png" alt="great-britain"/>`;
                }
                case ('es'): {
                    return `<img width="15" height="15" src="https://img.icons8.com/color/15/spain.png" alt="spain"/>`;
                }
                case ('it'): {
                    return `<img width="15" height="15" src="https://img.icons8.com/color/15/italy.png" alt="italy"/>`;
                }
                case ('de'): {
                    return `<img width="15" height="15" src="https://img.icons8.com/color/15/germany.png" alt="germany"/>`;
                }
                case ('ja'): {
                    return `<img width="15" height="15" src="https://img.icons8.com/color/15/japan.png" alt="japan"/>`;
                }
                case ('hi'): {
                    return `<img width="15" height="15" src="https://img.icons8.com/color/15/india.png" alt="india"/>`;
                }
                case ('ru'): {
                    return `<img width="15" height="15" src="https://img.icons8.com/color/15/russia.png" alt="russia"/>`;
                }
                case ('zh'): {
                    return `<img width="15" height="15" src="https://img.icons8.com/color/15/china.png" alt="china"/>`;
                }
            }

        },
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
                        <p><span>Lingua originale: </span><span id="language_icon"
                                v-html="flagIcon(movie.original_language)"></span></p>
                        <!-- <span v-html="flagIcon(movie.original_language)"></span> -->
                        <!-- {{ flagIcon(movie.original_language) }} -->
                        <p id="p_rate"><span>Voto: </span><i v-for="n in (Math.ceil(movie.vote_average))"
                                class="fa-solid fa-star" style="color: #ffbd00;" :key="n"></i><span id="span_rate">({{
                                    movie.vote_average.toFixed(1) }})</span></p>
                        <p id="p_overview"><span>Overview: </span>{{ movie.overview }}</p>
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
        padding: 0 1rem;

        >img {
            /* display: none; */
            position: relative;
            /* z-index: 1; */
            max-width: 100%;
            height: 300px;
            filter: contrast(.9) saturate(1.1) sepia(.2) drop-shadow(0 0 5px rgba(255, 255, 255, 0.474));
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
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            /* overflow-y: scroll; */

            display: flex;
            flex-direction: column;

            background-color: black;
            color: white;
            filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.404));

            & span {
                font-weight: bold;
                font-size: medium;
            }

            & p {
                font-size: small;
            }

            /* & span#language_icon {
                & img {
                    width: 10px;
                    aspect-ratio: 1 / 1;
                }
            } */

            & #p_rate {
                margin-bottom: .5rem;

                >span {
                    margin-right: .5rem;
                }

                & i {
                    margin: auto .3rem auto 0;
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
                padding: .1rem;
                border-radius: 8px;
                overflow-y: scroll;
            }
        }

    }

    /* >.card:hover {
        >img {
            display: block;
        }

        & #hide_content {
            display: none;
        }
    } */

}

/* sm */
@media screen and (min-width: 568px) {
    .col-sm-6 {
        width: 50%;
    }

    .card:hover {
        & img {
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
        & img {
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
        & img {
            display: none;
        }

        & #hide_content {
            display: block;
        }
    }
}
</style>