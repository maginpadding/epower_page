<template>
    <div>
  

        <el-upload class="upload_image" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>


        <el-container>
              <el-row class="upload_image">
            <el-button type="primary" plain @click="search">点击查询商标</el-button>
        </el-row>
        
            <el-row v-if="listShow">
                <el-col :span="6" v-for="item in 4" :key="item">
                    <div class=""><img src="http://t.ipr.cn/tm_img/d011028c546231cfa38f71f7c9a1fd7c" alt="" srcset=""></div>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center" v-if="listShow">
                <el-col :span="6">
                    <el-pagination layout="prev, pager, next" :total="40" @size-change="handleSizeChange" @current-change="handleCurrentChange" @current-page="currentPage">
                    </el-pagination>
                </el-col>
            </el-row>
        </el-container>

        <!-- dialog -->
        <el-button type="text" @click="dialogImageVisible = true">打开嵌套表单的 Dialog</el-button>
        <el-dialog title="上传图片" :visible.sync="dialogImageVisible" class="image_upload_dialog">
            <el-row :gutter="24" class="local_upload_wrap">
                <el-col :span="2" :offset="20">
                    <el-button type="primary" plain>本地上传</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6" v-for="index in 4" :key="index">
                    <div class="li_image">
                        <img :src="'http://image.zhangxinxu.com/image/study/s/s256/mm'+(index+currentIndex)+'.jpg'" alt="" srcset="">
                        </div>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="6">
                    <el-pagination layout="prev, pager, next" :total="40" @size-change="handleSizeChange" @current-change="handleCurrentChange" @current-page="currentPage">
                    </el-pagination>
                </el-col>
            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogImageVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogImageVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
        listShow:false,
      dialogImageVisible: false,
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      currentIndex: 0
    }
  },
  mounted() {
    //   this.dialogImageVisible = true;

  },
  methods: {
      search(){
          let _this = this;
    axios
      .get('/trademark/jinsiList?cls=03&sc=&me=feng')
      .then(function(response) {
        console.log(response)
        _this.listShow = true;
        let res = response
        let data = res.data
        if (res.status == 200) {
          layer.msg(data.text, { icon: 1 })
        } else {
          layer.msg(res.statusText, { icon: 2 })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
      },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    pageChange(index) {
      console.log(index)
      this.currentIndex = index * 4
    },
    handleSizeChange(index) {
      this.pageChange(index)
    },
    handleCurrentChange(index) {
      this.pageChange(index)
    },
    currentPage(index) {
      this.pageChange(index)
    }
  }
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}
.upload_image {
  margin: 30px;
}
.image_upload_dialog .el-dialog__body {
  padding-top: 0;
}
.local_upload_wrap {
  margin-bottom: 15px;
}
.li_image {
  height: 120px;
  text-align: center;
  line-height: 120px;
  margin-bottom: 15px;
  img {
    width: 100%;
    height: 120px;
    display: block;
  }
}
</style>