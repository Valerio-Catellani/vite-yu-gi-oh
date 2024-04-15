<template>

  <HeaderComponent />

  <MainComponent />

</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards(numbers) {
      axios.get(store.base_url + `num=${numbers}&offset=0&`).then((response) => {
        this.store.cards = response.data.data;
      })
    }
  },
  created() {
    this.getCards(20)
  }
}
</script>

<style lang="scss" scoped></style>