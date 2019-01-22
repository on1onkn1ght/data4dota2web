<template>
    <div id="itemselect">
        <el-tabs type="border-card">
            <el-tab-pane v-for="(item,index) in type"
                :key="index"
                :label = "item"
                :name="item">
                
                <li class="icon" v-for="item in items[index]" :key="item.id" @click="choosen(item.id)">
                    <img :src="item.url" height="64px" width="85px" >
                </li>

            </el-tab-pane>
        </el-tabs>
        
       
    </div>
</template>

<script>
export default {
  name: 'itemselect',
  props:['index'],
  data(){
      return{
          items:[],
          type:[],
      }
  },
  methods:{
      choosen(id){
          this.$emit('putpicktm', id,this.index);
          this.$emit('closeselectortm');
      }
  },
  created:function(){
       this.type = new Array("消耗品","属性","军备","奥术","普通",
      "辅助","法器","武器","防具","圣物","神秘");
      for(var i=0;i<11;i++){
          this.items[i] = new Array();
      }
      this.$axios
      .get("/items/allIcon").then((res)=>{
          if(res.data.code==0){
              var myitems=res.data.data;
              myitems.forEach(element => {
                  var item = new Object();
                  var url = "/static/images/items/"+element.name_en+".png";
                  item.url=url;
                  item.id = element.item_id;
                  this.items[element.type-1].push(item);
                  this.$forceUpdate()
              });
          }else{
              alert("出错了");
          }
      });
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemselect{
    color: white;
}
.icon{
     float: left;
     list-style:none;
     width: 85px;
     height: 66px;
     margin-right: 10px;
     margin-bottom: 5px;
 }
</style>