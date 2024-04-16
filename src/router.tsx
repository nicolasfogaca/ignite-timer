import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { History } from './pages/history/index'
import { DefaultLayout } from './layouts/defaultlayout'

// Página aonde vão as diferentes rotas da aplicação

export function Router() {
  return (
    // 'Routes' é a tag que vou passar por volta das tags "Route" que são as rotas da minha aplicação SPA
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
