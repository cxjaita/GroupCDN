<template>
  <div class="img">
    <img :src="attribute.url" :style="styles">
  </div>
</template>

<script>
export default {
  name: 'img',
  data() {
    return {};
  },
  props: {
    attribute: null,
    styles: null
  },
  methods: {
  },
};

</script>

<style lang="less"></style>
