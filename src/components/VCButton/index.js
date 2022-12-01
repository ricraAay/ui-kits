import VCButton from './VCButton.vue'

export default {
  // Плагин Vue.js должен содержать метод install
  // этот метод будет вызываться с конструктором Vue в качестве первого аргумента, 
  // и с дополнительными опциями плагина в качестве второго
  install(vue) {
    // Регистрирует глобальный компонент или возвращает уже зарегистрированный
    vue.component(VCButton.name, VCButton)
  }
}

export {
  VCButton
}