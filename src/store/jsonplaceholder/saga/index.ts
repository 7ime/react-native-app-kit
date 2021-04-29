import {call, put, takeLatest, select} from 'redux-saga/effects'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../index'
import {Maybe} from '../../../toolbox/custom-types'
import {IService} from '../../../services/model'
import getService from '../../../services'
import {IJsonPlaceholder} from '../../../entities/jsonplaceholder'

const service: IService = getService()

export function* getPosts() {
    const posts: Maybe<IJsonPlaceholder.Model[]> = yield select(JsonPlaceholderSelector.getPosts)

    if (!posts) {
        try {
            const response: IJsonPlaceholder.ModelDTO[] = yield call(service.jsonPlaceholderService.getPosts)

            yield put(JsonPlaceholderAction.getPostsSuccess(response))
        } catch (error) {
            yield put(JsonPlaceholderAction.getPostsError())
        }
    }
}

export function* rootSaga() {
    yield takeLatest([JsonPlaceholderAction.getPosts], getPosts)
}
