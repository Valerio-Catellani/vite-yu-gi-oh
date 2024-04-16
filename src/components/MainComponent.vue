<template>
    <main class="py-5 px-1">
        <CardList v-if="store.cards.length > 0" />
        <div v-else class="text-center text-white fst-italic display-6">There are no cards that satisfy your
            search
        </div>

    </main>
</template>

<script>
import CardList from './CardList.vue';
import { store } from '../store.js';

export default {
    name: 'MainComponent',
    components: {
        CardList
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

main {
    background-color: $main-color;
}
</style>