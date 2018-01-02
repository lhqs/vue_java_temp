<template>
  <div id="app">

    <div id="loginBefore" v-if="loginBefore">
      <log-in></log-in>
    </div>

    <div id="top" v-if="loginAfter">
      <head-nav></head-nav>
    </div>
    <div id="main" v-if="loginAfter">
      <div id="sidebar">
        <NavMenu></NavMenu>
      </div>
      <div id="content" v-if="loginAfter">
        <Container></Container>
      </div>
    </div>
  </div>


</template>

<script>

  import HeadNav from './components/HeadNav'
  import NavMenu from './components/NavMenu'
  import Container from './components/Container'
  import LogIn from './components/LogIn'

  export default {
    name: 'app',
    data() {
      return {
        loginBefore: false,
        loginAfter: true
      }
    },
    components: {
      NavMenu,
      Container,
      HeadNav,
      LogIn
    }
  }
</script>

<style>
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #app {
    height: 100%;
    padding: 40px 0 0;
    box-sizing: border-box;
    position: relative;
  }

  #top {
    height: 40px;
    background: #f0f0f0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  #main {
    height: 100%;
  }

  #sidebar {
    float: left;
    width: 200px;
    height: 100%;
    background-color: #5b5b5b;
  }

  #content {
    margin-left: 200px;
    height: 100%;
    width: auto;
    overflow: auto;
    background-color: #ffffff;
  }

</style>
