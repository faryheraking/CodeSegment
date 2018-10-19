<template>
    <div id="content" class="f-left">
        <cc-header></cc-header>
        <cc-tabs></cc-tabs>
        <slot name="content-detail"></slot>
    </div>

</template>
<script>
    import Header from "./Header"
    import Tabs from "./Tabs"

    export default {
        name: "Content",
        components: {
            "cc-header": Header,
            "cc-tabs": Tabs
        }
    };
</script>