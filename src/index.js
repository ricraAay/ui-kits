
import * as components from './components'

const VCLibrary = {
  install(app) {
    // Авто импорт всех компонентов
    Object
      .keys(components)
      .forEach(name => app.use(components[name]))
  }
}

export default VCLibrary

// Экспорт всех компонентов
export * from './components'
