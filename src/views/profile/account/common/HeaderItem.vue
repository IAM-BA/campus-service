<template>
  <div>
    <div class="shandow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShadowBox"
  }
</script>

<style scoped>
  .shandow{
    box-shadow: 1px 2px 3px 4px color(f0f0f0);
  }
</style>
