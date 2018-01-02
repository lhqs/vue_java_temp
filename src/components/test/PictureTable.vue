<template>
  <div id="pictable">
    {{datas}}
    <br/>
    <div id="pictureShow"    style="width: 600px;height: 400px;"></div>
  </div>

</template>


<script>
  import echarts from 'echarts'
  import {baseUrl, axios} from '../../api/config'
  import {getDemoData} from '../../api/api'

  export default {
    data() {
      return {
        isloading:false,
        data: [],
        datas: [0.55, 20, 36, 10, 10, 120]
      }
    },
    mounted() {
      // this.looking();
      // this.getDataForTable();
      // this.looking();
      this.changeData();
      /*this.$nextTick(function () {
        this.drawLine('pictureShow')
      })*/
      this.$nextTick(function () {
        this.drawLine('pictureShow')
      })

    },
    created() {
      // this.changeData();
      this.looking();

    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      question: function () {
        this.drawLine('pictureShow')
      }
    },

    methods: {
      drawLine(paramss) {
        let myChart = echarts.init(document.getElementById(paramss));

        myChart.setOption({
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
        });
      },
      getDataForTable() {
        /*var datadata = [];
        getDemoData().then((res)=>{

          /!*for(let i = 0; i < 6; i++){
            this.datas.push(res.data.data[i].carbon);
          }
          console.log(this.datas);
          *!/
          datadata = [5, 20, 36, 10, 10, 2];
          console.info(datadata);
        }).catch(error=>{
          console.log(error);
        });
        this.datas = datadata;
        console.info(this.datas+"===========");*/
        /*axios.get(`${baseUrl}/getDataInfoNum`).then((res) => {
          this.datas = [1, 2, 4, 5, 3, 6];
        }).catch(error => {
          console.info(error);
        });
        this.datas = [12, 2, 4, 5, 3, 6];*/

      },

      looking() {
        console.info("this datas-->" + this.datas);
      },
      changeData() {
        getDemoData().then((res) => {
          this.datas = [];
          for (let i = 0; i < 6; i++) {
            this.datas.push(res.data.data[i].carbon);
          }
          console.log(this.datas+"-----1------");
          // this.isloading = true;
        }).catch(error => {
          console.log(error);
        });
        console.log(this.datas+"---2---");
        // setInterval(this.changeData, 2000)
      }


    }
  }
</script>

<style scoped>

</style>
