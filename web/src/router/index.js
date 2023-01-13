import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/error404/NotFound.vue"
import PkIndex from "../views/pk/PkIndex.vue"
import RankListIndex from "../views/ranklist/RankIndex.vue"
import RecordIndex from "../views/record/RecordIndex.vue"
import userBot from "../views/user/minebot/UserBot.vue"
const routes = [
  {
    path: "/404",
    name: "not_found",
    component: NotFound
  },
  {
    path: "/",
    name: "home",
    redirect: "/pk"
  },
  {
    path: "/pk",
    name: "pk_index",
    component: PkIndex
  },
  {
    path: "/ranklist",
    name: "ranklist_index",
    component: RankListIndex
  },
  {
    path: "/record",
    name: "record_index",
    component: RecordIndex
  },
  {
    path: "/user/bot",
    name: "user_bot",
    component: userBot
  },
  {
    path: "/:catchAll(.*)",//其他页面重定向至没有找到
    redirect: "/404"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
