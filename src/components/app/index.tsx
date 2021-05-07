import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Styles from './styles'
import {Swipeable} from 'react-native-gesture-handler'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../../store/jsonplaceholder'
import {Maybe} from '../../toolbox/custom-types'
import {Alert, Animated, FlatList} from 'react-native'
import {IJsonPlaceholder} from '../../entities/jsonplaceholder'

interface ISwipeableItemProps {
    data: IJsonPlaceholder.Model
}

const getLeftActions = (progress: Animated.AnimatedInterpolation, dragAnimatedValue: Animated.AnimatedInterpolation) => {
    const firstActionTrans = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [-60, 0],
    })

    const secondActionTrans = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [-120, 0],
    })

    return (
        <Styles.Actions style={{ width: 120 }}>
            <Styles.Action type={'success'} style={{ transform: [{ translateX: firstActionTrans }], zIndex: 2 }}>
                <Styles.ActionText>First</Styles.ActionText>
            </Styles.Action>
            <Styles.Action type={'danger'} style={{ transform: [{ translateX: secondActionTrans }], zIndex: 1 }}>
                <Styles.ActionText>Second</Styles.ActionText>
            </Styles.Action>
        </Styles.Actions>
    )
}

const getRightActions = (progress: Animated.AnimatedInterpolation, dragAnimatedValue: Animated.AnimatedInterpolation) => {
    const firstActionTrans = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [180, 0],
    })

    const secondActionTrans = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [120, 0],
    })

    const thirdActionTrans = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [60, 0],
    })

    return (
        <Styles.Actions style={{ width: 180 }}>
            <Styles.Action type={'success'} style={{ transform: [{ translateX: firstActionTrans }] }} onPress={() => Alert.alert('Hello world')}>
                <Styles.ActionText>First</Styles.ActionText>
            </Styles.Action>
            <Styles.Action type={'danger'} style={{ transform: [{ translateX: secondActionTrans }] }}>
                <Styles.ActionText>Second</Styles.ActionText>
            </Styles.Action>
            <Styles.Action type={'default'} style={{ transform: [{ translateX: thirdActionTrans }] }}>
                <Styles.ActionText>Third</Styles.ActionText>
            </Styles.Action>
        </Styles.Actions>
    )
}

const ExampleSwipeableItem = (props: ISwipeableItemProps) => {
    const {
        data: {
            title,
            body
        }
    } = props

    return (
        <Swipeable
            renderLeftActions={getLeftActions}
            leftThreshold={40}
            overshootLeft={false}
            renderRightActions={getRightActions}
            rightThreshold={40}
            overshootRight={false}
            friction={1}
        >
            <Styles.Item>
                <Styles.Title numberOfLines={1}>{title}</Styles.Title>
                <Styles.Body numberOfLines={1}>{body}</Styles.Body>
            </Styles.Item>
        </Swipeable>
    )
}

const App = () => {
    const dispatch = useDispatch()

    const posts: Maybe<IJsonPlaceholder.Model[]> = useSelector(JsonPlaceholderSelector.makeGetCertainNumberOfPosts(100))

    React.useEffect(() => {
        dispatch(JsonPlaceholderAction.getPosts())
    }, [])

    if (!posts) {
        return null
    }

    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => (
                <ExampleSwipeableItem data={item} />
            )}
            ItemSeparatorComponent={() => <Styles.Divider />}
            keyExtractor={item => String(item.id)}
        />
    )
}

export default App
