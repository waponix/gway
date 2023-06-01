<script>
    import Menu from './Menu.vue';
    export default {
        components: {
            'c-menu': Menu
        },
        props: {
            menu: Array,
            id: String
        },
        data() {
            return {
                collapse: true
            }
        }
    }
</script>

<template>
    <ul :id="id" class="text-slate-400 font-light text-lg">
        <c-menu v-for="item in menu" :menu="item" class="c-menu-item-root"/>
    </ul>
</template>