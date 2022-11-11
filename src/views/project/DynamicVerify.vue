<template>
  <div class="container">
    <el-form :model="formData" ref="ruleForm" label-width="80px" :rules="rules">
      <el-form-item label="name" prop="name">
        <el-input type="text" v-model="formData.name" />
      </el-form-item>
      <div class="box"
        v-for="(item,index) in formData.inputList"
        :key="index"
      >
        <el-form-item label="key" :prop="'inputList.'+index+'.key'" :rules="rules.key">
          <el-input type="text" v-model="item.key" />
        </el-form-item>
        <el-form-item label="url"  :prop="'inputList.'+index+'.url'" :rules="rules.url">
          <el-input type="text" v-model="item.url" />
        </el-form-item>
      </div>
      <el-button @click="add">添加</el-button>
      <el-button @click="submit">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        inputList: [
          { key: '', url: '' }
        ]
      },
      rules: {
        name: [
          { required: true, message: '请输入name', trigger: 'change' }
        ],
        key: [
          { required: true, message: '请输入Key', trigger: 'change' }
        ],
        url: [
          { required: true, message: '请输入url', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    add() {
      this.formData.inputList.push({})
    },
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log(this.formData)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
.container {
  width: 600px;
  margin: 100px auto;
}
.box {
  display: flex;
}
</style>
