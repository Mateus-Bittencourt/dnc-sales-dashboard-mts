import { AvatarList, CardComponent, CustomTable, Header } from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [<span>Name 1</span>, <span>name1@gmail.com</span>, <button>Go!</button>],
      [<span>Name 2</span>, <span>name2@gmail.com</span>, <button>Go!</button>],
      [<span>Name 3</span>, <span>name3@gmail.com</span>, <button>Go!</button>],
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">Card</CardComponent>
        <CardComponent className="">
          <AvatarList listData={mockListData} />
        </CardComponent>
        <CardComponent className="">
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
