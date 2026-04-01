import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Router />
    </div>
  )
}

export default App
