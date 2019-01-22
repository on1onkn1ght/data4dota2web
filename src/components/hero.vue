<template>
  <div class="heroMain">
    <el-row class="textrow">
      <h1>英雄详情</h1>
    </el-row>
    <el-row class="heroAttriPanel">
      <el-col :span="4" :offset="2">
        <img :src="heroIconUrl">
      </el-col>
      <el-col :span="16">
        <div class="nametext">
          <h2>{{heroname}} [等级{{level}}]</h2>
        </div>
        <div class="attritext">
          <img src="/static/images/heroes/attribute/overviewicon_str.png" class="attriimg">
          <div class="attrinum">{{strnum}}</div>
        </div>
        <div class="attritext">
          <img src="/static/images/heroes/attribute/overviewicon_agi.png" class="attriimg">
          <div class="attrinum">{{aginum}}</div>
        </div>
        <div class="attritext">
          <img src="/static/images/heroes/attribute/overviewicon_int.png" class="attriimg">
          <div class="attrinum">{{intnum}}</div>
        </div>
      </el-col>
    </el-row>
    <el-row class="talenttext">
      <el-col :span="12" :offset="2">
        <div class="itemtext">简介</div>
      </el-col>
    </el-row>
    <el-row class="talenttext">
      <el-col :span="20" :offset="2">
        <div>&#12288; &#12288;{{hero.description}}</div>
      </el-col>
    </el-row>
    <el-row class="talenttext">
      <el-col :span="12" :offset="2">
        <div class="itemtext">属性</div>
      </el-col>
    </el-row>
    <el-row class="detailnumrow">
      <el-col :span="2" :offset="2" class="detailnumcol">
        <h5>攻击力</h5>
        <h5>{{attackpower}}</h5>
      </el-col>
      <el-col :span="2" class="detailnumcol">
        <h5>技能增强</h5>
        <h5>{{magicpower}}%</h5>
      </el-col>
      <el-col :span="2" class="detailnumcol">
        <h5>护甲</h5>
        <h5>{{armor}}</h5>
      </el-col>
      <el-col :span="2" class="detailnumcol">
        <h5>魔法抗性</h5>
        <h5>{{magicresis}}%</h5>
      </el-col>
      <el-col :span="2" class="detailnumcol">
        <h5>攻击速度</h5>
        <h5>{{attackspeed}}</h5>
      </el-col>
      <el-col :span="2" class="detailnumcol">
        <h5>移动速度</h5>
        <h5>{{movespeed}}</h5>
      </el-col>
      <el-col :span="2" class="detailnumcol">
        <h5>生命值</h5>
        <h5>{{hp}}</h5>
      </el-col>
      <el-col :span="2" class="detailnumcol">
        <h5>魔法值</h5>
        <h5>{{mp}}</h5>
      </el-col>
    </el-row>
    <el-row>
      <div class="block">
        <span class="demonstration">等级</span>
        <el-slider v-model="level" :min="1" :max="25"></el-slider>
      </div>
    </el-row>
    <el-row class="itemrow">
      <el-col :span="2" :offset="2" class="itemtextcol">
        <div class="itemtext">装备栏</div>
      </el-col>
      <el-col :span="2" class="itemcol" v-for="index in 6" :key="index">
        <img
          src="/static/images/common/blank.png"
          :id="'icon'+index"
          class="itemIcon"
          @click="showItemSelector(index)"
          v-show="!itemflag[index]"
        >
        <img
          src="/static/images/common/blank.png"
          :id="'i'+index"
          class="itemIcon"
          @click="cancel(index)"
          v-show="itemflag[index]"
        >
      </el-col>
    </el-row>
    <el-row class="talenttext">
      <el-col :span="12" :offset="2">
        <div class="itemtext">天赋树</div>
      </el-col>
    </el-row>
    <el-row class="talentTree">
      <el-col :span="9" :offset="2" class="talentcol">
        <div class="talentexplain left">{{talents[0]}}</div>
      </el-col>
      <el-col :span="2" class="talentlevel">25</el-col>
      <el-col :span="9" class="talentcol">
        <div class="talentexplain right">{{talents[1]}}</div>
      </el-col>
    </el-row>
    <el-row class="talentTree">
      <el-col :span="9" :offset="2" class="talentcol">
        <div class="talentexplain left">{{talents[2]}}</div>
      </el-col>
      <el-col :span="2" class="talentlevel">20</el-col>
      <el-col :span="9" class="talentcol">
        <div class="talentexplain right">{{talents[3]}}</div>
      </el-col>
    </el-row>
    <el-row class="talentTree">
      <el-col :span="9" :offset="2" class="talentcol">
        <div class="talentexplain left">{{talents[4]}}</div>
      </el-col>
      <el-col :span="2" class="talentlevel">15</el-col>
      <el-col :span="9" class="talentcol">
        <div class="talentexplain right">{{talents[5]}}</div>
      </el-col>
    </el-row>
    <el-row class="talentTree">
      <el-col :span="9" :offset="2" class="talentcol">
        <div class="talentexplain left">{{talents[6]}}</div>
      </el-col>
      <el-col :span="2" class="talentlevel">5</el-col>
      <el-col :span="9" class="talentcol">
        <div class="talentexplain right">{{talents[7]}}</div>
      </el-col>
    </el-row>
    <el-row class="talenttext">
      <el-col :span="12" :offset="2">
        <div class="itemtext">技能</div>
      </el-col>
    </el-row>
    <el-row class="skills">
      <el-col :span="20" :offset="2">
        <el-tabs type="border-card">
          <el-tab-pane
            v-for="item in skills"
            :key="item.skill_id"
            :label="item.name_cn"
            :name="item.name_en"
          >
            <skill :myskill="item"/>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-dialog title="选择一件装备" :visible.sync="itemselectflag" width="60%">
      <itemselect @putpicktm="putpick" @closeselectortm="closeselector" :index="selecterindex"/>
    </el-dialog>
  </div>
</template>

<script>
import skill from "@/components/skill";
import itemselect from "@/components/itemselect";
export default {
  name: "hero",
  props: ["name"],
  components: { skill, itemselect },
  data() {
    return {
      heroIconUrl: "",
      level: 1,
      heroname: "",
      strnum: 0,
      aginum: 0,
      intnum: 0,
      attackpower: 0,
      armor: 0,
      movespeed: 0,
      movespeedmul: 0,
      attackspeed: 0,
      hp: 0,
      mp: 0,
      magicresis: 25,
      magicpower: 0,
      levelstr: 0,
      levelagi: 0,
	  levelint: 0,
	  istrnum: 0,
      iaginum: 0,
	  iintnum: 0,
	  iattackpower: 0,
      iarmor: 0,
      imovespeedmul: 0,
      iattackspeed: 0,
      ihp: 0,
      imp: 0,
      imagicresis: 25,
      imagicpower: 0,
      primary: "",
      hero: new Object(),
      talents: [],
      skills: [],
      itemselectflag: false,
      selecterindex: "",
      itemflag: [],
      items: []
    };
  },
  methods: {
    showItemSelector(index) {
      this.itemselectflag = true;
      this.selecterindex = index;
    },
    closeselector() {
      this.itemselectflag = false;
    },
    putpick(id, idx) {
      var index = "i" + idx;
      var url = "/items/item?id=" + id;

      this.itemflag[idx] = true;
      this.$axios.get(url).then(res => {
        var item = res.data.data;
        this.items[idx] = item;
        var src = "/static/images/items/" + item.name_en + ".png";
        document.getElementById(index).src = src;

        this.istrnum += item.str;
        this.iintnum += item.intl;
		this.iaginum += item.agi;

		this.ihp += item.hp;
		this.imp += item.mp;
		this.iarmor += item.armor;
		this.iattackspeed += item.attack_speed;
		this.imovespeedmul += item.move_speed/100;
		this.imagicresis += item.magic_resis;
		this.imagicpower += item.magic_power;
		this.iattackpower += item.attack_power;
		this.cal(this.level);
      });
    },
    cancel(index) {
	  this.$set(this.itemflag, index, false);
	  	var item = this.items[index];
	   this.istrnum -= item.str;
        this.iintnum -= item.intl;
		this.iaginum -= item.agi;

		this.ihp -= item.hp;
		this.imp -= item.mp;
		this.iarmor -= item.armor;
		this.iattackspeed -= item.attack_speed;
		this.imovespeedmul -= item.move_speed/100;
		this.imagicresis -= item.magic_resis;
		this.imagicpower -= item.magic_power;
		this.iattackpower -= item.attack_power;
		this.cal(this.level);
    },
    stradd(num) {
      var res = new Object();
      res.hp = num * 18;
      return res;
    },
    agiadd(num) {
      var res = new Object();
      res.armor = num * 0.16;
      res.attackspeed = num * 1;
      res.movespeedmul = num * 0.00005;
      return res;
    },
    intadd(num) {
      var res = new Object();
      res.mp = num * 12;
      res.magicpower = num * 0.07;
      return res;
	},
	cal(level){
	  this.strnum = (this.level - 1) * this.levelstr + this.istrnum+ this.hero.init_str;
      this.aginum = (this.level - 1) * this.levelagi + this.iaginum+ this.hero.init_agi;
      this.intnum = (this.level - 1) * this.levelint + this.iintnum+ this.hero.init_intl;
      this.strnum = this.strnum.toFixed(1);
      this.aginum = this.aginum.toFixed(1);
      this.intnum = this.intnum.toFixed(1);
      var str = (this.level - 1) * this.levelstr + this.istrnum;
      var agi = (this.level - 1) * this.levelagi + this.iaginum;
      var int = (this.level - 1) * this.levelint + this.iintnum;
      if (this.primary === "力量") {
        this.attackpower = (
          str +this.iattackpower + this.hero.init_attack_power	
        ).toFixed(0);
        str = str * 1.25;
      } else if (this.primary === "敏捷") {
        this.attackpower = (
          agi +this.iattackpower+ this.hero.init_attack_power		
        ).toFixed(0);
        agi = agi * 1.25;
      } else if (this.primary === "智力") {
        this.attackpower = (
          int +this.iattackpower+ this.hero.init_attack_power		
        ).toFixed(0);
        int = int * 1.25;
      }
      this.hp = (
        this.stradd(str).hp + this.ihp + this.hero.init_hp
      ).toFixed(0);
      this.mp = (
        this.intadd(int).mp + this.imp + this.hero.init_mp
      ).toFixed(0);
      this.armor = (
        this.agiadd(agi).armor + this.iarmor +this.hero.init_armor
      ).toFixed(0);
      this.attackspeed = (
        this.agiadd(agi).attackspeed + this.iattackpower +
        this.hero.init_attack_speed
      ).toFixed(0);
      this.movespeedmul =
        this.agiadd(agi).movespeedmul  + this.imovespeedmul;
      this.movespeed = ((this.movespeedmul+1) * this.hero.init_move_speed).toFixed(0);
      this.magicpower = (this.intadd(int).magicpower+this.imagicpower).toFixed(2);
	  this.magicresis =  this.imagicresis;
	},
  },
  watch: {
    level(val) {
		this.cal(this.level);
	}
  },
  created: function() {
    this.itemflag = new Array(7);
    this.itemflag.fill(false);
    this.items = new Array(7);
    var url = "/heroes/hero?name=" + this.name;
    this.$axios.get(url).then(res => {
      if (res.data.code == 0) {
        this.hero = res.data.data;
        console.log(this.hero);
        this.heroIconUrl =
          "/static/images/heroes/heroicon/" +
          this.hero.name_en +
          "_hphover.png";
        this.heroname = this.hero.name_cn;
        this.strnum = this.hero.init_str;
        this.aginum = this.hero.init_agi;
        this.intnum = this.hero.init_intl;
        this.attackpower = this.hero.init_attack_power;
        this.armor = this.hero.init_armor;
        this.movespeed = this.hero.init_move_speed;
        this.attackspeed = this.hero.init_attack_speed;
        this.hp = this.hero.init_hp;
        this.mp = this.hero.init_mp;
        this.ballspeed = this.hero.ball_speed;
        this.levelstr = this.hero.level_str;
        this.levelagi = this.hero.level_agi;
        this.levelint = this.hero.level_int;
        this.primary = this.hero.primary_attr;
        this.talents = this.hero.talents.split("#");
        this.skills = this.hero.skills;
        this.skills.forEach(element => {
          element.name_en = this.hero.name_en + "_" + element.name_en;
        });
      } else {
        alert("出错了");
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textrow {
  color: #c0c0c0;
  text-align: center;
  background-color: #2c3e50;
}
.heroMain {
  background-color: black;
  width: 80%;
  top: 0px;
  color: #c0c0c0;
}
.heroAttriPanel {
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
}
.heroAttriPanel .el-col {
  height: 100%;
}
.nametext {
  height: 35px;
}
.attritext {
  height: 40px;
  vertical-align: middle;
  font-size: 20px;
  float: left;
  padding-right: 20px;
}
.attriimg {
  height: 100%;
  float: left;
}
.attrinum {
  height: 40px;
  line-height: 40px;
  float: left;
  padding-left: 10px;
}
.detailnumrow {
  margin-bottom: 40px;
}
.detailnumcol {
  text-align: center;
  border: 1px solid grey;
  margin-right: 30px;
  background-color: #171717;
}
.block {
  width: 60%;
  margin: 0px auto;
  margin-bottom: 40px;
}
.itemrow {
  height: 68px;
  margin-bottom: 40px;
}
.itemtextcol {
  margin-right: 65px;
}
.itemcol {
  height: 68px;
  width: 85px;
  margin-right: 30px;
}
.itemIcon {
  border: 0px;
  height: 68px;
  width: 85px;
  border: 2px solid grey;
  background-color: #171717;
}
.itemtext {
  line-height: 68px;
  font-size: 150%;
}
.talenttext {
  margin-bottom: 10px;
}
.talentTree {
  height: 42px;
  margin-bottom: 10px;
}
.talentlevel {
  width: 42px;
  height: 42px;
  border-radius: 22px;
  line-height: 42px;
  background-color: #000;
  color: #e7d291;
  font-size: 18px;
  text-shadow: 0 0 5px #fd6a29, 0 0 5px #fd6a29;
  border: 2px solid #2c2f33;
  font-family: helvetica, arial, sans-serif;
  text-align: center;
}
.talentexplain {
  color: #c0c0c0;
  font-size: 14px;
  font-family: "微软雅黑", "宋体", Arial, Helvetica, sans-serif;
  width: 282px;
  height: 42px;
  line-height: 42px;
  background-color: #141517;

  text-align: center;
}
.left {
  float: right;
}
.el-tabs {
  border: 2px solid #2c2f33 !important;
  background-color: #171717 !important;
}
.el-tabs__header {
  background-color: #171717 !important;
}
.skills {
  margin-bottom: 20px;
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
  color: #c0c0c0 !important;
}
</style>

