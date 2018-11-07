import React from "react";
import {
  Badge,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Input,
  Label,
  Jumbotron
} from "reactstrap";

const Hummingbird = () => {
  return (
    <div>
      <Jumbotron >
        <h1>
          Trinidad and Tobago Hummingbird Classifier{" "}
          <Badge color="info">V0.01.3</Badge>
        </h1>
        <p>
          This website uses a Deep Learning model built using the{" "}
          <a href="https://fast.ai" target="_new">
            Fast.ai
          </a>{" "}
          library and can classify the following species:
          <span>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Ruby Topaz (Female)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Ruby Topaz (Male)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Black Throated Mango (Female)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Black Throated Mango (Male)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Blue Chinned Sapphire (Female)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Blue Chinned Sapphire (Male)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Blue Tailed Emerald (Female)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Blue Tailed Emerald (Male)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Brown Violetear
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Copper Rumped
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Green Throated Mango
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Long Billed Starthroat
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Tufted Coquette (Female)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Tufted Coquette (Male)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Green Hermit (Female)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Green Hermit (Male)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Little Hermit
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              Rufous Breasted Hermit
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              White Chested Emerald
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              White Necked Jacobin (Female)
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              White Necked Jacobin (Male){" "}
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              White Tailed Goldenthroat
            </Badge>
            <Badge color="success" style={{ padding: 4, margin: 4 }}>
              White Tailed Sabrewing
            </Badge>
          </span>
        </p>
      </Jumbotron>
      <Form action="/upload" method="post" encType="multipart/form-data">
        <FormGroup>
          <Card>
            <CardBody>
              <CardTitle>
                <Label for="imageFile">Select File To Upload</Label>
              </CardTitle>
              <CardText>
                <Input
                  type="file"
                  name="file"
                  id="imageFile"
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                />
              </CardText>
            </CardBody>
          </Card>
        </FormGroup>
        <Button>Upload Image</Button>
      </Form>
      <hr />
      <Form action="/classify-url" method="get">
        <FormGroup>
          <Card>
            <CardBody>
              <CardTitle>
                <Label for="imageUrl">Enter Image URL</Label>
              </CardTitle>
              <CardText>
                <Input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="https://"
                />
              </CardText>
            </CardBody>
          </Card>
        </FormGroup>
        <Button>Retrieve and classify image</Button>
      </Form>
    </div>
  );
};

export default Hummingbird;
