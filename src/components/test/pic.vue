<template>
  <div id="pictable">
    {{datas}}
    <br />
    <div v-if="isloading">demo</div>
    <br/>
    <div id="pictureShow" style="width: 1200px;height: 900px;"></div>


  </div>

</template>


<script>
  import echarts from 'echarts'
  import {baseUrl, axios} from '../../api/config'
  import {getDemoData} from '../../api/api'

  export default {
    data() {
      return {
        isloading:true,
        one:"",
        data: [],
        datas: [1, 20, 36, 101,12,322]
      }
    },
    mounted() {
      /*this.changeData();
      this.$nextTick(function () {
        this.drawLine('pictureShow')
      })*/

      this.dramPic();


    },
    created() {
/*      this.changeData();
      this.looking();*/

    },
    watch: {

    },

    methods: {
      dramPic(){
        let temp = this;
        let metd = this;
        let myChart = echarts.init(document.getElementById('pictureShow'));
        let option = {
          title: {text: 'ECharts test'},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: this.datas
          }]

        };

        setInterval(function (){
          temp.datas = [0.55, 20, 36, 101,12,3];

          console.info("this datas --> "+ temp.datas);
          myChart.setOption(option);
          temp.isloading = false;
          metd.changing();

        }, 4300);
      },
      changing() {
        console.log("this--->"+this.datas);
      }






    }
  }
</script>

<style scoped>

</style>
