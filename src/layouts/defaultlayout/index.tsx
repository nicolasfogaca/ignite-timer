import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { LayoutContainer } from './styles'

// Para evitar de colocar elementos que se repetem na paginas foi criada esse arquivo onde oq vai mudar é o "outlet" que
// faz a função de exibir as diferentes rotas e não tendo a necessidade de colocar o "Header" em todas as paginas

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
