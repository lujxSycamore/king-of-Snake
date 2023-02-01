<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="#">King of Snake</a>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link 
          :class="current_router == 'pk_index' ? 'nav-link active' : 'nav-link'" 
          :to="{name: 'pk_index'}">对战</router-link>
        </li>
        <li class="nav-item">
          <router-link 
          :class="current_router == 'record_index' ? 'nav-link active' : 'nav-link'" 
          :to="{name: 'record_index'}">对局列表</router-link>
        </li>
        <li class="nav-item">
          <router-link 
          :class="current_router == 'ranklist_index' ? 'nav-link active' : 'nav-link'" 
          :to="{name: 'ranklist_index'}">排行榜</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            username here
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" :to="{name: 'user_bot'}">我的蛇</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">退出</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { useRoute } from "vue-router"
import { computed } from "vue"
export default {
  setup(){
    const router = useRoute();
    let current_router = computed(()=>router.name) //获取当前用户处于哪一页
    /* console.log() */
    return{
      current_router
    }
  }
}
</script>

<style scope>
.navbar{
  background-color: #409EFF;

}
</style>

  
