import React from "react";
import { ListGroup } from "react-bootstrap";
import "./style.css";
interface ContactInfoProps {
  className?: string
}

const ContactInfo : React.FC<ContactInfoProps> = ({className}) => {
  return (
  <ListGroup>
  <ListGroup.Item>
  <img
    src="https://png.pngtree.com/png-vector/20191105/ourmid/pngtree-email-icon-in-flat-style-png-image_1957181.jpg"
    id="gmail-logo"
    width="25"
    height="25"
    className="d-inline-block align-top"
    alt="gmail logo"
  />
    <a href="mailto:Dallas.Isaac1@gmail.com">email</a>
  </ListGroup.Item>
  <ListGroup.Item>
  <img
    src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png"
    width="30"
    height="30"
    className="d-inline-block align-top"
    alt="linkedin logo"
  />
    <a href="https://www.linkedin.com/in/isaacjdallas/">linkedin</a>
  </ListGroup.Item>
  <ListGroup.Item>
    <img
      src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="github logo"
    />
    <a href="https://github.com/idallas93"> github </a>
  </ListGroup.Item>
  <ListGroup.Item>
  <img
      src="https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-vector-resume-icon-png-image_1610395.jpg"
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="github logo"
    />
    <a href="https://docs.google.com/document/d/1w246fbyEnRXwblKnXAp3FVq-Gg3bwIMik8gCqOwu754/edit?usp=share_link">
      {" "}
      Resume{" "}
    </a>
  </ListGroup.Item>
</ListGroup>
);
}

export default ContactInfo