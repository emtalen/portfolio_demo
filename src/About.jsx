// src/About.jsx
import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <UndrawDesignerLife />
          </Grid.Column>
          <Grid.Column>
            <h1 id="about-header">About Me</h1>
            <p>
              Ipsum dolor dolorem consectetur est velit fugiat. Dolorem
              provident copporis fuga saepe distinctio ipsam? Et quos haram
              excepturi dolorum molestias?
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default About;
