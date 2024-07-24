<template>
    <div class="container">
        <!-- <div class="main"> -->
        <div class="back_img"></div>

        <!-- 整个注册盒子 -->
        <div class="loginbox">
            <!-- 左侧的注册盒子 -->
            <div class="loginbox-in">
                <div class="userbox">
                    <span class="iconfont">&#xe817;</span>
                    <input class="user" id="user" v-model="name" placeholder="用户名">
                </div>
                <br>
                <div class="pwdbox">
                    <span class="iconfont">&#xe775;</span>
                    <input class="pwd" id="password" type="password" v-model="pwd" placeholder="密码">
                </div>
                <br>
                <div class="log-box">
                    <div class="log-box-text"> 忘记密码</div>
                    <button type="primary" class="login_btn" @click="login">Login</button>
                </div>

                <br>
                <button type="primary" class="register_btn" @click="register">若无账号请点击注册</button>
            </div>
            <!-- 右侧的注册盒子 -->
            <div class="background">
                <div class="title">Welcome to Law System Management Center</div>
            </div>

        </div>
        <!-- </div> -->
    </div>
</template>

<script>
    import axios from 'axios'
    import {setToken} from '@/utils/auth'
    export default {
        name: "Login",
        data: function () {
            return {
                name: '',
                pwd: '',
                user_list: [
                    {
                        id: '1',
                        username: 'user',
                        password: '123'
                    },
                ]

            }
        },
        methods: {

            register() { this.$router.push("register") },

            login() {
                //如果是有参数传递
                if (!this.$route.query.list) {
                    this.user_list.forEach((item) => {
                        axios.post('/client/auth/login', { userName: this.name, passWord: this.pwd }).then(res => {
                            if (res.data.code == 200) {
                                setToken(res.data.data.access_token)
                                this.$router.push({ path: this.redirect || 'dashboard' })
                                console.log(res)
                            } else {
                                this.$message.error(res.data.message);
                            }
                        }).catch(error => {
                            console.log(error)
                        })
                    })
                }
            },
        },
    }
</script>

<style scoped>
    .container {
        height: 100%;
        width: 100%;
        background-color: #c6e1d7;
    }

    /* .back_img{
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 1024px;
    height: 800px;
    filter: blur(2.3PX) !important;
    background-image: url(../../static/img/p3.png); 
} */
    .loginbox {
        display: flex;
        position: absolute;
        width: 1000px;
        height: 500px;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 #4E655D;
    }

    .loginbox-in {
        background-color: #89AB9E;
        width: 240px;
    }

    .userbox {
        margin-top: 120px;
        height: 30px;
        width: 230px;
        display: flex;
        margin-left: 10px;
    }

    .pwdbox {
        height: 30px;
        width: 225px;
        display: flex;
        margin-left: 10px;
    }

    .background {
        width: 760px;
        background-image: url('../../../static/img/Christmas_Trees.png');
        background-size: cover;
        font-family: sans-serif;
    }

    .title {
        margin-top: 320px;
        font-weight: bold;
        font-size: 20px;
        color: #4E655D;
        text-align: center;
    }

    .title:hover {
        font-size: 21px;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
    }

    .uesr-text {
        position: left;
    }

    input {
        outline-style: none;
        border: 0;
        border-bottom: 1px solid #E9E9E9;
        background-color: transparent;
        height: 20px;
        font-family: sans-serif;
        font-size: 15px;
        color: #445b53;
        font-weight: bold;
    }

    /* input::-webkit-input-placeholder{
      color:#E9E9E9;
   } */
    input:focus {
        border-bottom: 2px solid #445b53;
        background-color: transparent;
        transition: all 0.2s ease-in;
        font-family: sans-serif;
        font-size: 15px;
        color: #445b53;
        font-weight: bold;

    }

    input:hover {
        border-bottom: 2px solid #445b53;
        background-color: transparent;
        transition: all 0.2s ease-in;
        font-family: sans-serif;
        font-size: 15px;
        color: #445b53;
        font-weight: bold;

    }

    input:-webkit-autofill {
        /* 修改默认背景框的颜色 */
        box-shadow: 0 0 0px 1000px #89AB9E inset !important;
        /* 修改默认字体的颜色 */
        -webkit-text-fill-color: #445b53;
    }

    input:-webkit-autofill::first-line {
        /* 修改默认字体的大小 */
        font-size: 15px;
        /* 修改默认字体的样式 */
        font-weight: bold;
    }

    .log-box {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        width: 190px;
        margin-left: 30px;
        color: #4E655D;
        margin-top: -5px;
        align-items: center;

    }

    .log-box-text {
        color: #4E655D;
        font-size: 12px;
        text-decoration: underline;
    }

    .login_btn {
        background-color: #5f8276;
        /* Green */
        border: none;
        color: #FAFAFA;
        padding: 5px 22px;
        text-align: center;
        text-decoration: none;
        font-size: 13px;
        border-radius: 20px;
        outline: none;
    }

    .login_btn:hover {
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
        cursor: pointer;
        background-color: #0b5137;
        transition: all 0.2s ease-in;
    }

    .warn {
        margin-top: 60px;
        /* margin-right:120px; */
        margin-left: -120px;
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 17px;
    }

    .register_btn {
        background-color: transparent;
        /* Green */
        border: none;
        text-decoration: none;
        font-size: 12px;
        /* border-radius: 20px;   */
        color: #4E655D;
        font-size: 12px;
        text-decoration: underline;
        display: flex;
        margin-left: 25px;
        outline: none;

    }

    .register_btn:hover {
        font-weight: bold;
        cursor: pointer;
    }

    @font-face {
        font-family: "iconfont";
        src: url('../../../static/font/iconfont.eot');
        src: url('../../../static/font/iconfont.eot?#iefix') format('embedded-opentype'),
            /* IE6-IE8 */
            url('../../../static/font/iconfont.woff2') format('woff2'), url('../../../static/font/iconfont.woff') format('woff'), url('../../../static/font/iconfont.ttf') format('truetype'),
            /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
            url('../../../static/font/iconfont.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 20px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 22px;
        color: #4E655D;
        margin-right: 10px;
        margin-top: 3px;
    }

    .icon-key:before {
        content: "\e775";
    }

    .icon-account:before {
        content: "\e817";
    }
</style>