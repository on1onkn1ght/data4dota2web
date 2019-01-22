<template>
    <div class="matchdetail">
      <el-row class="textrow">
        <el-col :span="20" :offset="2">
          <div>
            录像分析
          </div>
        </el-col>
      </el-row>
      
      <el-row class="maprow">
        <el-col :span="5" :offset="2"> 
          <el-tabs tab-position="left" type="card">
            <el-tab-pane label="等级">
              <el-table :data="heroes[time]" >
                <el-table-column 
                prop="heroname" label="英雄" min-width="5%" >
                  <template slot-scope="scope">
                    <img :src="'/static/images/heroes/heroicon/'+ scope.row.heroname +'_sb.png'" height="30px">
                  </template>
                </el-table-column>
                <el-table-column 
                  prop="level"
                  label="等级"
                  min-width="7%">
                </el-table-column>
              </el-table>
              
            </el-tab-pane>
            <el-tab-pane label="经济">
              <el-table :data="heroes[time]" >
                <el-table-column 
                prop="heroname" label="英雄" min-width="5%" >
                  <template slot-scope="scope">
                    <img :src="'/static/images/heroes/heroicon/'+ scope.row.heroname +'_sb.png'" height="30px">
                  </template>
                </el-table-column>
                <el-table-column 
                  prop="gold"
                  label="经济"
                  min-width="7%">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="经验">
              <el-table :data="heroes[time]" >
                <el-table-column 
                prop="heroname" label="英雄" min-width="5%" >
                  <template slot-scope="scope">
                    <img :src="'/static/images/heroes/heroicon/'+ scope.row.heroname +'_sb.png'" height="30px">
                  </template>
                </el-table-column>
                <el-table-column 
                  prop="xp"
                  label="经验"
                  min-width="7%">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="K/D/A">
            <el-table :data="heroes[time]" >
                <el-table-column 
                prop="heroname" label="英雄" min-width="5%" >
                  <template slot-scope="scope">
                    <img :src="'/static/images/heroes/heroicon/'+ scope.row.heroname +'_sb.png'" height="30px">
                  </template>
                </el-table-column>
                <el-table-column 
                  prop="killes"
                  label="K/D/A"
                  min-width="7%">
                  <template slot-scope="scope">
                    <p>{{scope.row.killes}}/{{scope.row.dies}}/{{scope.row.assists}} </p>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="正/反补">
            <el-table :data="heroes[time]" >
                <el-table-column 
                prop="heroname" label="英雄" min-width="5%" >
                  <template slot-scope="scope">
                    <img :src="'/static/images/heroes/heroicon/'+ scope.row.heroname +'_sb.png'" height="30px">
                  </template>
                </el-table-column>
                <el-table-column 
                  prop="lastHit"
                  label="正/反补"
                  min-width="7%">
                  <template slot-scope="scope">
                    <p>{{scope.row.lastHit}}/{{scope.row.denies}}</p>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>

        </el-col>
        <el-col :span="13" :offset="2">
          <div class="map">
            <img src="/static/images/common/map.png" class="mapback" >
            <img v-for="(hero,index) in heroes[time]" 
            :key="index"
            :src="'/static/images/heroes/smallicon/'+hero.heroname+'_icon.png'"
            :style="{ position: 'absolute', left: (hero.position_x-50)/160*600 +'px', bottom: (hero.position_y-50)/160 *600 +'px', }"
            >
          </div>
          
          <div>
            <el-slider
              v-model="time"  :max="maxtime">
            </el-slider>
            <span >{{Math.floor(time/60)}}:{{time%60}}</span>
          </div>
        </el-col>
      </el-row>
       
    </div>
</template>

<script>
export default {
  name: 'matchdetail',
  props: ['matchid'],
  data(){
      return{
          match:null,
          time:0,
          maxtime:0,
          heroes:[],
      }
  },
 
   created: function(){
    var url = "/matches/detail?id="+this.matchid;
    this.$axios.get(url).then(res => {
      if(res.data.code==0){
        var matches = res.data.data;
        this.match = matches;
        this.maxtime = matches.length-1;
        matches.forEach(element => {
          this.heroes.push(element.heros);
        });
      }else{
        alert("出错了")
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .matchdetail{
      background-color: black;
      width: 80%;
      top: 0px;
      height: 100%;
      color: #c0c0c0 !important;
    }
     .textrow{
      margin-top: 20px;
      font-size: 200%;
      margin-bottom: 20px;
    }
    .maprow{
      margin-bottom: 20px;
    }
    .map{
      height: 600px;
      width: 600px;
      position: relative;
    }
    .mapback{
      height: 600px;
      width: 600px;
      position: relative;
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
  .el-input-number__decrease{
    background-color: #212121 !important;
    border-width: 0px !important;
  }
  .el-input-number__increase{
    background-color: #212121 !important;
    border-width: 0px !important;
  }
</style>
