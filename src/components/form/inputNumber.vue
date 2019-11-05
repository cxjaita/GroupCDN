<template>
  <el-input-number v-model="num" @change="handleChange" :min="data.min" :max="data.max" :style="styles" :label="data.label" :step="data.step || 1" @blur="onblur"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 0
      };
    },
    props: {
      data: null,
      styles: null
    },
    methods: {
      handleChange(value) {
        console.log(value);
        this.$emit('inputNumberChange', value)
      },
      onblur (e) {
        console.log(e, this.num);
        this.$emit('inputNumberBlur', this.num)
      }
    }
  };
// data: {
//   min: 0,
//   max: 10,
//   label: '描述文字'
// }

// styles = json 属性
</script>

<style lang="less"></style>