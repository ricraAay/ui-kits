
import * as components from './components'

const VCLibrary = {
  install(app) {
    // Авто импорт всех компонентов
    for (const componentKey in components) {
      app.use((components)[componentKey])
    }
  }
}

export default VCLibrary

// Экспорт всех компонентов
export * from './components'
