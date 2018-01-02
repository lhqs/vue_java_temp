<!--
<template>
  <div id="loginPage">
    <el-row>
      <el-col :span="8">
        <el-input id="name"  v-model="username" placeholder="请输入帐号">
          <template slot="prepend">帐号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        data() {
          return {
            username : '',
            password : ''
          }
        },
      methods:{
        check : function(event){
          //获取值
          var username = this.username;
          var password = this.password;
          if(username == '' || password == ''){
            this.$message({
              message : '账号或密码为空！',
              type : 'error'
            })
            return;
          }
          $.ajax({
            url : 'login',
            type : 'post',
            data : {
              username : name,
              password : password
            },
            success : function(data) {
              var result = data.result;
              if(result == 'true' || result == true){
                alert("登录成功");
              }else {
                alert("登录失败");
              }
            },
            error : function(data) {
              alert(data);
            },
            dataType : 'json',

          })
        }

      }
    }
</script>

<style scoped>

</style>
-->

<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">物联网系统登录</h3>
    <br />
    <el-form-item prop="username">
      <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="请输入账号">
        <template slot="prepend">帐号</template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入密码">
        <template slot="prepend">密码</template>
      </el-input>
    </el-form-item>
    <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
  import { userLogin } from '../api/api';

  export default {
    data() {
      return {
        logining: false,
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
        },
        checked: true
      };
    },
    methods: {
      handleSubmit() {
        this.logining = true;
        var loginParams = {username: this.ruleForm.username, password: this.ruleForm.password};
        userLogin(loginParams).then(response => {
          this.logining = false;
          console.log(response);
          let code = response.data.code;
          if (code == -1) {
            this.$message({
              message: response.data.message,
              type: 'error'
            });
          } else {
            // sessionStorage.setItem('user', response.data.message);

            this.$router.push({path: '/home'});
          }

        })

      },
      otherTemp() {

      }

    }
  }
</script>

<style  scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
