<template>
  <div id="container">
    <h1>{{msg}}</h1>
    <hr />
    <transition name="slide-fade">
      <keep-alive>
        <router-view class="content"></router-view>
      </keep-alive>

    </transition>
  </div>
</template>

<script>


export default {
    data(){
      return {
        msg:"This is a temporary platform ",
        datas:""
      }
    }
}
</script>

<style scoped>
.content {
  padding: 10px;
  margin: 30px;
}

h1 {
  margin-left: 30px;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
