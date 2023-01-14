<template>
    <NavBar></NavBar>
    <router-view></router-view>
</template>
<script>
/* import { ref } from "vue" //vue创建变量需要引入
import $ from "jquery" //$代表jQuery 回传函数 */
import NavBar from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
export default {
  name: "APP",
  components:{
    NavBar
  }
}
</script>

<style>
body{
  background-image: url("./assets//images/background2.png");
  background-size: cover;
}
</style>
