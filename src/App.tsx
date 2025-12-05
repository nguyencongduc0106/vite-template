import TanstackQueryProvider from "./providers/ts-query.provider"
import TanstackRouterProvider from "./providers/ts-router.provider"

const App = () => {
  return (
    <TanstackQueryProvider>
      <TanstackRouterProvider />
    </TanstackQueryProvider>
  )
}

export default App
