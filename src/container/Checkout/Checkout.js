import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { Container, Item, Card, Grid, Message, Button } from "semantic-ui-react";
import "./Checkout.css";
import SubTotal from "../../components/SubTotal/SubTotal";
import * as braze from "@braze/web-sdk";

function Checkout() {
  const [{ basket }] = useStateValue();

  // URL de la página de Product Minds
  const productMindsURL = "https://www.productminds.io/";

  const handlePurchaseMade = () => {
    braze.logCustomEvent("Purchase made");
  };

  return (
    <div className="checkout">
      <Container>
        <Grid doubling stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <div>
                {basket?.length === 0 ? (
                  <div className="checkout__warningMessage">
                    <Message warning>
                      <Message.Header>
                        Your shopping basket is empty
                      </Message.Header>
                      <p>
                        You have no items in your basket. To buy one or more
                        items , please click "Add to basket" next to the item
                      </p>
                    </Message>
                  </div>
                ) : (
                  <div>
                    {basket?.length >= 2 ? (
                      <h2>Your shopping basket items </h2>
                    ) : (
                      <h2>Your shopping basket item </h2>
                    )}
                    <Card fluid className="checkout__card">
                      <Item.Group>
                        {basket?.map((item) => (
                          <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            price={item.price}
                            rating={item.rating}
                          />
                        ))}
                      </Item.Group>
                    </Card>
                  </div>
                )}
              </div>
            </Grid.Column>
            {basket?.length > 0 && (
              <div className="checkout__right">
                <Grid.Column width={6}>
                  <Card>
                    <Item.Group divided>
                      <SubTotal />
                      <a href={productMindsURL} target="_blank" rel="noopener noreferrer">
                        <Button color="green" fluid onClick={handlePurchaseMade}>
                          Purchase
                        </Button>
                      </a>
                    </Item.Group>
                  </Card>
                </Grid.Column>
              </div>
            )}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Checkout;
