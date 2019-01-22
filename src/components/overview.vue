<template>
  <div class="overview">
    <el-row class="overtable">
      <el-col :span="15" :offset="2">
        <el-table :data="matches">
          <el-table-column 
            prop="id"
            label="比赛ID"
            min-width="20%">
          </el-table-column>
          <el-table-column 
            prop="starttime"
            label="比赛时间"
            min-width="20%">
          </el-table-column>
          <el-table-column 
            prop="duration"
            label="持续时间"
            min-width="20%">
          </el-table-column>
          <el-table-column 
            prop="wincamp"
            label="胜利方"
            min-width="20%">
          </el-table-column>
        </el-table>
        
      </el-col>
      <el-col :span="4" :offset="1" class="replaylink">
        <router-link :to="replyurl" class="replaytext">
          <h3>录像分析</h3>
        </router-link>
      </el-col>
      
    </el-row>
    <el-row class="textrow">
      <el-col :span="20" :offset="2">
        <div>
          天辉
        </div>
      </el-col>
    </el-row>
    <el-row class="playerrow">
      <el-col :span="20" :offset="2">
        <el-table :data="radiantplayers">
          <el-table-column 
            prop="name"
            label="玩家ID"
            min-width="10%">
          </el-table-column>
          <el-table-column 
            prop="herourl"
            label="英雄"
            min-width="10%">
            <template slot-scope="scope">
              <img :src="scope.row.herourl" height="40px">
            </template>
          </el-table-column>
          <el-table-column 
            prop="level"
            label="等级"
            min-width="5%">
          </el-table-column>
          <el-table-column 
            prop="kda"
            label="K/D/A"
            min-width="5%">
          </el-table-column>
          <el-table-column 
            prop="gpm"
            label="GPM"
            min-width="5%">
          </el-table-column>
          <el-table-column 
            prop="xpm"
            label="XPM"
            min-width="5%">
          </el-table-column>
          <el-table-column 
            prop="heroDamage"
            label="英雄伤害"
            min-width="6%">
          </el-table-column>
          <el-table-column 
            prop="headling"
            label="英雄治疗"
            min-width="6%">
          </el-table-column>
          <el-table-column 
            prop="towerDamage"
            label="建筑伤害"
            min-width="6%">
          </el-table-column>
          <el-table-column 
            prop="eqitems"
            label="装备栏"
            min-width="10%">
            <template slot-scope="scope">
              <li v-for="(item,index) in scope.row.eqitems" 
              :key="index" class="itemicon">
                  <img :src="item" style="width: 35px;
                  height: 30px;">
              </li>
            </template>
          </el-table-column>
          <el-table-column 
            prop="backpack"
            label="背包"
            min-width="10%">
            <template slot-scope="scope">
              <li v-for="(item,index) in scope.row.backpack" 
              :key="index" class="itemicon">
                  <img :src="item" style="width: 35px;
                  height: 30px;">
              </li>
            </template>
          </el-table-column>
        </el-table>
        
      </el-col>
    </el-row>
    <el-row class="textrow">
      <el-col :span="20" :offset="2">
        <div>
          夜魇
        </div>
      </el-col>
    </el-row>
    <el-row class="playerrow">
      <el-col :span="20" :offset="2">
        <el-table :data="direplayers">
          <el-table-column 
            prop="name"
            label="玩家ID"
            min-width="10%">
          </el-table-column>
          <el-table-column 
            prop="herourl"
            label="英雄"
            min-width="10%">
            <template slot-scope="scope">
              <img :src="scope.row.herourl" height="40px">
            </template>
          </el-table-column>
          <el-table-column 
            prop="level"
            label="等级"
            min-width="5%">
          </el-table-column>
          <el-table-column 
            prop="kda"
            label="K/D/A"
            min-width="5%">
          </el-table-column>
          <el-table-column 
            prop="gpm"
            label="GPM"
            min-width="5%">
          </el-table-column>
          <el-table-column 
            prop="xpm"
            label="XPM"
            min-width="5%">
          </el-table-column>
          <el-table-column 
            prop="heroDamage"
            label="英雄伤害"
            min-width="6%">
          </el-table-column>
          <el-table-column 
            prop="headling"
            label="英雄治疗"
            min-width="6%">
          </el-table-column>
          <el-table-column 
            prop="towerDamage"
            label="建筑伤害"
            min-width="6%">
          </el-table-column>
          <el-table-column 
            prop="eqitems"
            label="装备栏"
            min-width="10%">
            <template slot-scope="scope">
              <li v-for="(item,index) in scope.row.eqitems" 
              :key="index" class="itemicon">
                  <img :src="item" style="width: 35px;
                  height: 30px;">
              </li>
            </template>
          </el-table-column>
          <el-table-column 
            prop="backpack"
            label="背包"
            min-width="10%">
            <template slot-scope="scope">
              <li v-for="(item,index) in scope.row.backpack" 
              :key="index" class="itemicon">
                  <img :src="item" style="width: 35px;
                  height: 30px;">
              </li>
            </template>
          </el-table-column>
        </el-table>
        
      </el-col>
    </el-row>
  </div>
 
</template>

<script>
export default {
  name: 'overview',
  props: ['matchid'],
  data () {
    return {
      matches:[],
      radiantplayers:[],
      direplayers:[],
      replyurl:'',
    }
  },
  methods:{
    add0(m){
      return m<10?'0'+m:m
    }
  },
  created: function(){
    var url = "/matches/overview?id="+this.matchid;
    this.replyurl = "/matchdetail/"+this.matchid;
    this.$axios.get(url).then(res => {
      if(res.data.code==0){
        var match = res.data.data;
        var over = new Object();
        var time = new Date(match.starttime*1000);
        over.starttime = time.getFullYear() + '-' 
                       + this.add0(time.getMonth()+1) + '-'
                       + this.add0(time.getDate()) + ' '
                       + this.add0(time.getHours()) + ':'
                       + this.add0(time.getMinutes());
        over.duration = this.add0(Math.floor(match.duration/60)) + ':'
                      + this.add0(match.duration%60);
        over.wincamp = match.IsradiantWin?"天辉":"夜魇";
        match.players.forEach(element => {
          element.herourl = '/static/images/heroes/heroicon/'+element.heroname+'_hphover.png';
          element.kda = element.kills + '/' + element.dies + '/' + element.assists;
          element.eqitems = new Array();
          element.backpack = new Array();
          for (let index = 0; index < 6; index++) {
            if(element.items[index]==null){
              element.eqitems.push('/static/images/common/blank.png');
            }else{
              element.eqitems.push('/static/images/items/'+ element.items[index] +'.png');
            }
          }
          for (let index = 6; index < 9; index++) {
            if(element.items[index]==null){
              element.backpack.push('/static/images/common/blank.png');
            }else{
              element.backpack.push('/static/images/items/'+ element.items[index] +'.png');
            }
          }
        });
        this.radiantplayers = match.players.slice(0,5);
        this.direplayers = match.players.slice(5,10);
        over.id = this.matchid;
        this.matches.push(over);
      }else{
        alert("出错了")
      }
    });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .overview{
      background-color: black;
      width: 80%;
      top: 0px;
      height: 100%;
      color: #c0c0c0;
    }
    .overtable{
      margin-top: 20px;
      margin-bottom: 20px;
    }
    a {
      color: #c0c0c0;
    }
    .replaylink{
     
      display: flex;
      justify-content: bottom;
    }
    .textrow{
      font-size: 200%;
      margin-bottom: 20px;
    }
    .itemicon{
      list-style:none;
      float: left;
      
    }
    .playerrow{
      margin-bottom: 20px;
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

