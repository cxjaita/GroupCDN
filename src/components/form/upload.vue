<template>
  <div class="upload">
    <el-upload :action="data.url" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :style="styles">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
    };
  },
  props: {
    data: null,
    styles: null,
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
// styles = {样式}
// data = {属性值 url}
</script>

<style lang="less"></style>
