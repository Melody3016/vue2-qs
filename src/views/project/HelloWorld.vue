<template>
  <div id="SGbaidumap">
    <el-radio-group v-model="radioCity" @change="changMap" class="mapGroup">
      <el-radio-button label="省份"></el-radio-button>
      <el-radio-button label="城市"></el-radio-button>
    </el-radio-group>
    <div
      id="newmap"
      style="margin-top: 20px; margin-left: 20px; height: 600px"
    ></div>
  </div>
</template>
<script>
import "echarts/map/js/china"
require("echarts/extension/bmap/bmap")
export default {
  data() {
    return {
      radioCity: "省份",

      buildinglist: [
        { name: "",street:'', j: 113.14, w: 23.08, value: "234" },
        { name: "",street:'', j: 118.46, w: 32.03, value: "12" },
      ],
      buildCity: [
        { name: "",street:'', j: 114.066112, w: 22.548515, value: "88" },
        { name: "",street:'', j: 113.270793, w: 23.135308, value: "99" },
        { name: "",street:'', j: 121.334574, w: 31.200171, value: "77" },
      ],

      jd: 121.487899486, //初始地图中心点的经纬度
      wd: 31.24916171,
      map: {},
      point: {},
    }
  },
  mounted() {
    this.getProviceName()
    this.getCityName()

    this.$nextTick(() => {
      setTimeout(()=>{
        this.loadNewmap(this.jd, this.wd, this.buildinglist)
      },500)
    })
  },
  methods: {
    getProviceName() {
      this.buildinglist.forEach((el) => {
        const point = new BMap.Point(el.j, el.w)
        const gc = new BMap.Geocoder()
        gc.getLocation(point, (rs) => {
          const obj = rs.addressComponents
          el.name = `${obj.province}`
          el.street=obj.street
        })
      })
    },
    getCityName() {
      this.buildCity.forEach((el) => {
        const point = new BMap.Point(el.j, el.w)
        const gc = new BMap.Geocoder()
        gc.getLocation(point, (rs) => {
          const obj = rs.addressComponents
          el.name = `${obj.province}${obj.city}`
          el.street=obj.street
        })
      })
    },
    changMap(value) {
      this.renderMap()
    },
    renderMap() {
      if (this.radioCity === "省份") {
        this.loadNewmap(this.jd, this.wd, this.buildinglist)
      } else {
        this.loadNewmap(
          this.buildCity[0].j,
          this.buildCity[0].w,
          this.buildCity
        )
      }
    },
    loadNewmap(jd, wd, mapList) {
      var _this = this //保存此时的this值！！！
      this.map = new BMap.Map("newmap") // 创建地图实例
      this.point = new BMap.Point(jd, wd) // 创建点坐标
      this.map.centerAndZoom(this.point, 12) // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
      this.map.addControl(new BMap.NavigationControl())
      var opts = { offset: new BMap.Size(150, 5) }
      this.map.addControl(new BMap.ScaleControl(opts))
      this.map.addControl(new BMap.OverviewMapControl())

      mapList.forEach(function (item) {
        //创建多标注
        var point2 = new BMap.Point(item.j, item.w)
        var marker = new BMap.Marker(point2)
        var opts = `<span style="font-size:16px; color:red;margin-right:10px">${item.name}</span><span style="font-size:14px;>${item.street}</span> <span style="font-size:12px;">设备数量:</span><span style=font-size:12px;'>${item.value}</span>`
        var infoWindow = new BMap.InfoWindow(opts) // 创建信息窗口对象，引号里可以书写任意的html语句。
        marker.addEventListener("mouseover", function () {
          this.openInfoWindow(infoWindow)
        })
        marker.addEventListener("mouseout", function (e) {
          this.closeInfoWindow(infoWindow)
        })
        _this.map.addOverlay(marker) // 将标注添加到地图中
      })
    },
  },
}
</script>

<style>
.BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none !important;
}
</style>