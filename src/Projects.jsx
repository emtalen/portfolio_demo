import React, { Component } from "react";
import axios from "axios";
// src/Projects.jsx
import { Container, Grid } from "semantic-ui-react";
import { UndrawDashboard } from "react-undraw-illustrations";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  state = {
    projects: [],
  };
  // src/Projects.jsx

  componentDidMount() {
    axios.get("./data/projects.json").then((response) => {
      this.setState({ projects: response.data });
    });
  }

  render() {
    const { projects } = this.state;

    // src/Projects.jsx

    let projectsList = projects.map((project) => {
      return (
        <div id={`project-${project.id}`} key={project.id}>
          <ProjectCard project={project} />
        </div>
      );
    });

    return (
      <Container>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <UndrawDashboard />
            </Grid.Column>
            <Grid.Column>
              <h1 id="projects-header">My Projects</h1>
              <p>
                Ipsum dolor dolorem consectetur est velit fugiat. Dolorem
                provident copporis fuga saepe distinctio ipsam? Et quos haram
                excepturi dolorum molestias?
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>{projectsList}</Grid>
      </Container>
    );
  }
}

export default Projects;
