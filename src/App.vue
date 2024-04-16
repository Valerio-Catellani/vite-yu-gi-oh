<template>

  <SplashComponent />
  <HeaderComponent v-if="firstLoading" @search="getCardsByArchetype" />
  <MainComponent v-if="firstLoading" />


</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import SplashComponent from './components/SplashComponent.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    SplashComponent
  },
  data() {
    return {
      store,
      firstLoading: false,
    }
  },
  methods: {
    getCards(numbers) {
      axios.get(store.base_url + `num=${numbers}&offset=0&`)
        .then((response) => {
          console.log(response.data.data);
          this.store.cards = response.data.data;
          setTimeout(() => {
            this.firstLoading = true;
          }, 500)
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {

        })
    },
    getCardsByArchetype(info) {
      if (info) {
        axios.get(store.base_url + `archetype=${info}`)
          .then((response) => {
            console.log(response.data.data);
            this.store.cards = response.data.data;
          })
          .catch((error) => {
            this.store.cards = [];
            console.log(this.store.cards.length > 0);
            console.log(error);
          })
          .finally(() => {

          })
      } else {
        this.getCards(200)

      }

    }

  },
  created() {
    this.getCards(200)
  },

}
</script>

<style lang="scss" scoped></style>