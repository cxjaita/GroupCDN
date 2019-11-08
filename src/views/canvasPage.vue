<template>
  <div class="canvasPage">
    <component
      :is="item.component"
      :attribute="item.attribute"
      :data="item.data"
      :style="item.styles"
      v-for="(item, index) in assembly"
      :key="index"
    ></component>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "canvasPage",
  data() {
    return {};
  },
  props: {
    data: null,
    styles: null
  },
  methods: {},
  components: {},
  computed: {
    ...mapState(["assembly"])
  },
  watch: {
    assembly(val) {
      for (let i = 0; i < val.length; i++) {
        console.log("@/components/" + val[i].component.name + ".vue");
        const element = () =>
          import("@/components/" + val[i].component.name + ".vue");
      }
    }
  }
};
// styles = {样式}
// data = {属性值 url}
</script>

<style lang="less" scoped>
.canvasPage {
  width: 60vw;
  height: 90vh;
  margin: 5vh 5vw;
  border: 1px solid #e2e2e2;
}
</style>
