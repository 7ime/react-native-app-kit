import {createAction} from '@reduxjs/toolkit'
import {IJsonPlaceholder} from '../../../entities/jsonplaceholder'

export enum EActions {
    GetPosts = '[JsonPlaceholder] GetPosts',
    GetPostsSuccess = '[JsonPlaceholder] GetPostsSuccess',
    GetPostsError = '[JsonPlaceholder] GetPostsError',
    ResetState = '[JsonPlaceholder] ResetState'
}

export const getPosts = createAction(EActions.GetPosts)
export const getPostsSuccess = createAction<IJsonPlaceholder.ModelDTO[]>(EActions.GetPostsSuccess)
export const getPostsError = createAction(EActions.GetPostsError)
export const resetState = createAction(EActions.ResetState)
