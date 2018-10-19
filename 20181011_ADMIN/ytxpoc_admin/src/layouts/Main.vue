<template>
    <div id="main">
        <cc-sider></cc-sider>
        <cc-content>
            <template slot="content-detail">
                <slot></slot>
            </template>
        </cc-content>
    </div>
</template>
<script>
    import Content from "./Content"
    import Sider from "./Sider"

    export default {
        name: "Main",
        components: {
            "cc-content": Content,
            "cc-sider": Sider
        }
    }
</script>