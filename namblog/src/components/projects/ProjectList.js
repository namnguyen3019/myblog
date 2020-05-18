import React from "react";
import ProjectSummary from "./ProjectSummary";
import { connect } from "react-redux";

class ProjectList extends React.Component {
  render() {
    const projects = this.props.projects;
    console.log(projects);
    if (projects) {
      return (
        <div className="project-list section">
          {projects.map((project) => (
            <ProjectSummary project = {project} key={project.id}/>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { projects: state.projects.projects };
};
export default connect(mapStateToProps)(ProjectList);
