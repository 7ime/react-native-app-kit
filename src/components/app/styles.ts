import styled, {css} from 'styled-components/native'
import {Animated, StyleSheet} from 'react-native'
import Text from '../ui/typography/components/text'

const Item = styled.View`
    padding: 20px 10px;
    background-color: #FFFFFF;
`

const Divider = styled.View`
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: ${({theme}) => theme.colors.black_30};
`

const Title = styled(Text)`
    font-size: 20px;
    font-weight: ${({theme}) => theme.font.weight.bold};
    text-transform: capitalize;
`

const Body = styled(Text)`
    font-size: 10px;
`

interface ActionProps {
    type: 'default' | 'success' | 'danger' | 'warning' | 'info'
}

const Action = styled.TouchableOpacity<ActionProps>`
    flex: 1;
    background-color: red;
    align-items: center;
    justify-content: center;
    
    ${props => props.type === 'default' && css`
        background-color: grey;
    `}
    
    ${props => props.type === 'success' && css`
        background-color: green;
    `}
    
    ${props => props.type === 'danger' && css`
        background-color: red;
    `}
    
    ${props => props.type === 'warning' && css`
        background-color: yellow;
    `}
    
    ${props => props.type === 'info' && css`
        background-color: blue;
    `}
`

const ActionText = styled(Text)`
    font-size: 11px;
    color: #FFFFFF;
`

const Actions = styled.View`
    flex-direction: row;
`

const ExampleSwipeableListStyles = {
    Item,
    Title,
    Body,
    Divider,
    Action: Animated.createAnimatedComponent(Action),
    ActionText,
    Actions
}

export default ExampleSwipeableListStyles
