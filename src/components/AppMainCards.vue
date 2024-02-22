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
                <div class="card col-sm-6 col-md-4 col-lg-4">
                    <img :src="state.cards[0].poster_path" :alt="state.cards[0].title">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.row {
    >.card {
        max-height: 400px;

        >img {
            max-width: 100%;
        }
    }
}

/* sm */
@media screen and (min-width: 568px) {
    .col-sm-6 {
        width: 50%;
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
    .col-lg-4 {
        width: calc((100% / 12)* 4);
    }
}
</style>