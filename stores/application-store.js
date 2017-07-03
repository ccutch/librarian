import { observable, action } from 'mobx'
import { Platform } from 'react-native'


export default class ApplicationStore {

  @observable language = 'english'
  @observable loading = true
  @observable isIOS = Platform.OS === 'ios'
  @observable isAndroid = Platform.OS == 'android'

  @action.bound changeLang() {
    this.language = 'french'
  }
}