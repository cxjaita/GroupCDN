<template>
  <div class="form_select">
    <el-select
      v-model="value"
      :placeholder="attribute && attribute.placeholder"
      :style="styles"
      :multiple="attribute && attribute.multiple"
      :disabled="attribute && attribute.disabled"
      @change="select_change"
    >
      <el-option
        v-for="item in data"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "form_select",
  data() {
    return {};
  },
  props: {
    value: null,
    data: null,
    attribute: null,
    styles: null
  },
  methods: {
    // 选中值改变
    select_change() {
      this.$emit("select_change", this.value);
    }
  }
};

// attribute: {
//   placeholder: '提示语',
//   multiple: true(是否多选),
//   disabled: false(是否禁用),
// }
</script>

<style lang="less"></style>
