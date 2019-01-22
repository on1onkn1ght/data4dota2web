<template>
    <div id="header">
        <el-row :gutter="20" class="headrow" >
            <el-col :span="4" class="col" :offset="1"><img src="/static/images/common/logo.png" height="50px"></el-col>
            <el-col :span="13" class="col" type="flex">
                <el-menu mode="horizontal" >
                    <el-menu-item class="mi" index="1"><router-link to="/heroindex">首页</router-link></el-menu-item>
                    <el-menu-item class="mi" index="2"><router-link to="/heroindex">英雄</router-link></el-menu-item>
                    <el-menu-item class="mi" index="3"><router-link to="/items">物品</router-link></el-menu-item>
                    <el-menu-item class="mi" index="4"><router-link to="/matches">比赛</router-link></el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="6" class="col"></el-col>
        </el-row>
        <el-row id="imageback">
            <el-col id="imagebox">
                
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Header',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #header{
        padding-left: 0;
        padding-right: 0;
        color:white;
        text-align: center;
        width:100%;
        min-height: 100%;
        background-color: rgb(37, 12, 12);
    }
    .el-menu{
        height: 60px;
        background-color: rgb(37, 12, 12);
        border-bottom-width: 0;
    }
    .el-menu-item{
        color: white;
        font-size:120%;
        height: 60px;
        border-bottom-width: 0;
    }
    .headrow{
        background-color: rgb(37, 12, 12);
        margin-left: 0;
        margin-right: 0;
        width: 100%;
    }
    .col{
        align-items: center;
        height: 60px;
    }
    #imagebox{
        width: 100%;
        min-height: 200px;
        background: url(/static/images/common/header.jpg) no-repeat;
        background-size: cover;
        opacity: 0.5;
        display: flex;
        align-content: center;
        
    }
    #imageback{
        background-color: black;
        
    }
    #title{
        display: flex;
        /*实现垂直居中*/
        align-items: center;
        padding-left: 21%;
        font-size: 200%;
        color: white;
    }
    .mi{
        border-bottom-width: 0px;
        
    }
    .router-link-exact-active{
        text-decoration:none;
    }
    .el-menu--horizontal>.el-menu-item a, .el-menu--horizontal>.el-menu-item a{
        text-decoration:none;
    }
    .el-menu--horizontal>.el-menu-item.is-active{
        border-bottom-width: 0px;
        text-decoration:none;
    }
</style>