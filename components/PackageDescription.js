import React from 'react'
import * as Styles from './styles'

const Author = Styles.Hightlight.extend`
  font-size: 12px;
  display: block;
  margin-left: auto;
`

const Description = Styles.Subtext.extend`
  margin-top: 5px;
`


const PackageDescription = ({select, ...pack}) => (
  <Styles.ListItem onPress={select}>
    <Styles.Title>
      {pack.name}&nbsp;
      <Author>
        {pack.author ? pack.author.name || pack.author : null }
      </Author>
    </Styles.Title>

    <Description>{pack.description}</Description>
    <Styles.HorizLine />
  </Styles.ListItem>
)


export default PackageDescription