import { action, computed, observable } from 'mobx'
import 'js-base64'
import _ from 'lodash'

const NPM_HOST = 'https://npmjs.org'
const GITHUB_HOST = 'https://api.github.com'
const GITHUB_TOKEN = 'e16c27a48ab80701f4d424215acc890ffb2fc58c'


export default class ProjectStore {

  @observable loading = false
  @observable source = 'npm'
  @observable searchResults = []
  @observable currentProject = null
  // @observable currentProject = new Project({
  //   'name': 'react',
  //   'description': 'this is a mock react package',
  //   'links': {
  //     'repository': 'https://github.com/facebook/react'
  //   }
  // })

  @computed get hasSearch() {
    return this.loading || this.searchResults.length > 0
  }

  @action.bound searchProjects(query) {
    console.log('searching for ', query)
    this.loading = true
  }

  @action.bound loadProject(name) {
    this.loading = false
    this.searchResults = []

    if (name !== '') {
      this.loading = true
      fetch(`${NPM_HOST}/-/search?text=${name}`)
        .then(res => res.json())
        .then(data => data.objects.map(o => o.package))
        .then(results => {
          this.searchResults.push(...results)
          this.loading = false
        })
    }
  }

  @action.bound setCurrentProject(_package) {
    this.currentProject = new Project(_package)
    this.currentProject.loadGithub()
  }

  @action.bound restart() {
    this.currentProject = null
    this.searchResults = []
  }
}


class Project {

  @observable package = null
  @observable githubReadme = null
  @observable loadingStates = observable.map({
    github: true
  })

  constructor(_package) {
    this.package = _package
    this.name = _package.name
    this.description = _package.description
  }

  loadGithub() {
    let repo = this.package.links.repository

    if (repo != null) {
      let comps = repo.split('/')
      let owner = comps[comps.length - 2]
      let name = comps[comps.length - 1]

      fetch(`${GITHUB_HOST}/repos/${owner}/${name}/readme`)
        .then(res => res.json())
        .then(data => {
          this.githubReadme = Base64.decode(data.content)
          this.loadingStates.set('github', false)
        })
    }
  }
}