<template>

  <SplashComponent />
  <HeaderComponent v-if="firstLoading" @search="getCardsByName" />
  <MainComponent v-if="firstLoading" />


</template>

<script>
import { store, methods } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponents/MainComponent.vue';
import SplashComponent from './components/SplashComponent.vue';



export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    SplashComponent,
  },
  data() {
    return {
      store,
      methods,
      firstLoading: false,
    }
  },
  methods: {
    getCards(numbers) {
      this.store.isLoading = true
      this.store.options.params.num = numbers
      axios.get(this.store.base_url + this.store.card_list, this.store.options)
        .then((response) => {
          this.store.cards = this.methods.formatCardList(response.data.data);
          //console.log(this.store.cards);
          setTimeout(() => {
            this.firstLoading = true;
          }, 500)
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.store.isLoading = false
        })
    },
    getCardsByName(info) {
      this.store.isLoading = true;
      this.store.options.params.fname = info
      console.log(this.store.options.params.fname);
      if (info) {
        axios.get(store.base_url + this.store.options.params.fname)
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
            this.store.isLoading = false
          })
      } else {
        this.getCards(100)
      }
    }, /// da rivedere
    getAllArchetype() {
      axios.get(store.base_url + this.store.archetype_list)
        .then((response) => {
          response.data.map(element => {
            let firstInitial = element.archetype_name[0];
            if (!this.store.menu.archetypeMenu.menuList.hasOwnProperty(firstInitial)) {
              this.store.menu.archetypeMenu.menuList[firstInitial] = []
            }
            this.store.menu.archetypeMenu.menuList[firstInitial].push(element)
          })
          console.log(this.store.menu.archetypeMenu.menuList);
        }
        )
        .catch((error) => {
          console.log(error);
        })
    }
  },
  created() {
    this.getCards(100),
      this.getAllArchetype()

  },

}
</script>

<style lang="scss" scoped></style>