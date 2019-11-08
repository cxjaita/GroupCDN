<template>
  <div class="buttons">
    <el-button :style="styles">{{ (data && data.name) || "按钮" }}</el-button>
  </div>
</template>

<script>
export default {
  name: "buttons",
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

<style lang="less" scoped></style>
