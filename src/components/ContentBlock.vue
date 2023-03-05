<template>
  <div class="block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "content-block",
};
</script>

<style scoped>
.block {
  width: calc(100% - 40px);
  padding: 0 20px;
}
</style>
