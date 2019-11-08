<template>
  <div class="tabs">
    <el-tabs type="border-card" :style="styles">
      <el-tab-pane
        :label="item.label"
        v-for="(item, index) in data"
        :key="index"
      >
        <component
          :is="item.component || null"
          :attribute="item.attribute"
          :data="item.data"
          :style="item.styles"
        ></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "tabs",
  data() {
    return {};
  },
  props: {
    data: null,
    styles: null
  },
  methods: {},
  components: {},
  watch: {
    data(val) {
      for (let i = 0; i < val.length; i++) {
        const e = val[i].component;
        const element = () =>
          import("@/components/" + val[i].component + ".vue");
        this.components(String(e), {
          template: element
        });
      }
    }
  }
};
// styles = {样式}
// datas: [
//   {
//     label: "页面",
//     component: input,
//     attribute: { placeholder: "提示语" }
//   },
//   { label: "组件", component: list }
// ]
// label = 标签名  component = 组件对象， attribute = 传入子组件的参数
</script>

<style lang="less" scoped>
.el-tabs {
  height: 100%;
}
</style>
