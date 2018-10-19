<template>
    <cc-main>
        <router-view></router-view>
    </cc-main>
</template>

<script>
    import Main from '../../layouts/Main'

    export default {
        name: "Home",
        components: {
            "cc-main": Main
        }
    };
</script>

<style scoped>

</style>