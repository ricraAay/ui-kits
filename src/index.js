
import * as components from './components'

const VCLibrary = {
  install(app) {
    // Auto import all components
    for (const componentKey in components) {
        app.use((components)[componentKey])
    }
  }
}

export default VCLibrary

// export all components as vue plugin
export * from './components'
