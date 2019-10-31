<template>
  <div class="form_input">
    <el-input v-model="value" :placeholder="attribute && attribute.placeholder" @change="input_change" @blur="input_blur" @focus="input_focus" :style="styles">
      <i :slot="attribute && attribute.slot" class="el-input__icon" :class="attribute && attribute.icon" v-if="attribute && attribute.icon"></i>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'form_input',
  data() {
    return {};
  },
  props: {
    value: null,
    attribute: null,
    styles: null
  },
  methods: {
    // 值改变触发
    input_change () {
      console.log(this.value)
      this.$emit('input_change', this.value)
    },
    // 是去焦点触发
    input_blur () {
      console.log(this.value)
      this.$emit('input_blur', this.value)
    },
    // 得到焦点触发
    input_focus () {
      console.log(this.value)
      this.$emit('input_focus', this.value)
    }
  },
};

// attribute: {
//   placeholder: '提示语',
//   slot: 'icon位置（前 prefix，后 suffix）',
//   icon: 'icon类名',
// }

</script>

<style lang="less"></style>
