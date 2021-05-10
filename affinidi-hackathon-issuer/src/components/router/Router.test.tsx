import React from 'react';
import {render} from '@testing-library/react';
import RouterComponent from 'components/router/Router';
import {Router} from 'react-router-dom';
import {routes} from 'constants/routes';
import {createMemoryHistory} from 'history';

interface Props {
  isUserAuthenticated: boolean
}

const history = createMemoryHistory()
const SwitchRoute = ({isUserAuthenticated}: Props) => {
  return (
    <Router history={history}>
      <RouterComponent isUserAuthenticated={isUserAuthenticated}/>
    </Router>
  )
}

describe('Router component test', () => {
  test('Render public routes (APPLICANT POV)', () => {
    history.push(routes.APPLICANT_LOGIN)

    const {getByText} = render(<SwitchRoute isUserAuthenticated={false} />);

    expect(getByText('Applicant Login')).toBeInTheDocument()

    history.push('/random-path')

    expect(getByText('StartUp A - Driving License Issuer')).toBeInTheDocument()
  })

  test('Render public routes (ISSUER POV)', () => {
    history.push(routes.ISSUER_LOGIN)

    const {getByText} = render(<SwitchRoute isUserAuthenticated={false} />);

    expect(getByText('Issuer Login')).toBeInTheDocument()

    history.push('/random-path')

    expect(getByText('StartUp A - Driving License Issuer')).toBeInTheDocument()
  })

  test('Render private routes (APPLICANT POV)', () => {
    history.push(routes.APPLICATION)

    const {getByText} = render(<SwitchRoute isUserAuthenticated={true} />);

    expect(getByText('Step 1:')).toBeInTheDocument()
    expect(getByText('Step 2:')).toBeInTheDocument()

    history.push('/random-path')

    expect(getByText('404')).toBeInTheDocument()
  })

  test('Render private routes (ISSUER POV)', () => {
    history.push(routes.ISSUER)

    const {getByText} = render(<SwitchRoute isUserAuthenticated={true} />);

    expect(getByText('Pending Approval')).toBeInTheDocument()
    expect(getByText('Approved Applications')).toBeInTheDocument()

    history.push('/random-path')

    expect(getByText('404')).toBeInTheDocument()
  })
})
