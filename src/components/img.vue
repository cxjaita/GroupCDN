<template>
  <div class="img">
    <img :src="data.url" :style="styles" />
  </div>
</template>

<script>
export default {
  name: "img",
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

<style lang="less"></style>
