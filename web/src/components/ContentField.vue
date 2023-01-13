<template>
  <div class="container content_field">
    <div class="card">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //<slot></slot>为插槽位置 组件标签文字入口
}
</script>

<style scoped>
.content_field{
  margin-top: 20px;
}
</style>