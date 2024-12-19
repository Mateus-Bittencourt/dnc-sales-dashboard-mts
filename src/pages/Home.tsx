import { CardComponent, Header } from '@/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">Card</CardComponent>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
