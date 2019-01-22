<template>
  <div class="matchhistory">
    <el-row class="matchsearchrow" >
      <el-col :span="6" :offset="2">
        <div class="matchlabel">比赛搜索</div>
      </el-col>
      <el-col :span="5" >
        <el-input v-model="mId" placeholder="请输入比赛ID" class="searchmatches"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button  @click="seachmatch" class="searchbutton">搜索</el-button>
      </el-col>
      <el-col :span="5" >
        <el-input v-model="steamId" placeholder="请输入Dota2 ID" class="searchmatches"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button  @click="seachmatches" class="searchbutton">搜索</el-button>
      </el-col>

    </el-row>
    <el-row class="tablerow">
        <el-table :data="matcheshistory" class="matchestable" 
        @row-click="matchdetails">
          <el-table-column
            prop="heroName"
            label="使用英雄"
            min-width="30%">
          </el-table-column>
          <el-table-column
            prop="time"
            label="比赛时间"
            min-width="40%">
          </el-table-column>
          <el-table-column
            prop="camp"
            label="所属阵营"
            min-width="30%">
          </el-table-column>
        </el-table>
    </el-row>
    <el-row class="buttonrow">
      <el-col :span="10" :offset="2" class="buttoncol">
        <el-button  @click="lastpage">上一页</el-button>

      </el-col>
      <el-col :span="10" class="buttoncol">
        <el-button  @click="nextpage">下一页</el-button>
      </el-col>
    </el-row>
    
  </div>
 
</template>

<script>
export default {
  name: 'matchhistory',
  data () {
    return {
      steamId:null,
      lastmatchId:0,
      matcheshistory:[],
      lastmatches:[],
      mId:null,
    }
  },
  methods:{
    searchmatch(){
      var url = "/matches/history?acountid="+
      this.steamId +"&matchid=" + this.lastmatchId;
      this.$axios
      .get(url).then((res)=>{
        if(res.data.code==0){
          this.matcheshistory = res.data.data.slice(0,10);
          this.lastmatchId = res.data.data[10].matchId;
        }else{
          alert("出错了")
        }
    });
  },
    seachmatches(){
      if(this.steamId==null){
        alert("不能为空")
        return;
      }
      this.lastmatchId = 0;
      this.searchmatch();
      
  },
  lastpage(){
    if(this.lastmatches.length==0){
        this.lastmatchId = 0;   
    }else{
      this.lastmatchId = this.lastmatches.pop()
    }
    this.searchmatch();
  },
  nextpage(){
    
    this.lastmatches.push(this.matcheshistory[0].matchId);
    this.searchmatch();
  },
  matchdetails(row){
    var url = '/overview/' + row.matchId;
    this.$router.push(url);
  },
  seachmatch(){
  
    var url = '/overview/' + this.mId;
    this.$router.push(url);
  }
}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .matchhistory{
      background-color: black;
      width: 80%;
      top: 0px;
      height: 100%;
      color: #c0c0c0;
    }
    .matchlabel{
      height: 40px;
      line-height: 40px;
      font-size: 150%;
      text-align: center;
    }
    .matchsearchrow{
      height: 40px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .searchmatches{
      width: 60%;
      float: right;
    }
    .matchestable{
      width: 80%;
      min-height: 400px;
      margin:0 auto; 
    }
    .tablerow{
      
      margin-bottom: 20px;
    }
    .buttonrow{
      height: 40px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .buttoncol{
      text-align: center;
    }
</style>
<style>
  .el-input__inner{
    background-color: #212121 !important;
    border-color:  black !important;
  }
  .el-button{
    background-color: #212121 !important;
    border-color:  black !important;
  }
  .el-table{
    background-color: #212121 !important;
    border-width: 0px !important;
  
  }
  .is-leaf{
    background-color: #212121 !important;
    border-width: 0px !important;
  }
  .el-table::before{
    height: 0px !important; 
  }
  .el-table__row{
    background-color: black !important;
  }
  .el-table__row--striped{
    background-color: #212121 !important;
  }
  .el-table td{
    border-bottom-width: 0px !important;
  }
</style>

