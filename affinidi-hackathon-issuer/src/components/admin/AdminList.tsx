import { routes } from 'constants/routes';
import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {useHistory, withRouter, RouteComponentProps} from 'react-router-dom'; 

interface IData {
    username: string,
    payload: any,
    applicationID: string
}

interface IProps {
    children?: React.ReactNode,
    data: IData,
}

const AdminList: React.FC<IProps & RouteComponentProps> = (props): any => {
  const history = useHistory();
  const { applicationID } = props.data;
  const { givenName="", familyName="" } = props.data.payload

  const viewApplication = () => {
    history.push({
      pathname: `${routes.ISSUER_VIEW_APPLICATION}`,
    }, {
      state: props.data,
    });
  }

  return (
  <Card style={{margin: '10px 0'}}>
    <Card.Body>
      <Card.Title>
          Application ID: { applicationID } (<span style={{fontWeight:400}}>{givenName} {familyName}</span>)
      </Card.Title>
      <Button onClick={viewApplication}> View more </Button>
    </Card.Body>
  </Card>)
}

export default withRouter(AdminList);