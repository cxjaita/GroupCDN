<template>
  <div class="canvasPage" @dragover="onDragover($event)" @drop="onDrop($event)" @dragstart="onDragstart($event)" >
    <component
      draggable="true"
      class="component"
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
  methods: {
    onDragstart (e) {
      const className = e.target.className;
      const index = className.indexOf(' ')
      const name = className.slice(0, index)
      e.dataTransfer.setData("name",name);
    },
    onDrop (e) {
      let name = e.dataTransfer.getData("name");
      const obj = document.getElementsByClassName(name);
      const w = obj[0].offsetWidth;
      const h = obj[0].offsetHeight;
      obj[0].style.left = e.offsetX - (w/2) + 'px';
      obj[0].style.top = e.offsetY - (h/2) + 'px';
    },
    onDragover (event) {
      // 阻止元素的默认行为，不然ondrop不管用
      event.preventDefault()
    }
  },
  components: {},
  computed: {
    ...mapState(["assembly"])
  },
  watch: {
    assembly(val) {
      for (let i = 0; i < val.length; i++) {
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
  overflow: hidden;
  position: relative;
}
.component {
  position: absolute;
}
</style>
