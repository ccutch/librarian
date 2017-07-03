/**
 * Reusable styled components
 */
import React from 'react'
import { View, TouchableHighlight, Linking } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

/**
 * Container components
 */
export const AppContainer = styled.View`
  flex: 1;
  padding-top: ${props => props.isIOS ? '20px' : '0'};
  background-color: ${props => props.theme.background};
`

export const SearchContainer = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: ${props => props.centered ? 'center' : 'flex-start'};
`

/**
 * Branding logo for initial search view
 */
export const GlassesIcon = styled(MaterialCommunityIcons).attrs({
  name: 'glasses',
})`
  color: ${props => props.theme.accent};
  font-size: 140px;
  align-self: center;
  margin: 0;
  margin-top: -100px;
`

export const Logo = styled.Text`
  color: ${props => props.theme.primary};
  font-size: 32px;
  align-self: center;
  margin-top: -48px;
  margin-bottom: 60px;
  font-weight: bold;
`

/**
 * Search input components
 */
export const Input = styled.TextInput`
  height: 40px;
  padding: 5px 10px;
  overflow: hidden;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: ${props => props.theme.text};
`

export const ListItem = styled(({children, ...props}) => (
  <TouchableHighlight {...props}>
    <View>{children}</View>
  </TouchableHighlight>
))`
  padding: 10px 0px 0px 10px;
`

export const HorizLine = styled.View`
  background-color: ${props => props.theme.primary};
  height: 1px;
  width: 100%;
  margin-top: 10px;
`

/**
 * Random text
 */
export const Subtext = styled.Text`
  color: lightgray;
  font-style: italic;
  font-size: 14px;
  margin-bottom: 5px;
`

export const Hightlight = styled.Text`
  color: ${props => props.theme.accent};
`

export const Title = styled.Text`
  color: ${props => props.theme.text};
  font-size: 20px;
`


export const Header = styled.View`
  padding: 10px;
  min-height: 60px;
  background-color: ${props => props.theme.primary};
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const BackArrow = styled(Ionicons).attrs({
  name: 'ios-arrow-back',
  color: 'white',
  size: 25
})`
  margin-right: 10px;
`