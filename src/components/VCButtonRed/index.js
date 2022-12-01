import VCButtonRed from './VCButtonRed.vue'

export default {
  // Этот метод будет вызываться с конструктором Vue в качестве первого аргумента, 
  // и с дополнительными опциями плагина в качестве второго
  install(vue) {
    // Регистрирует глобальный компонент или возвращает уже зарегистрированный
    vue.component(VCButtonRed.name, VCButtonRed)
  }
}

export {
  VCButtonRed
}