<template>
  <div class="container">
    <!-- 文件拖拽上传区域 -->
    <div class="drag-upload">
      <div><i class="el-icon-upload"></i>将目录或多个文件拖拽到此进行扫描</div>
      <div>支持的文件类型：.jpg .jpeg .bmp .webp .gif .png</div>
      <div>每个文件允许的最大尺寸： 1MB</div>
    </div>
    <!-- 点击按钮上传区域 -->
    <div class="btn-upload">
      <el-button type="primary">选择文件</el-button>
      <el-button type="primary">选择文件夹</el-button>
    </div>
    <!-- 上传文件信息表格 -->
    <el-table
      class="table-upload"
      cell-class-name="table-cell"
      :data="uploadInfo"
      :border="true"
      style="width: 100%"
      max-height="330"
    >
      <el-table-column prop="filename" label="文件名"></el-table-column>
      <el-table-column prop="filetype" label="类型"></el-table-column>
      <el-table-column prop="filesize" label="大小" :formatter="filesizeFormatter"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default="{ row }">
          <el-tag v-if="row.status === 0">待上传</el-tag>
          <el-progress
            v-else-if="row.status === 1 || row.status === 2"
            :percentage="50"
          ></el-progress>
          <el-tag v-else-if="row.status === 3" type="success">已上传</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="setting" label="操作" class-name="setting">
        <template #default="{ row }">
          <el-button
            v-if="row.status === 1"
            @click="handleClick(row.id)"
            type="text"
            size="small"
            icon="el-icon-video-pause"
          >
          </el-button>
          <el-button
            v-if="row.status === 2"
            @click="handleClick(row.id)"
            type="text"
            size="small"
            icon="el-icon-video-play"
          >
          </el-button>
          <el-button
            @click="handleClick(row.id)"
            type="text"
            size="small"
            icon="el-icon-delete"
          >
          </el-button>
        </template>
      </el-table-column>
      <template #empty>
        <i class="el-icon-takeaway-box"></i>
        <div>没有数据</div>
      </template>
    </el-table>
    <!-- 上传文件信息标签 -->
    <div class="tags">
      <el-tag type="info">文件数量：{{ fileNum }}</el-tag>
      <el-tag type="success">成功上传： {{ successNum }}</el-tag>
      <el-tag type="info">总大小：{{ totalSize }} </el-tag>
    </div>
    <!-- 翻页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      style="text-align: right;"
      :page-size="5"
      :total="fileNum"
      :hide-on-single-page="true"
    >
    </el-pagination>
    <!-- 上传按钮 -->
    <el-button type="primary">开始上传</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileNum: 0,
      successNum: 0,
      totalSize: 0,
      uploadInfo: [
        {
          filename: '124234.jpg',
          filetype: 'image/jpeg',
          filesize: 2345,
          status: 0
        },
        {
          filename: '9478345345.png',
          filetype: 'image/png',
          filesize: 23345,
          status: 1
        },
        {
          filename: '2342525.gif',
          filetype: 'image/gif',
          filesize: 5445565,
          status: 2
        },
        {
          filename: '5452525.gif',
          filetype: 'image/gif',
          filesize: 54545,
          status: 3
        }
      ]
    }
  },
  methods: {
    handleClick(...rest) {
      console.log(...rest)
    },
    // 文件大小列格式化
    filesizeFormatter(_, __, cellValue) {
      // 显示单位 B KB MB GB, 相邻单位间换算都为1024倍
      const unit = ['B', 'KB', 'MB', 'GB']
      let level = 0
      while (cellValue >= 1024) {
        cellValue /= 1024
        level++
      }
      // 四舍五入，并加上单位
      cellValue = Math.round(cellValue * 100) / 100
      return `${cellValue} ${unit[level]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 50px;
  text-align: left;

  > div {
    margin-bottom: 20px;
  }

  .drag-upload {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 230px;
    font-size: 16px;
    color: #909399;
    border: 1px dashed #d9d9d9;
    background-color: #fff;

    &:hover {
      border-color: #409eff;
    }

    > div {
      margin-bottom: 30px;
    }

    :first-child {
      vertical-align: middle;
      margin-bottom: 8px;
    }

    .el-icon-upload {
      font-size: 50px;
      margin-right: 18px;
    }
  }

  .table-upload {
    ::v-deep .el-table__empty-text {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .el-icon-takeaway-box {
        display: block;
        font-size: 50px;
      }
    }

    ::v-deep .table-cell {
      border: 0;
    }

    ::v-deep .setting {

      i {
        font-size: 26px;
      }
    }
  }

  .tags {
    .el-tag {
      margin-right: 10px;
    }
  }
}
</style>
