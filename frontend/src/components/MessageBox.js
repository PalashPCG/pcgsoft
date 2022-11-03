import { Alert } from 'react-bootstrap';

export default function MessageBox(props) {
  return <Alert variant={props.variant}>{props.children}</Alert>;
}
