<template>
    <main class="py-5 px-1 d-flex flex-column align-items-center">

        <SearchComponent />
        <LoaderComponent v-if="store.isLoading" />
        <CardList v-if="store.cards.length > 0" />

    </main>
</template>

<script>
import CardList from './CardList.vue';
import { store } from '../../store.js';
import LoaderComponent from './LoaderComponent.vue';
import SearchComponent from './SearchComponent.vue';


export default {
    name: 'MainComponent',
    components: {
        CardList,
        LoaderComponent,
        SearchComponent,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

main {
    background-color: $main-color;
}
</style>