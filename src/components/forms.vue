<template>
  <div class="forms">
    <el-form ref="form" label-width="80px">
      <el-form-item
        :label="item.label"
        v-for="(item, index) in forms"
        :key="index"
      >
        <!-- 输入框 -->
        <el-input
          v-model="item.data"
          v-if="item.input"
          :placeholder="item.placeholder"
        ></el-input>
        <!-- 选择器 -->
        <el-select
          v-model="item.data"
          :placeholder="item.placeholder"
          v-if="item.select"
        >
          <el-option
            :label="i.label"
            :value="i.value"
            v-for="(i, idx) in item.options"
            :key="idx"
          ></el-option>
        </el-select>
        <!-- 日期选择器 -->
        <el-col :span="11" v-if="item.timestart">
          <el-date-picker
            type="date"
            :placeholder="item.placeholder1"
            v-model="item.data1"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2" v-if="item.timesnd">-</el-col>
        <el-col :span="11" v-if="item.timesnd">
          <el-date-picker
            type="date"
            :placeholder="item.placeholder2"
            v-model="item.data2"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <!-- 开关 -->
        <el-switch v-model="item.data" v-if="item.switch"></el-switch>
        <!-- 多选框 -->
        <el-checkbox-group v-model="item.data" v-if="item.checkbox">
          <el-checkbox
            :label="items.label"
            :name="items.namewe"
            v-for="(items, idex) in item.options"
            :key="idex"
          ></el-checkbox>
        </el-checkbox-group>
        <!-- 单选框 -->
        <el-radio-group v-model="item.data" v-if="item.radio">
          <el-radio
            :label="radioitem.label"
            v-for="(radioitem, radioindex) in item.options"
            :key="radioindex"
          ></el-radio>
        </el-radio-group>
        <!-- 多行文本框 -->
        <el-input
          type="textarea"
          v-model="item.data"
          v-if="item.textarea"
          :placeholder="item.placeholder"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "forms",
  data() {
    return {};
  },
  props: {
    forms: null
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.forms);
    }
  }
};
// 示例
// forms: [
//   输入框
//   {input: true, data: '输入框值', label: '姓名', placeholder: '请输入姓名'},
//   选择器
//   {select: true, data: '1', label: '年龄', placeholder: '请选择年龄', options: [
//     {label: '24岁', value: '1'},
//     {label: '25岁', value: '2'},
//   ]},
//   日期选择器
//   {timestart: true, timesnd: true, data1: '开始日期', data2:'结束日期', label: '时间选择', placeholder1: '请选择开始时间', placeholder2: '请选择结束时间'},
//   开关
//   {switch: true, data: 'true', label: '姓名'},
//   多选框
//   {checkbox: true, data: ['多选框值'], label: '人员性质', options: [
//     {label: '多选项1', name: 'type'},
//     {label: '多选项2', name: 'type'},
//     {label: '多选项3', name: 'type'},
//   ]},
//   单选框
//   {radio: true, data: '单选框值', label: '性别', options: [
//     {label: '选项1'},
//     {label: '选项2'},
//     {label: '选项3'},
//   ]},
//   多行文本框
//   {textarea: true, data: '多行文本框值', label: '个人描述', placeholder: '请输入描述信息'},
// ]
</script>
<style lang="less" scoped>
.line {
  text-align: center;
}
</style>
