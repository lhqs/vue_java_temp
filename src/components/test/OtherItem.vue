<!--
<template>
    <div id="otherItem">

      {{name}}<br />

      <div ref="mycharts" style="min-width: 400px;heght:400px"></div>
    </div>
</template>

<script>
    import {getDataForChart} from '../../api/api'
    import '../../assets/highcharts.js'
    // var Highcharts = require('highcharts');
    export default {
      data(){
          return {
            name:"this is name"
          }
      },
      methods:{

      },
      created(){

      },
      mounted() {
        console.log(this.$refs.mycharts);
        this.$refs.mycharts.highcharts({
            chart: {
              type: 'spline',
              animation: Highcharts.svg,
              marginRight: 10,
              events: {
                load: function () {
                  var series = this.series[0], chart = this;
                  setInterval(function () {
                    /*var x;
                    $.ajax({
                      type: "GET",
                      url: "<c:url value='/GetDataParam'/>",
                      //data : "",
                      success: function (data) {
                        var jsdata = JSON.parse(data);

                        y = parseFloat(jsdata.humidity);
                        series.addPoint([x, y], true,
                          true);
                        activeLastPointToolip(chart)
                      }
                    });*/
                    getDataForChart().then(res => {
                      console.log(res);
                      var jsdata = JSON.parse(data);
                      y = parseFloat(jsdata.humidity);
                      series.addPoint([x, y], true, true);
                      activeLastPointToolip(chart);
                    }).catch((err) => {
                      console.log("test&ndash;&gt;"+err);
                    })

                  }, 3000);
                }
              }
            },
            title: {
              text: '动态模拟实时湿度数据'
            },
            xAxis: {
              //type : 'datetime',
              tickPixelInterval: 150
            },
            yAxis: {
              title: {
                text: '湿度'
              },
              plotLines: [{
                color: '#808080'
              }]
            },
            tooltip: {
              formatter: function () {
                return '<b>' + this.series.name + '</b><br/>'
                  + Highcharts.numberFormat(this.y, 2);
              }
            },
            legend: {
              enabled: false
            },
            exporting: {
              enabled: true
            },
            credits: {
              enable: false
            },
            series: [{
              name: '湿度',
              data: (function () {
                var data = [], i;
                for (i = -19; i <= 0; i += 1) {
                  data.push({
                    x: i++,
                    y: i + 20
                  });
                }
                return data;
              }())
            }]
          }, function (c) {
            activeLastPointToolip(c)
          });
      }


    }
</script>

<style scoped>

</style>
-->
