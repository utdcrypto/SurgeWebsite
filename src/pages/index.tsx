import { Link } from "gatsby";
import * as React from "react";
import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { LayoutProps, menuItems, withLayout } from "../components/Layout";

class Card extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba(27,28,28,.20)",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
          border: "1px solid #1b1c1d",
          boxShadow: "2px 2px"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

const IndexPage = (props: LayoutProps) => (
  <div style={{ backgroundColor: "#1B1C1D" }}>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text>
        <Header inverted as="h1" style={{ color: "#4ca1af" }}>
          UTD Surge Mentorship
        </Header>
        <Header inverted as="h2" style={{ color: "#dd5e89" }}>
          Technology • Business • Design
        </Header>
        <Header inverted as="h3" style={{ color: "#ffffff" }}>
          Contact us at{" "}
          <b>
            <a style={{ color: "#4ca1af" }} href="mailto:utd.bsco@gmail.com">
              utd.bsco@gmail.com
            </a>
          </b>
        </Header>

        {/* <Button primary size="huge">Get started!</Button>*/}
      </Container>
    </Segment>
    <div
      style={{
        background: "linear-gradient(to right bottom, #4ca1af     , #c4e0e5 )",
        border: "5px solid #1B1C1D"
      }}
    >
      {/* About this starter */}
      <Segment
        vertical
        className="stripe"
        textAlign="center"
        style={{ borderBottom: "5px solid #1B1C1D" }}
      >
        <Grid
          stackable
          verticalAlign="middle"
          className="container"
          textAlign="center"
        >
          <Grid.Row>
            <Card>
              <Container text>
                <Header as="h1" color="black">
                  Program Value
                </Header>
              </Container>
            </Card>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="8">
              <Card>
                <Header>About</Header>
                <p>
                  We offer help to students who want to go beyond their college
                  curriculum and develop their skills in software development,
                  business structuring, and user-friendly UI / UX design
                  practices.
                </p>
              </Card>
              <Card>
                <Header>Business</Header>
                <p>
                  We bring in industry professionals and serial entrepreneurs to
                  talk about their mistakes, successes, and tough decisions they
                  had to face while building their own companies.
                </p>
              </Card>
            </Grid.Column>
            <Grid.Column width="8" floated="right">
              {/* TODO replace with a pretty GIF */}
              <Card>
                <Header>Technology</Header>
                <p>
                  Our technology program introduces students to hot, new, and
                  demanded frameworks like React, Node, databases like MongoDB,
                  technologies like TypeScript, Mocha, and deployment to cloud
                  services like AWS, GCP, and Azure.
                </p>
              </Card>
              <Card>
                <Header>Design</Header>
                <p>
                  Design is core to the overall user satisfaction with an
                  application. User usage needs to be streamlined to be as clean
                  as possible, so to be well-equiped mentees will learn a
                  variety design patterns to adapt to their application's usage.
                </p>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* Key features */}
      <Segment
        vertical
        className="stripe alternate feature"
        style={{
          background: "linear-gradient(to right bottom, #dd5e89   , #f7bb97 )",
          borderBottom: "5px solid #1B1C1D"
        }}
      >
        <Grid
          columns="3"
          textAlign="center"
          divided
          relaxed
          stackable
          className="container"
        >
          <Grid.Row>
            <Card>
              <Container text>
                <Header as="h1" color="black">
                  Sponsorship
                </Header>
              </Container>
            </Card>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card>
                <Header icon>
                  <Icon name="wizard"></Icon>A kind of magic!
                </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias, beatae
                  expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Header icon>
                  <Icon name="wizard"></Icon>A kind of magic!
                </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias, beatae
                  expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Header icon>
                  <Icon name="wizard"></Icon>A kind of magic!
                </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias, beatae
                  expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  </div>
);

export default withLayout(IndexPage);
