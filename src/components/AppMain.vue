<script>
import { state } from '../state';
import AppMainCards from './AppMainCards.vue';

export default {
    name: 'AppMain',
    components: {
        AppMainCards,

    },
    data() {
        return {
            state,
        }
    },
    computed: {
        CardsFound() {
            return 'Found ' + state.cards.length + ' movies';
        },
    },
    mounted() {
        setTimeout(() => {
            state.FoundLoading = false;
        }, 4000);

        if (state.cards.length == 0 && state.loadingAPI == false) {
            setTimeout(() => {

                state.showH1 = true;

            }, 3000);
        }
    },
}
</script>

<template>
    <main>
        <div>
            <h6 v-if="state.FoundLoading" id="h6_info">{{ CardsFound }}</h6>

            <div class="container">
                <div v-if="state.loadingAPI" id="loader">
                    <i class='fa fa-refresh fa-spin' style="color: white;"></i>
                    <p>Loading content, please wait</p>
                </div>
                <AppMainCards></AppMainCards>
                <h1 v-if="state.showH1">Sorry, content not found <i class="fa fa-cloud"></i></h1>
            </div>
        </div>
    </main>
</template>

<style scoped>
h6#h6_info {
    margin: .3rem auto auto .5rem;
    color: white;
    font-weight: 500;
    animation: h6_info;
    animation-duration: 4s;
}

main {
    min-height: calc(100vh - 65px);
    margin-top: 6rem;
    margin-bottom: 1rem;
}

div#loader {
    width: 300px;
    margin: 10rem auto auto calc((100% - 300px) / 2);
    display: flex;

    >p {
        color: white;
        font-size: medium;
        margin-left: .3rem;
    }
}

h1 {
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transform: skewX(-5deg);
    margin: auto auto auto 2rem;
    text-shadow: 0 0 1.5px black;

    >i {
        color: var(--boolflix-header-writing);
        text-shadow: 0 0 2px rgba(255, 255, 255, 0.588);
    }
}

@keyframes h6_info {
    0% {
        font-size: xx-small;
    }

    50% {
        font-size: small;
    }

    50% {
        font-size: medium;
    }

    100% {
        font-size: small;
    }
}

@media screen and (max-width: 470px) {

    h1 {
        font-size: 20px;

        >i {
            font-size: 20px;
        }
    }
}
</style>