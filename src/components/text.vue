<template>
  <div class="text">
    <h2 :style="styles">{{ data.title }}</h2>
  </div>
</template>

<script>
export default {
  name: "text",
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

<style lang="less"></style>
