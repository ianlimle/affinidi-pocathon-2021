import React from "react";
import AdminList from "components/admin/AdminList";
import { act, render } from "@testing-library/react";
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event'

const history = createMemoryHistory()
const mockData = {
    applicationID: '000000'
}

describe("AdminList Component Test", () => {
  test("Renders the component", () => {
    const { getByText, getByRole } = render(    
        <Router history={history}>
            <AdminList data={mockData}/>
        </Router>
    )

    const applicationNumber = getByText(/Application ID:/i)
    const viewMoreButton = getByRole('button', {name: 'View more'});

    expect(applicationNumber).toBeInTheDocument();
    expect(viewMoreButton).toBeInTheDocument();
  });
});