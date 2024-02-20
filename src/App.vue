<script>
import { state } from '../state.js';
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'app',
  //emits: [''],
  components: {
    AppHeader,
    AppMain,
  },
  data() { //variables, bool, array, objects and so on

    return {
      state,
    }
  },
  methods: { //functions; all kind of manipulations

  },
  computed() { // computed properties are cached based on their reactive dependencies
    return //example this.value1 + this.value2;

  },
  created() {

  },
  mounted() { //Run code after DOM's initial rendering

    setTimeout(() => {

      axios
        .get(state.urlAPI)
        .then((response) => {
          //console.log(response.data.results);
          state.cards = response.data;
          console.log('cards: ', state.cards.results);
          state.loadingAPI = false;
        })
        .catch((error) => {
          console.error('axios error log: ', error);
        })
    }, 2000);
  },
  watch: { //triggers a function whenever a reactive property changes

  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style scoped></style>