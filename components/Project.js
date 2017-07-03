import React from 'react'
import { View } from 'react-native'
import { inject, observer } from 'mobx-react'
import * as Styles from './styles'

const Title = Styles.Title.extend`
  display: block;
  color: white;
  font-size: 24px;
  margin: 0;
`


const Project = props => (
  <View>
    <Styles.Header>
      <Styles.BackArrow onPress={props.projects.restart} />
      <Title>
        {props.name}
      </Title>
    </Styles.Header>
  </View>
)

export default inject(['projects'])(observer(Project))