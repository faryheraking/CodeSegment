<template>
    <div class="login">
        <div class="form-wrap">
            <div class="f-left left-content text-white"><em>后台管理<br>为您提供更优质的服务</em></div>
            <div class="f-left right-content"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {

            };
        },
        methods: {
            startHacking() {
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                    duration: 5000
                });
            }
        }
    };
</script>
<style scoped>
    .login {position: relative;width: 100%;height: 100%;background: url('../../assets/system/images/login/login.jpg') no-repeat center center;}
    .login .form-wrap {position: absolute;left: 50%;top: 50%;margin: -215px 0 0 -270px;width: 540px;height: 430px;background: url('../../assets/system/images/login/login2.png') no-repeat left top;}
    .login .left-content {width: 195px;padding:250px 20px 0;}
    .login .right-content {width: 305px;}
</style>
