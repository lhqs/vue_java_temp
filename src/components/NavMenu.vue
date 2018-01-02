<template>

<el-row class="tac">
  <el-col>
    <h5>管理平台</h5>
    <el-menu
      @open="handleOpen"
      @close="handleClose"
      background-color="#5b5b5b"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-3">
            <router-link to="/username" tag="li">
              添加用户
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">删除用户</template>
          <el-menu-item index="1-4-1">选项</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2" v-show="isShow">
        <router-link to="/test1" tag="li" >
          <i class="el-icon-location"></i>
          数据监控
        </router-link>

      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/helloworld" tag="li">
          <i class="el-icon-setting"></i>
          终端控制
        </router-link>
      </el-menu-item>

      <el-menu-item index="4">
        <!--<span slot="title">操作日志</span>-->
        <router-link to="/" tag="li">
          <i class="el-icon-loading"></i>
          操作日志
        </router-link>
      </el-menu-item>

      <el-menu-item index="5">
        <!--<span slot="title">操作日志</span>-->
        <router-link to="/chart" tag="li">
          <i class="el-icon-time"></i>
          临时测试
        </router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <!--<span slot="title">操作日志</span>-->
        <router-link to="/" tag="li">
          <i class="el-icon-picture"></i>
          图表demo
        </router-link>
      </el-menu-item>
    </el-menu>
  </el-col>

</el-row>

</template>

<script>
  export default {
    data(){
      return {
        isShow:true,
        temp:"temp msg"
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

</style>
