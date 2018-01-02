<template>
    <div>

      <el-row :gutter="20">
        <el-col :span="16"><div>
          <div >
            <router-link to="/" tag="p">
              <span id="mainTitle"><strong>欢迎访问物联网系统</strong></span>
            </router-link>
          </div>
        </div></el-col>
        <el-col :span="4"><div>
          <span id="login"> </span>
        </div>
        </el-col>
        <el-col :span="4"><div>
          <span id="logout">退出</span>
        </div>
        </el-col>
      </el-row>

    </div>
</template>

<script>
    export default {
      data() {
        return {
          msg: ''

        }
      },
      methods:{
        login(){

        }

      }
    }
</script>

<style scoped>

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  #login,#logout {
    font-size: 28px;
    float:right;
  }
  #mainTitle{
    font-size: 18px;
  }

</style>
