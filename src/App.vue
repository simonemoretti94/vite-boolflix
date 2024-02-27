<script>
import { state } from './state';

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

  mounted() { //Run code after DOM's initial rendering

    state.fetchData(state.urlAPI);

  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style scoped></style>