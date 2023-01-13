<template>

  <div>name: {{bot_name}}</div>
  <div>rank: {{bot_rank}}</div>
  <router-view></router-view>
</template>
<script>
import { ref } from "vue" //vue创建变量需要引入
import $ from "jquery" //$代表jQuery 回传函数

export default {
  name: "APP",
  setup(){
    let bot_name = ref("");
    let bot_rank = ref("");
    $.ajax({
      url: "http://localhost:3000/pk/botInfo/", //url只能小写,需要解决跨域问题
      type: "get",
      success: response =>{
        console.log(response);
        bot_name.value = response[0].name;
        bot_rank.value = response[0].rank;
      }
    })
    return{
      bot_name,
      bot_rank
    }
  }
}
</script>

<style>
body{
  background-image: url("./assets/background.png");
  background-size: cover;
}


</style>
