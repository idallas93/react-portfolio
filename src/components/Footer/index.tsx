import * as React from 'react'
import { Card } from "react-bootstrap";
import "./style.css";


type FooterProps = {
  className?: string
}

const FooterPage : React.FC<FooterProps> = ({className}) => {
  return (
    <Card className="text-center">
      <Card.Footer className="text-muted">Dallas.Isaac1@gmail.com</Card.Footer>
    </Card>
  )
}

export default FooterPage;


