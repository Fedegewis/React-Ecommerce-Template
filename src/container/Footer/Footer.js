import React from "react";

import { Container, List, Divider, Image } from "semantic-ui-react";
import "./Footer.css";
import * as braze from "@braze/web-sdk";

function Footer() {


const handleAuthorViewed = () =>{
  braze.logCustomEvent("Author viewed");
}
const handleProductMindsPageViewed = () =>{
  braze.logCustomEvent("Product Minds page viewed");
}

  return (
    <div className="footer">
      
        <Container textAlign="center" className="footer__container">
          <Divider inverted section />
         
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="https://www.linkedin.com/in/federico-gewisgold-8729b5187/" onClick={handleAuthorViewed}>
              By Fede Gewis
            </List.Item>
            <List.Item as="a" href="https://www.productminds.io/" onClick={handleProductMindsPageViewed}>
              Product Minds 
            </List.Item>
            <List.Item as="a" href="https://www.linkedin.com/in/aline-nami-onishi/">
              Director of Operations
            </List.Item>
            <List.Item as="a" href="https://www.linkedin.com/in/antonny-santos/">
              Tech Supervisor 1
            </List.Item>
            <List.Item as="a" href="https://www.linkedin.com/in/agustinaleon/">
              Tech Supervisor 2 
            </List.Item>
          </List>
        </Container>
     
    </div>
  );
}

export default Footer;
