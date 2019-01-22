<template>
    <div class="items">
        <el-row>
            <img src="/static/images/common/shop.jpg" width="100%" height="400px">
        </el-row>
        <el-row class="itemtab">
            <el-col :span="16" :offset="4">
            <el-tabs type="border-card">
            <el-tab-pane v-for="(item,index) in type"
                :key="index"
                :label = "item"
                :name="item">
                <li class="icon" v-for="item in items[index]" 
                :key="item.id" @mouseenter="showpanel(item.id)">
                    <img :src="item.url" > 
                </li>
            </el-tab-pane>
        </el-tabs>
        </el-col>
        </el-row>
        <el-col :span="16" :offset="4" class="itempanel" :v-model="index">
            <el-row class="itemname">
                <div >
                    {{itemdetails[index].name_cn}}
                </div>
            </el-row>
            <el-row class="itemcost">
                <img src="/static/images/common/gold.png" height="20px">
                {{itemdetails[index].price}}
            </el-row> 
            <el-row class="detail">
                <el-col :span="6">
                    <img :src="itemdetails[index].lgurl" width="160px" >
                </el-col>
                <el-col :span="6">
                    <p>&#12288; &#12288;{{itemdetails[index].describe}}</p>
                </el-col>
                <el-col :span="12">
                    <p v-for="(item,index) in itemdetails[index].attri"
                    :key="index">
                    {{item}}
                    </p>
                </el-col>
                
            </el-row>
            
        </el-col>
        
        
        
    </div>
</template>
<script>
export default {
    name: 'items',
    data(){
        return{
            items:[],
            type:[],
            itemdetails:[],
            index:0,
        }
    },
    methods:{
      showpanel(id){
          this.index = id-1;
      }
    },
    created:function(){
       this.type = new Array("消耗品","属性","军备","奥术","普通",
      "辅助","法器","武器","防具","圣物","神秘");
      for(var i=0;i<11;i++){
          this.items[i] = new Array();
      }
      this.$axios
      .get("/items/allitems").then((res)=>{
          if(res.data.code==0){
              var myitems=res.data.data;
              this.itemdetails = new Array(myitems.length);
              myitems.forEach(element => {
                  var item = new Object();
                  var url = "/static/images/items/"+element.name_en+".png";
                  item.url=url;
                  item.id = element.item_id;
                  this.items[element.type-1].push(item);
                  var lgurl = "/static/images/items/"+element.name_en+".png";
                  element.lgurl = lgurl;
                  var desarr = element.description.split("#");
                  element.describe = desarr[desarr.length-1];
                  element.attri = desarr.slice(0,desarr.length-1);
                  this.itemdetails[element.item_id-1] = element;
              });
              this.$forceUpdate()
          }else{
              alert("出错了");
          }
      });
     
  }
}
</script>
<style scoped>
    .items{
      background-color: black;
      width: 80%;
      top: 0px;
      height: 100%;
      color: #c0c0c0;
    }
    .icon{
     float: left;
     list-style:none;
     width: 85px;
     height: 66px;
     margin-right: 10px;
     margin-bottom: 5px;
    }
    .itempanel{
        background-color:  #171717;
        border: 2px solid #2c2f33;
        margin-bottom: 20px;
    }
    .itemname{
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 200%;
        border-bottom: 2px solid  #574205;
    }
    .itemcost{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        height: 20px;
        line-height: 20px;
    }
    .itemtab{
        margin-bottom: 20px;
    }
    .detail{
        margin-bottom: 10px;
    }
</style>
<style>
.el-tabs {
  background-color: #171717 !important;
}
.el-tabs__nav-scroll {
  background-color: #171717 !important;
}
.el-tabs {
  border: 2px solid #2c2f33 !important;
}
.el-tabs__item {
  border: 1px solid #2c2f33 !important;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active.is-top {
  background-color: gray !important;
  color: white !important;
}
.el-dialog__body {
  background-color: #2c2f33 !important;
  height: 220px !important;
}
.el-dialog__header {
  background-color: rgb(37, 12, 12) !important;
  color: white !important;
}
</style>