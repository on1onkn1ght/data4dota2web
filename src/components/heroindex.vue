<template>
  <div class="heroindex">
   
    <el-row class="heroBioPanel">
      <div class="heroname" v-html="heroName"></div>
      <hr>
      <div class="roles">{{roles}}</div>
    </el-row>
    <el-row  class="heroselector" :gutter="10">
      <el-col :span="7" :offset="2">
        <el-select v-model="form.typeId" placeholder="定位" @change="changet">
          <el-option v-for="item in allroles"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        
      </el-col>
      <el-col :span="7">
        <el-select v-model="form1.typeId" placeholder="攻击类型" @change="change">
          <el-option v-for="item in alltypes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        
      </el-col>
      <el-col :span="7">
        <el-input v-model="heroname" placeholder="英雄名称" class="nametext"></el-input>
        <el-button  @click="seachname">搜索</el-button>
      </el-col>

    </el-row>
    <el-row class="heroIconPanel" :gutter="10">
      <el-col :span="7" :offset="2"  class="heroIconCol">
        <img src="/static/images/heroes/attribute/overviewicon_str.png" >
        <span class="heroattritext">力量</span>
      </el-col>
      <el-col :span="7" class="heroIconCol">
        <img src="/static/images/heroes/attribute/overviewicon_agi.png" >
        <span class="heroattritext">敏捷</span>
      </el-col>
      <el-col :span="7" class="heroIconCol">
        <img src="/static/images/heroes/attribute/overviewicon_int.png" >
        <span class="heroattritext">智力</span>
      </el-col>
    </el-row>

    <el-row class="heroCamp" :gutter="10" >
      <el-col :span="1" :offset="1"  class="heroCampCol">
        <img src="/static/images/heroes/camp/radiant.jpg" height="31px" width="29px">
      </el-col>
      <el-col :span="7" class="heropanelcol">
        <ul class="heroUl">
          <li v-for="herov in radiantstr" :key="herov.hero.hero_id" class="heroLi" 
          @mouseenter="myhover(herov.hero.name_cn,herov.hero.roles,herov.hero.attack_type)">
                <router-link :to="herov.heroURL" >                
                <img :src="herov.imgUrlHp" class="iconHp">   
                <img :src="herov.imgUrlSb" class="iconsb" :id="herov.hero.hero_id">
                </router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="7" class="heropanelcol">
        <ul class="heroUl">
          <li v-for="herov in radiantagi" :key="herov.hero.hero_id" class="heroLi" 
          @mouseenter="myhover(herov.hero.name_cn,herov.hero.roles,herov.hero.attack_type)" >
            <router-link :to="herov.heroURL" >        
            <img :src="herov.imgUrlHp" class="iconHp">  
            <img :src="herov.imgUrlSb" class="iconsb" :id="herov.hero.hero_id">
            </router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="7" class="heropanelcol">
        <ul class="heroUl">
          <li v-for="herov in radiantint" :key="herov.hero.hero_id" class="heroLi" 
          @mouseenter="myhover(herov.hero.name_cn,herov.hero.roles,herov.hero.attack_type)">
            <router-link :to="herov.heroURL" >
            <img :src="herov.imgUrlHp" class="iconHp">           
            <img :src="herov.imgUrlSb" class="iconsb" :id="herov.hero.hero_id">
            </router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row class="heroCamp" :gutter="10" >
      <el-col :span="1" :offset="1"  class="heroCampCol">
        <img src="/static/images/heroes/camp/dire.jpg" height="31px" width="29px">
      </el-col>
      <el-col :span="7" class="heropanelcol">
        <ul class="heroUl">
          <li v-for="herov in direstr" :key="herov.hero.hero_id" class="heroLi" 
          @mouseenter="myhover(herov.hero.name_cn,herov.hero.roles,herov.hero.attack_type)">
            <router-link :to="herov.heroURL" > 
              <img :src="herov.imgUrlHp" class="iconHp">                   
              <img :src="herov.imgUrlSb" class="iconsb" :id="herov.hero.hero_id">
            </router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="7" class="heropanelcol">
        <ul class="heroUl">
          <li v-for="herov in direagi" :key="herov.hero.hero_id" class="heroLi" 
          @mouseenter="myhover(herov.hero.name_cn,herov.hero.roles,herov.hero.attack_type)">
            <router-link :to="herov.heroURL" >
              <img :src="herov.imgUrlHp" class="iconHp">                    
              <img :src="herov.imgUrlSb" class="iconsb" :id="herov.hero.hero_id">
            </router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="7" class="heropanelcol">
        <ul class="heroUl">
          <li v-for="herov in direint" :key="herov.hero.hero_id" class="heroLi" 
          @mouseenter="myhover(herov.hero.name_cn,herov.hero.roles,herov.hero.attack_type)">
            <router-link :to="herov.heroURL" >       
              <img :src="herov.imgUrlHp" class="iconHp">             
              <img :src="herov.imgUrlSb" class="iconsb" :id="herov.hero.hero_id">
            </router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
      
  </div>
 
</template>

<script>
export default {
  name: 'heroindex',
  data () {
    return {
      heroName: '&#12288',
      roles:'',
      herorole:'',
      allroles: [{
          value: '',
          label: '定位（所有）'
        }, {
          value: '核心',
          label: '核心'
        }, {
          value: '控制',
          label: '控制'
        }, {
          value: '先手',
          label: '先手'
        }, {
          value: '打野',
          label: '打野'
        }, {
          value: '辅助',
          label: '辅助'
        }, {
          value: '耐久',
          label: '耐久'
        }, {
          value: '爆发',
          label: '爆发'
        }, {
          value: '推进',
          label: '推进'
        }, {
          value: '逃生',
          label: '逃生'
        }],
       
        alltypes:[{
          value: '',
          label: '攻击类型（所有）'
        },{
          value: '近战',
          label: '近战'
        },{
          value: '远程',
          label: '远程'
        }],
        attacktype:'',
        heroname:'',
        radiantstr:[],
        radiantagi:[],
        radiantint:[],
        direstr:[],
        direagi:[],
        direint:[],
        myheroes:[],
        form:{
          typeId:''
        },
        form1:{
          typeId:''
        },
    }
  },
  methods:{
    myhover(name,role,type){
      this.heroName = name;
      this.roles = type+ ' - ' + role;
    },
    change(){
       this.myheroes.forEach(element => {
        if(element.attack_type.indexOf(this.form1.typeId)<0||element.roles.indexOf(this.form.typeId)<0){
          
          document.getElementById(element.hero_id).style.opacity = 0.3;
        }else{
          document.getElementById(element.hero_id).style.opacity = 1;
        }
      });
    },
    changet(){
        this.myheroes.forEach(element => {
        if(element.attack_type.indexOf(this.form1.typeId)<0||element.roles.indexOf(this.form.typeId)<0){
          
          document.getElementById(element.hero_id).style.opacity = 0.3;
        }else{
          document.getElementById(element.hero_id).style.opacity = 1;
        }
      });
    },
    seachname(){
      this.myheroes.forEach(element => {
        if(element.name_cn.indexOf(this.heroname)<0){
          
          document.getElementById(element.hero_id).style.opacity = 0.3;
        }else{
          document.getElementById(element.hero_id).style.opacity = 1;
        }
      });
    },
  },
  created:function(){
    this.$axios
      .get("/heroes/index").then((res)=>{
        if(res.data.code==0){
          this.myheroes = res.data.data;
          this.myheroes.forEach(hero => {
            var heroview = new Object();
            heroview.hero = hero;
            heroview.flag = false;
            heroview.heroURL = '/hero/'+hero.name_en;
            heroview.imgUrlHp = '/static/images/heroes/heroicon/'+hero.name_en+'_hphover.png';
            heroview.imgUrlSb = '/static/images/heroes/heroicon/'+hero.name_en+'_sb.png';
            console.log(heroview.imgUrl);
            if(hero.camp==="天辉"){
              if(hero.primary_attr==="力量"){
                this.radiantstr.push(heroview);
              }else if(hero.primary_attr==="敏捷"){
                this.radiantagi.push(heroview);
              }else if(hero.primary_attr==="智力"){
                this.radiantint.push(heroview);
              }
            }else if(hero.camp==="夜魇"){
              if(hero.primary_attr==="力量"){
                this.direstr.push(heroview);
              }else if(hero.primary_attr==="敏捷"){
                this.direagi.push(heroview);
              }else if(hero.primary_attr==="智力"){
                this.direint.push(heroview);
              }
            }
          });
        }else{
          alert("出错了")
        }
      })
  },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .heroindex{
      background-color: black;
      width: 80%;
      top: 0px;
      height: 850px;
      color: #c0c0c0;
    }
    .nametext{
      width: 60%;
    }
    .heroselector .el-col{
      display: flex;
      justify-content: center;
    }
    .heroBioPanel{
      text-align: center;
      width: 80%;
      margin: 0 auto;
      height: 150px;
    }
    .heroname{
      font-size: 400%;
    }
    .roles{
      font-size: 200%;
    }
    .heroIconCol{
      display: flex;
      justify-content: center;
      align-content: center;
    }
    .heroattritext{
      margin-left: 2px;
      line-height: 33px;
      font-size: 120%;
    }
    .heroIconPanel{
      margin-top: 20px;

    }
    .heroCamp{
      margin-top: 20px;
    }
   
    .heropanelcol{
      display: flex;
      align-content: center;
      justify-content: center;
    }
    .heroCampCol{
      display: flex;
      align-content: center;
      
    }
    .heroUl{
      width: 276px;
    }
    .heroLi{
      width: 69px;
      height: 44px;
      float: left;
      position: relative;
      list-style:none;
    }
    .heroLi :hover .iconHp{
      display: block;
    }
    .iconHp{
      z-index: 2;
      display: none;
      position: absolute;
      top: -19px;
      left: -34px;
    }
    
    .iconsb{
      width: 59px;;
      height: 33px;
      border: 4px solid black;
      z-index: 1;
    }
    .mask{
      z-index: 5;
      position: absolute;
      background: #000;
      opacity: 0.3;
      width: 67;
      height: 41;
      top: 0;
      left: 0;
    }
</style>
<style>
  .heroselector .el-select .el-input__inner{
    background-color: #212121 !important;
    border-color:  black !important;
    color: white !important;
  }
  .heroselector .el-input .el-input__inner{
    background-color: #212121 !important;
    border-color:  black !important;
    color: white !important;
  }
  .heroselector .el-button {
    background-color: #212121 !important;
    border-color:  black !important;
    color: white !important;
  }
  
</style>

