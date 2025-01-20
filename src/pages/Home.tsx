import {
  AvatarList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
  StyledH2,
} from '@/components'
import { Container, Grid } from '@mui/material'
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <CardComponent>
              {/* <StyledH2 className='mb-1'>Total Revenue</StyledH2> */}
              <StyledH2 className="mb-1">Total sales for the month</StyledH2>
            </CardComponent>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardComponent>
              <StyledH2 className="mb-1">Goal of the month</StyledH2>
            </CardComponent>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardComponent>
              <StyledH2 className="mb-1">Leads contacted</StyledH2>
            </CardComponent>
          </Grid>

          <Grid item xs={12} md={7}>
            <CardComponent>
              <StyledH2 className="mb-1">Sales value in the month</StyledH2>
              <CustomChart
                data={[10, 20, 30, 40, 20]}
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                type="line"
              />
            </CardComponent>
          </Grid>
          <Grid item xs={12} md={5}>
            <CardComponent>
              <StyledH2 className="mb-1">Top sellers of the month</StyledH2>
              <AvatarList listData={mockListData} />
            </CardComponent>
          </Grid>

          <Grid item xs={12} md={5}>
            <CardComponent>
              <StyledH2 className="mb-1">Relevant news</StyledH2>
              <CustomTable
                headers={mockTableData.headers}
                rows={mockTableData.rows}
              />
            </CardComponent>
          </Grid>
          <Grid item xs={12} md={7}>
            <CardComponent>
              <StyledH2 className="mb-1">Sales value per month</StyledH2>
              <CustomChart
                data={[10, 20, 30, 40, 20]}
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                type="bar"
              />
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
