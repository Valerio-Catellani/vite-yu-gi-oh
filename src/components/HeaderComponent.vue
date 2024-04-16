<template>
    <header class="bg-white border-bottom border-black">
        <div class="container">
            <nav class="d-flex align-items-center p-1">
                <div class="img-container">
                    <img class="img-fluid" src="/images/banner.png" />
                </div>
                <h1 class="ms-3 p-2 mb-0 align-self-center">Yu-Gi-Oh API</h1>
            </nav>
        </div>

    </header>
    <div v-if="store.userSearch" class="bg-primary-subtle text-dark fst-italic px-3 py-2 ">
        <div class="container">Your results are filtered by: {{
            store.userSearch }}
            <i class="fa-solid fa-xmark" role="button" @click="reset"></i>
        </div>


    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            userInput: '',
            store,
        }
    },
    emits: ['reset'],
    methods: {
        reset() {
            store.userSearch = ''
            this.$emit('reset', this.userSearch)
        },

    },
}
</script>

<style lang="scss" scoped>
.img-container {
    width: 7%;
    min-width: 100px;
}
</style>