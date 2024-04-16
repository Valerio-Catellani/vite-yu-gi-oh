<template>
    <div class="container d-flex flex-wrap justify-content-center py-5 my-5">
        <CardComponent v-for="element in store.cards" :key="element.card.id" :card="element.card" />
    </div>
</template>

<script>
import { store } from '../../store.js';
import CardComponent from './CardComponent.vue';

export default {
    name: 'CardList',
    components: {
        CardComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>