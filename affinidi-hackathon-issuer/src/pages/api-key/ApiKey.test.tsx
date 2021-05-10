import React from 'react';
import {render} from '@testing-library/react';
import ApiKeyPage from 'pages/api-key/ApiKey';
import {MemoryRouter} from 'react-router-dom';

describe('User Signup Page test', () => {
  test('Page renders', () => {
    const {getByText} = render(<MemoryRouter><ApiKeyPage/></MemoryRouter>)

    const title = getByText('Generate API key hash')
    const info1 = getByText('Here you will find a link which will lead you to a page where you can generate a new API hash key for your application. You need to use an API hash key to communicate with our web services.')
    const info2 = getByText('Generate API key hash here')

    expect(title).toBeInTheDocument()
    expect(info1).toBeInTheDocument()
    expect(info2).toBeInTheDocument()
  })
})
