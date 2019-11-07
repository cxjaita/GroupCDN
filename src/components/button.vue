<template>
  <div class="button">
    <el-button :style="styles">{{ data.value }}</el-button>
  </div>
</template>

<script>
export default {
  name: "button",
  data() {
    return {};
  },
  props: {
    data: null,
    styles: null
  },
  methods: {}
};
// styles = {样式}
// data = {属性值 value}
</script>

<style lang="less"></style>
