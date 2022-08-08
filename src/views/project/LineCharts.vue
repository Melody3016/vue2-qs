<template>
  <div class="container" ref="container">
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  mounted() {
    console.log("🚀 ~ file: LineCharts.vue ~ line 14 ~ mounted ~ this.$refs", this.$refs)
    /* var chartDom = this.$refs;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
    };

    option && myChart.setOption(option); */
  }
}
</script>

<style>

</style>
