<template>
  <button class="btn-style"
    :class="type ? 'button-' + type : ''">按钮</button>
</template>

<script>
export default {
  name: 'TestUiButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.btn-style {
  padding: 5px 10px;
  color: #333;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.btn-style+.btn-style {
    margin-left: 10px;
}
</style>
