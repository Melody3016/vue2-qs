<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>原生表单上传</span>
      </div>
      <form action="http://localhost:4000/my-web/upload/multiple" method="POST" enctype="multipart/form-data">
        <input type="file" name="avatar" id=""><br><br>
        <input type="file" name="boop" id="" multiple><br><br>
        <input type="file" name="scenery" id="" multiple><br><br>
        <input type="submit" value="提交">
      </form>
      <p class="desc">
        最简单的文件上传方式，通过设置enctype属性为"multipart/form-data"，文件会被表单编码成form-data格式，发送给后端服务器。
        使用form表单提交会刷新页面，因此基本不使用
      </p>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>原生input上传（本地预览）</span>
      </div>
      <input type="file" name="" id="iptUploadSingle"><br><br>
      <div class="box">
        <img :src="iptUploadSingleUrl" alt="上传图片预览">
        <img :src="iptUploadSingleUrl2" alt="上传图片预览">
      </div><br><br>
      <input type="file" name="" id="iptUploadMultiple" multiple><br><br>
      <button @click="clickHandler1">提交</button>
      <p class="desc">
        使用原生input标签选择文件，手动发送请求上传
      </p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iptUploadSingleUrl: '',
      iptUploadSingleUrl2: ''
    }
  },
  methods: {
    clickHandler1() {
      const iptSingleEle = document.getElementById('iptUploadSingle')
      const iptMultipleEle = document.getElementById('iptUploadMultiple')
      // 生成本地图片预览路径
      const file = iptSingleEle.files[0]
      this.iptUploadSingleUrl = URL.createObjectURL(file)
      var reader = new FileReader()
      reader.addEventListener("load", () => {
        this.iptUploadSingleUrl2 = reader.result
      }, false)

      if (file) {
        reader.readAsDataURL(file)
      }
      console.log('this.iptUploadSingleUrl', this.iptUploadSingleUrl)
      console.log(iptSingleEle.files)
      console.log(iptMultipleEle.files)
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin-bottom: 20px;
  margin-right: 18px;

  .desc {
    font-size: 14px;
    text-indent: 2ex;
    padding: 20px 0;
  }
}
</style>
