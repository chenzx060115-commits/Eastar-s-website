import { Route, Switch, useLocation } from 'wouter'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'

function Router() {
  // Get the base path from import.meta.env.BASE_URL (set by Vite)
  const basePath = import.meta.env.BASE_URL
  
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
