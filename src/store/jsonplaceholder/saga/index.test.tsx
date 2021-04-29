import {expectSaga} from 'redux-saga-test-plan'
import {call, select} from 'redux-saga-test-plan/matchers'
import {
    JsonPlaceholderAction,
    JsonPlaceholderState,
    JsonPlaceholderReducer,
    JsonPlaceholderSaga,
    JsonPlaceholderSelector
} from '../index'
import {Action} from 'redux'
import {ISagaTestRunResult} from '../../../toolbox/tests/model/shared'
import getService from '../../../services'
import {IJsonPlaceholder} from '../../../entities/jsonplaceholder'
import MockJsonPlaceholder from '../../../__mocks__/jsonplaceholder'

const service = getService()

describe('jsonPlaceholder saga', () => {

    test('getPosts', () => {
        const response: IJsonPlaceholder.ModelDTO[] = [MockJsonPlaceholder.modelDTO({id: 99})]

        return expectSaga(JsonPlaceholderSaga.getPosts).provide([
            [select(JsonPlaceholderSelector.getPosts), null],
            [call(service.jsonPlaceholderService.getPosts), response]
        ])
            .withReducer<JsonPlaceholderState.IState, Action>(JsonPlaceholderReducer.reducer, JsonPlaceholderState.initialState)
            .dispatch(JsonPlaceholderAction.getPosts())
            .run()
            .then((result: ISagaTestRunResult<JsonPlaceholderState.IState>) => expect(result.storeState.posts).toEqual(response))
    })
})
