// 导入组件，组件必须声明 name
import TestUiButton from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
TestUiButton.install = function (Vue) {
  Vue.component(TestUiButton.name, TestUiButton)
}

export default TestUiButton
