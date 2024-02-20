<script>
import { state } from '../../state.js';
//import * from '';

export default {
    name: 'AppMain',
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

    },
    computed: { // computed properties are cached based on their reactive dependencies
        CardsFound() {
            return 'Found ' + state.cards.length + ' movies';
        }
    },
    mounted() {
        setTimeout(() => {
            state.FoundLoading = false;
        }, 6000);
    }
}
</script>

<template>
    <div>
        <h6 v-if="state.FoundLoading" id="h6_info">{{ CardsFound }}</h6>

        <div class="container">
            <div class="row">
                <div id="loader">
                    <i class='fa fa-refresh fa-spin' style="color: white;"></i>
                    <p>Loading content, please wait</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h6#h6_info {
    margin: .3rem auto auto .5rem;
    color: white;
    font-weight: 500;
    animation: h6_info;
    animation-duration: 4s;
}

.container {
    min-height: calc(100vh - 65px);
}

div#loader {
    margin-top: 10rem;
    display: flex;

    >p {
        color: white;
        font-size: medium;
        margin-left: .3rem;
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
</style>