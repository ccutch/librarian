import React from 'react'
import { observer, inject } from 'mobx-react'
import * as Styles from './styles'
import Project from './Project'
import ProjectSearch from './ProjectSearch'


class Librarian extends React.Component {

  render() {
    
    return (
      <Styles.AppContainer isIOS={this.props.application.isIOS}>
        {this.renderContent()}
      </Styles.AppContainer>
    )
  }

  renderContent() {

    const { projects } = this.props

    if (projects.currentProject) {
      return <Project {...projects.currentProject} />
    } else {
      return <ProjectSearch />
    }
  }
}


export default inject(
  'application',
  'projects'
)(observer(Librarian))
