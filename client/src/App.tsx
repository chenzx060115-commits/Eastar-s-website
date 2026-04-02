import { Route, Switch, Router } from 'wouter'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

// 获取 base 路径
const basePath = import.meta.env.BASE_URL

function AppRouter() {
  return (
    <Router base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <AppRouter />
    </div>
  )
}

export default App
