import {createSelector} from '@reduxjs/toolkit'
import {IAppState} from '../../app-reducer'
import {Maybe} from '../../../toolbox/custom-types'
import {IJsonPlaceholder} from '../../../entities/jsonplaceholder'

const getState = (state: IAppState) => state.jsonPlaceholder

export const getLoadingPosts = createSelector(getState, (state) => state.isLoadingPosts)
export const getPosts = createSelector(getState, state => state.posts)

export const getTotalCountOfPosts = createSelector(getPosts, (posts): number | null => {
    return posts ? posts.length : null
})

export const makeGetCertainNumberOfPosts = (count: number) => {
    return createSelector(getPosts, (posts): Maybe<IJsonPlaceholder.Model[]> => {
        return posts ? posts.slice(0, count) : null
    })
}
