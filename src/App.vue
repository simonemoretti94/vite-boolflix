<script>
import { state } from '../state.js';
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';

export default {
  name: '*',
  //emits: [''],
  components: { //imported components 
    AppHeader,

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
    axios
      .get(state.urlAPI)
      .then((response) => {
        //console.log(response.data.results);
        state.cards = response.data.results;
        console.log('cards: ', state.cards);
      })
      .catch((error) => {
        console.error('axios error log: ', error);
      })
  },
  watch: { //triggers a function whenever a reactive property changes

  },
}
</script>

<template>
  <AppHeader></AppHeader>
</template>

<style scoped></style>