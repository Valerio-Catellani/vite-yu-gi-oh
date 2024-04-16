<template>
    <div class="dropdown">
        <button id="first-dropdown" class="btn btn-secondary dropdown-toggle shadow" type="button"
            data-bs-toggle="dropdown" aria-expanded="false" @click="isOpen = !isOpen">
            {{ menu.menuName }}
        </button>
        <ul class="main-menu dropdown-menu" :class="{ 'show': isOpen }">
            <template v-if="menu.menuName === 'Archetype'">
                <li v-for="key in Object.keys(menu.menuList)" :key="key" class="dropdown-item position-relative">{{
                    key }}
                    <ul class="sub-menu dropdown-menu show position-absolute">
                        <li v-for="element in menu.menuList[key]" :key="element" class="dropdown-item" role="button"
                            @click="methods.findElementByArchetype(element.archetype_name)">{{
                                element.archetype_name }}
                        </li>
                    </ul>
                </li>
            </template>
            <li v-else v-for="element in menu.menuList" :key="element" class="dropdown-item">{{ element }}</li>
        </ul>
    </div>
</template>

<script>
//Object.keys(menu.menuList)
import { store, methods } from '../../store.js';

export default {
    name: 'DropdownMenuAPI',
    props: ['menu'],
    data() {
        return {
            store,
            methods,
            isOpen: false,
        }
    },


}
</script>

<style lang="scss" scoped>
.main-menu {
    min-width: 0 !important;

    li:hover .sub-menu {
        display: block !important;
    }

    .sub-menu {
        display: none;
        left: 100%;
        top: 0%
    }
}
</style>