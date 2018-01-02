<template>
  <div>

    <button @click="goback">go</button>
    <h1>{{data}}</h1>
    <button @click="exit(123)">test</button>

  </div>
</template>

<script>
  import {login,logout,getUsername,test} from '../../api/api'
  export default {
    data() {
      return {
        msg: 'one is all',
        data:[]
      }
    },
    methods: {
      test:function (params) {
        test(params).then((res) => {
          console.log(res);
          this.data = res.data[1].username;
          console.log(this.data);
        })
      },
      exit: function (params) {
        logout(params).then((res) => {
          console.log(res);
          this.data = res.data[1].username;
          this.$message({
            type: 'info',
            message: '删除成功'
          });
        }).catch((err) => {
          console.log("test-->"+err);
        })
      },
      goback() {
        this.$router.go(-1);
      }

    }
  }
</script>

<style>

  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
