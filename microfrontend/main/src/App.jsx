import React, {Suspense} from "react"
const ImagenApp = React.lazy(() => import('imagenApp/ImagenApp'))
const WebApp = React.lazy(() => import('webApp/WebApp'))

function App() {
  return (
    <>
      <div>
        <Suspense fallback="Cargando...">
          <ImagenApp />
        </Suspense>    
      </div>

      <div>
        <Suspense fallback="Cargando 1...">
          <WebApp />
        </Suspense>    
      </div>
    </>
  )
}

export default App
