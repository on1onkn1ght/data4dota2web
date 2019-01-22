<template>
    <div id="skill">
       <el-col :span="3">
           <img :src="iconurl" >
       </el-col>
       <el-col :span="21">
           <el-row class="talenttext">         
                <div class="itemtext">{{skill.name_cn}}</div>     
           </el-row>
           <el-row class="describe">
                <div >{{skill.description}}</div> 
           </el-row>
           <el-row class="details">
                <div >{{skill.details}}</div> 
           </el-row>
           <el-row class="cdmc">
               <el-col :span="12">
                   <div class="imgtext">
                    <img src="/static/images/common/mana.png"  class="imgg">
                    <div class="textt">{{skill.mp_cost}}</div>
                   </div>
               </el-col>
               <el-col :span="12">
                   <div class="imgtext">
                    <img src="/static/images/common/cooldown.png"  class="imgg">
                    <div class="textt">{{skill.mp_cost}}</div>
                   </div>
               </el-col>
           </el-row>
           <el-row class="attributes" v-for="att in attributes" :key="att">
                <div >{{att}}</div> 
           </el-row>
           
       </el-col>
       
    </div>
</template>

<script>
export default {
  name: 'skill',
  props: ['myskill'],
  data(){
      return{
          skill:new Object(),
          iconurl:'',
          attributes:[],
      }
  },
  created(){
      this.skill = this.myskill
      
      this.iconurl = "/static/images/skills/"+ this.myskill.name_en+"_hp1.png";
      this.attributes = this.myskill.attributes.split("#");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .talenttext{
        margin-bottom: 20px;
        font-size: 200%;
    }
    .describe{
        margin-bottom: 20px;
    }
    .details{
        color: green;
        margin-bottom: 20px;
    }
     .imgtext{
        height:22px;
        vertical-align:middle;
        font-size: 15px;
        float: left;
    }
    .imgg{
        height: 22px;
        float: left;
    }
    .textt{
        height:22px;
        line-height: 22px;
        float: left;
        padding-left: 5px;
    }
    .cdmc{
        margin-bottom: 20px;
    }
    .attributes{
        margin-bottom: 10px;
    }
</style>