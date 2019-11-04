<template>
  <div class="text">
    <h2 :style="styles">{{attribute.title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'text',
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
