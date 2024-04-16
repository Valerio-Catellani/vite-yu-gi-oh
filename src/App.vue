<template>

  <SplashComponent />
  <HeaderComponent v-if="firstLoading" @reset="getCards(100)" />
  <MainComponent v-if="firstLoading" />


</template>

<script>
import { store, methodsStore } from './store.js';
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
      methodsStore,
      firstLoading: false,
    }
  },
  methods: {
    getCards(numbers) {
      this.store.isLoading = true;
      this.store.options.params.num = numbers;

      axios.get(this.store.base_url + this.store.card_list, this.store.options)
        .then((response) => {
          this.store.totalCards = 100
          this.store.cards = this.methodsStore.formatCardList(response.data.data);
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

        }
        )
        .catch((error) => {
          console.log(error);
        })
    },
    getAllTypes() {
      axios.get(store.base_url + this.store.card_list).then((response) => {
        response.data.data.forEach(element => {
          if (!this.store.menu.typeMenu.menuList.includes(element.type)) {
            this.store.menu.typeMenu.menuList.push(element.type)
          }
          if (!this.store.menu.raceMenu.menuList.includes(element.race)) {
            this.store.menu.raceMenu.menuList.push(element.race)
          }
        })
      }).catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getCards(100),
      this.getAllArchetype()
    this.getAllTypes()
  },

}
</script>

<style lang="scss" scoped></style>