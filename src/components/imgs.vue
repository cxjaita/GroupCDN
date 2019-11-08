<template>
  <div class="imgs">
    <img :src="data && data.url" :style="styles" />
  </div>
</template>

<script>
export default {
  name: "imgs",
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
// data = {属性值 url}
</script>

<style lang="less" scoped></style>
