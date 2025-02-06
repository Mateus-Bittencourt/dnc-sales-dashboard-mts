import { ChangeEvent, useState, useEffect } from 'react'

// COMPONENTS
import {
  CardComponent,
  Header,
  StyledButton,
  StyledH2,
  FormComponent,
  CustomTable,
  StyledP,
  StyledSpan,
} from '@/components'
import { Container, Grid } from '@mui/material'

// HOOKS
import { useFormValidation, useGet, usePost, useDelete } from '@/hooks'

// TYPES
import { InputProps, LeadsData, LeadPostData, MessageProps } from '@/types'

function Leads() {
  // HOOKS
  const {
    data: createLeadData,
    loading: createLeadLoading,
    error: createLeadError,
    postData: createLeadPostData,
  } = usePost<LeadsData, LeadPostData>('leads/create', true)

  const {
    data: leadsData,
    loading: leadsLoading,
    error: leadsError,
    getData: getLeads,
  } = useGet<LeadsData[]>('leads')

  const { deleteData: leadDeleteData, loading: leadDeleteLoading } =
    useDelete('leads/delete')

  const [createMessage, setCreateMessage] = useState<MessageProps>({
    msg: '',
    type: 'success',
  })

  const clearMessage = () => {
    setTimeout(() => setCreateMessage({ msg: '', type: 'success' }), 5000)
  }

  // FORM
  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Name', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', required: true },
    { name: 'phone', type: 'tel', placeholder: 'Phone', required: true },
  ]

  const { formValues, formValid, handleChange } = useFormValidation(inputs)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createLeadPostData({
      name: String(formValues[0]),
      email: String(formValues[1]),
      phone: String(formValues[2]),
    })
  }

  const handleDelete = async (id: number) => {
    if (
      confirm(
        'Are you sure you want to delete this lead? This action cannot be undone.'
      )
    ) {
      try {
        await leadDeleteData({ params: { id } })
        getLeads()
        alert('Lead deleted successfully')
      } catch (error) {
        alert('Error deleting lead')
      }
    }
  }

  useEffect(() => {
    if (createLeadData?.id) {
      setCreateMessage({ msg: 'Lead created successfully', type: 'success' })
      getLeads()
    }

    if (createLeadError)
      setCreateMessage({ msg: 'Error creating lead', type: 'error' })

    clearMessage()
  }, [createLeadData, createLeadError])

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            <CardComponent
              className={
                leadsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
              }
            >
              {!leadsError && !leadsLoading && (
                <>
                  <StyledH2 className="mb-1">My Leads</StyledH2>
                  {leadsData?.length ? (
                    <CustomTable
                      headers={['Name', 'Email', 'Phone', '']}
                      rows={leadsData.map((lead) => [
                        <StyledP>{lead.name}</StyledP>,
                        <StyledP>{lead.email}</StyledP>,
                        <StyledP>{lead.phone}</StyledP>,
                        <StyledButton
                          className="borderless-alert"
                          onClick={() => handleDelete(lead.id)}
                          disabled={leadDeleteLoading}
                        >
                          Remove
                        </StyledButton>,
                      ])}
                    />
                  ) : (
                    <StyledSpan>No leads registered</StyledSpan>
                  )}
                </>
              )}
            </CardComponent>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CardComponent>
              <StyledH2 className="mb-1">Register Lead</StyledH2>
              <FormComponent
                inputs={inputs.map((input, index) => ({
                  ...input,
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled:
                      !formValid || createLeadLoading || leadDeleteLoading,
                    type: 'submit',
                    onClick: handleSubmit,
                    children: 'Add lead',
                  },
                ]}
                message={createMessage}
              />
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Leads
