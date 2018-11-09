import React, { Component } from "react";
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
  Jumbotron,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

class Hummingbird extends Component {
  state = {
    file: undefined
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.upload = this.upload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.classify = this.classify.bind(this);
    this.validateUrl = this.validateUrl.bind(this);
  }
  upload(file) {
    const form = new FormData();
    form.append("file", file);
    fetch("/upload", {
      // Your POST endpoint
      method: "POST",
      body: form // This is your form object with file on body
    })
      .then(response => {
        // console.log(response);
        return response.json(); // if the response is a JSON object
      })
      .then(data => {
        // console.log(data); // Handle the success response object
        this.setState({ predictions: data.predictions });
      })
      .catch(
        error => console.log(error) // Handle the error response object
      );
  }
  classify(url) {
    const form = new FormData();
    form.append("url", url);
    fetch(`http://localhost:8008/classify-url?imageUrl=${url}`, {
      method: "GET",
      mode: "no-cors"
    })
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ predictions: data.predictions }))
      .catch(error => console.log(error));
  }
  validateUrl(url) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      url
    );
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
    this.upload(event.target.files[0]);
  }
  handleSubmit(event) {
    event.preventDefault();
    const imageUrl = event.target.imageUrl.value;
    if (this.validateUrl(imageUrl)) {
      this.setState({
        file: imageUrl
      });
      this.classify(imageUrl);
    }
  }
  render() {
    const predArray = [
      ["black_throated_mango_female", "Black Throated Mango (Female)"],
      ["black_throated_mango_male", "Black Throated Mango (Male)"],
      ["blue_chinned_sapphire_female", "Blue Chinned Sapphire (Female)"],
      ["blue_chinned_sapphire_male", "Blue Chinned Sapphire (Male)"],
      ["blue_tailed_emerald_female", "Blue Tailed Emerald (Female)"],
      ["blue_tailed_emerald_male", "Blue Tailed Emerald (Male)"],
      ["brown_violetear", "Brown Violetear"],
      ["copper_rumped", "Copper Rumped"],
      ["green_hermit_female", "Green Hermit (Female)"],
      ["green_hermit_male", "Green Hermit (Male)"],
      ["green_throated_mango", "Green Throated Mango"],
      ["little_hermit", "Little Hermit"],
      ["long_billed_starthroat", "Long Billed Starthroat"],
      ["ruby_topaz_female", "Ruby Topaz (Female)"],
      ["ruby_topaz_male", "Ruby Topaz (Male)"],
      ["rufous_breasted_hermit", "Rufous Breasted Hermit"],
      ["tufted_coquette_female", "Tufted Coquette (Female)"],
      ["tufted_coquette_male", "Tufted Coquette (Male)"],
      ["white_chested_emerald", "White Chested Emerald"],
      ["white_necked_jacobin_female", "White Necked Jacobin (Female)"],
      ["white_necked_jacobin_male", "White Necked Jacobin (Male)"],
      ["white_tailed_goldenthroat", "White Tailed Goldenthroat"],
      ["white_tailed_sabrewing", "White Tailed Sabrewing"]
    ];
    // Use the regular Map constructor to transform a 2D key-value Array into a map
    const predMap = new Map(predArray);

    return (
      <Container fluid>
        <Row>
          <Col>
            {" "}
            <Jumbotron>
              <h1>
                Trinidad and Tobago Hummingbird Classifier{" "}
                <Badge color="info">V0.01.7</Badge>
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
          </Col>
        </Row>

        <Row>
          <Col>
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
                        onChange={this.handleChange}
                      />
                      <br /><br />
                    </CardText>
                  </CardBody>
                </Card>
              </FormGroup>
            </Form>
          </Col>
          <Col sm="1" md="1" xs="1">
            <span
              style={{
                verticalAlign: "middle",
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              OR
            </span>
          </Col>
          <Col>
            <Form
              onSubmit={
                this.handleSubmit
              } /*action="/classify-url" method="get" */
            >
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
                      <Button type="submit">Retrieve and classify image</Button>
                    </CardText>
                  </CardBody>
                </Card>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.file !== undefined && (
              <img
                src={this.state.file}
                alt="file"
                style={{ width: "350px", height: "350px" }}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Jumbotron style={{ backgroundColor: "cadetblue" }}>
              {this.state.predictions !== undefined &&
                this.state.predictions.map(prediction => {
                  if (prediction[1] * 100 > 10) {
                    return (
                      <React.Fragment>
                        <div
                          style={{
                            padding: 4,
                            margin: 4,
                            backgroundColor: "#000"
                          }}
                        >
                          <Progress
                            color="success"
                            value={prediction[1] * 100}
                            max={100}
                          >
                            <b>
                              <span style={{ color: "#000" }}>
                                {predMap.get(prediction[0])}|{" "}
                                {(prediction[1] * 100).toFixed(2)}%
                              </span>
                            </b>
                          </Progress>
                        </div>
                      </React.Fragment>
                    );
                  } else return "";
                })}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hummingbird;
