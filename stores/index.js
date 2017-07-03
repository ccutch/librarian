import ApplicationStore from './application-store'
import ProjectStore from './projects-store'

const application = new ApplicationStore()
const projects = new ProjectStore()

export default {
  application,
  projects
}