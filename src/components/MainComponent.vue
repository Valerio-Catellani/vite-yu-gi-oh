<template>
    <main class="py-5 px-1">
        <CardList />

    </main>
</template>

<script>
import CardList from './CardList.vue'
export default {
    name: 'MainComponent',
    components: {
        CardList
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

main {
    background-color: $main-color;
}
</style>