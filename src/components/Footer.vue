<template>
    <div id="footer">
        <el-row type="flex">
            <el-col :span="9" :offset="1" class="col1">
                <i class="el-icon-info">copyrightⒸOnionKnight</i>
            </el-col>
            <el-col :span="4" class="col2">
                <img src="/static/images/common/footer.jpg" height="50px">
            </el-col>
            <el-col :span="9" class="col3">
                <i class="el-icon-message">497549626@qq.com</i>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #footer{
      background-color:  rgb(37, 12, 12);
  }
  .el-row{
      background-color:  rgb(37, 12, 12);
      align-items:center;
      color: white;
  }
  .col1{
      display: flex;
      justify-content:flex-start;
  }
  .col2{
      display: flex;
      justify-content:center;
  }
  .col3{
      display: flex;
      justify-content:flex-end;
  }
</style>