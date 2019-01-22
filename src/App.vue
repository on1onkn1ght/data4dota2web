<template>
  <el-container>
    <el-header >
      <Header/>
    </el-header>
    <el-main >
      <router-view></router-view>
    </el-main>
    <el-footer height="60">
      <Footer/>
    </el-footer>
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import heroindex from '@/components/heroindex'
import matchhistory from  '@/components/matchhistory'
import overview from '@/components/overview'
import matchdetail from '@/components/matchdetail'
export default {
  name: "App",
  data() {
    return{ msg:'abc'}
  },
  components:{Header,Footer,heroindex,matchhistory,overview,matchdetail},
  methods:{
    getData(){
     
      this.$axios
      .get("http://localhost:8080/heroes").then(function(res){
        console.log(res.data);
      })
      
    },
   }
};


</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.el-container{
  padding: 0,0,0,0;
}
.el-header{
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  min-height: 260px;
}
.el-main{
  background-color:#212121;
  display: flex;
  justify-content:center;


  height: auto;
  
}
.el-footer{
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  min-height: 100%;
  position: relative;
}
* {
    margin: 0;
    padding: 0;
}
</style>
