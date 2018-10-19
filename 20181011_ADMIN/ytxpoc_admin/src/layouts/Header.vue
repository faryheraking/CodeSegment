<template>
    <div id="header">
        <div><img src="" alt=""></div>
        <ul>
            <li v-for="(v,i) in menus"><img src="" alt="">{{v.text}}<img src="" alt=""></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: function () {
            return {
                menus: [
                    {iconLeft: "", text: "控制台", iconRight: ""},
                    {iconLeft: "", text: "业务运营", iconRight: ""},
                    {iconLeft: "", text: "服务配置", iconRight: ""},
                    {iconLeft: "", text: "系统配置", iconRight: ""}
                ]
            };
        }
    }
</script>