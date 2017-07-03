import React from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text, ListView } from 'react-native'
import PackageDescription from './PackageDescription'
import * as Styles from './styles'

const SourceMessage = Styles.Subtext.extend`
  margin-top: 5px;
  margin-left: 10px;
`


class ProjectSearch extends React.Component {
  
  state = {
    projectName: ''
  }

  // Alias setter method
  setProjectName = val => this.setState({ projectName: val })

  render() {

    let { projectName } = this.state
    let { projects } = this.props
    console.log(projects.searchResults.length)

    return (
      <Styles.SearchContainer centered={!projects.hasSearch}>
        {!projects.hasSearch && (
          <View>
            <Styles.GlassesIcon />
            <Styles.Logo>Librarian</Styles.Logo>
          </View>
        )}

        <Styles.Input
          placeholder='Look up a package or library'
          clearButtonMode='while-editing'
          autoCorrect={false}
          value={projectName}
          onBlur={() => setTimeout(() => projects.loadProject(projectName), 100)}
          onChangeText={this.setProjectName} />

        <SourceMessage>
          Showing results from&nbsp;
          <Styles.Hightlight>
            {projects.source}
          </Styles.Hightlight>
        </SourceMessage>

        <SearchResults
          results={projects.searchResults}
          setCurrentProject={projects.setCurrentProject} />
      </Styles.SearchContainer>
    )
  }
}


class SearchResults extends React.Component {

  get data() {
    const names = this.props.results.map(p => p.name)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    return ds.cloneWithRows(names)
  }

  render () {

    const { results, setCurrentProject } = this.props
    if (results.length == 0) {
      return null
    }

    return (
      <ListView
        dataSource={this.data}  
        renderRow={name => {
          let _package = results.find(p => p.name == name)
          return <PackageDescription
            {..._package}
            select={() => setCurrentProject(_package)} />
        }}
      />
    )
  }
}


export default inject(['projects'])(observer(ProjectSearch))