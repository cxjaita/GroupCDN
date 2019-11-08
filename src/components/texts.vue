<template>
  <div class="texts">
    <h2 :style="styles">{{ (data && data.title) || "默认文字" }}</h2>
  </div>
</template>

<script>
export default {
  name: "texts",
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
// data = {属性值 title}
</script>

<style lang="less" scoped></style>
