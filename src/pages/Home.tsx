import { AvatarList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.5),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(1234.51),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(1234),
    },
  ]

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">Card</CardComponent>
        <CardComponent className="">
          <AvatarList listData={mockListData} />
        </CardComponent>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
