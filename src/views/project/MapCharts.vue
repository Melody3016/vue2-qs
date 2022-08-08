<template>
  <div>
    <div class="china-box">
      <div ref="china_map" style="height: 100%;width: 100%"></div>
    </div>
  </div>
</template>
<script>
  import echarts from "echarts";
  import 'echarts/map/js/china.js' // 核心文件
  require('echarts/theme/macarons') //
  const provinces = {
    台湾: 'taiwan',
    河北: 'hebei',
    山西: 'shanxi',
    辽宁: 'liaoning',
    吉林: 'jilin',
    黑龙江: 'heilongjiang',
    江苏: 'jiangsu',
    浙江: 'zhejiang',
    安徽: 'anhui',
    福建: 'fujian',
    江西: 'jiangxi',
    山东: 'shandong',
    河南: 'henan',
    湖北: 'hubei',
    湖南: 'hunan',
    广东: 'guangdong',
    海南: 'hainan',
    四川: 'sichuan',
    贵州: 'guizhou',
    云南: 'yunnan',
    陕西: 'shanxi1',
    甘肃: 'gansu',
    青海: 'qinghai',
    新疆: 'xinjiang',
    广西: 'guangxi',
    内蒙古: 'neimenggu',
    宁夏: 'ningxia',
    西藏: 'xizang',
    北京: 'beijing',
    天津: 'tianjin',
    上海: 'shanghai',
    重庆: 'chongqing',
    香港: 'xianggang',
    澳门: 'aomen'
  }

  export default {
    data() {
      return {
      };
    },
    mounted() {
      this.$nextTick(_=>{
        this.chinaMaprsult()
      })
    },
    methods: {
      chinaMapHidden(chinaMap) {
        let that = this
        chinaMap.on('click',async function(params){
          if (params.name in provinces) {
            let s = await import(`echarts/map/js/province/${provinces[params.name]}`);
           if (s){
             that.chinaMaprsult(params.name)
           }
          }
        })
      },
      chinaMaprsult(name=null){
        let chinaMap = echarts.init(this.$refs.china_map)
        let options = {
          tooltip: { // 鼠标移到图里面的浮动提示框
            formatter:function (params) {
              return params.name
            }
          },
          visualMap: { // 左下角展示
            show: true,
            min: 0,
            max: 100,
            left: 10,
            bottom: 0,
            showLabel: true,
            textStyle: {
              color: '#000'
            },
            pieces: [{
              gt: 75,
              lte: 100,
              label: '111',
              color: '#f7358c',

            }, {
              gt: 50,
              lte: 75,
              label: '222',
              color: '#fb9632',

            }, {
              gt: 25,
              lte: 50,
              label: '3333',
              color: '#08b2ff',
            }, {
              gte: 0,
              lte: 25,
              label: '444',
              color: '#4d2ed2'
            }
            ]
          },
          // dataRange: {
          //
          // },
          geo: {
            map: name ? name : "china", // 核心
            roam: true,
            label: { // 页面初始化加载的文字
              normal: {
                show: true,
                textStyle: {
                  color: "#000", // 页面初始化的地图文字颜色
                  fontSize:10// // 页面初始化的地图文字大小
                },
              },
            },
            itemStyle: { //设置样式
              normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: 'rgba(119, 156, 255, 1)'
              },
              emphasis: { // 移入背景颜色
                areaColor: '#ff00ff',
                show: true,
                textStyle: {
                  color: '#000',
                  fontSize: "12px"
                }
              },
            },
          },
          series: [
            {
              type: "map",
              geoIndex: 0,
              data: [ // 地图数据
              ],
              label: {
                normal: {
                  show: true, //显示省份标签
                  textStyle:{color:"#696969"},//省份标签字体颜色
                },
                emphasis: {
                  show: true,
                  textStyle: {
                  }
                }
              },
            },
          ],
          }
        chinaMap.setOption(options)
        this.chinaMapHidden(chinaMap)
        }
    }
  }
</script>
<style lang="scss">
  .china-box{
    margin: 50px auto;
    width: 800px;
    height: 600px;
  }
</style>
