import {IJsonPlaceholderService} from './model'
import fetcher from '../../api/fetcher'
import Paths from '../../api/paths'
import {IJsonPlaceholder} from '../../entities/jsonplaceholder'

export default class JsonPlaceholderService implements IJsonPlaceholderService {
    getPosts = (): Promise<IJsonPlaceholder.ModelDTO[]> => {
        return fetcher.get(Paths.JsonPlaceholder.getPosts())
    }

    getPost = (id: number): Promise<IJsonPlaceholder.ModelDTO> => {
        return fetcher.get(Paths.JsonPlaceholder.getPost(id))
    }

    createPost = (data: IJsonPlaceholder.Create): Promise<IJsonPlaceholder.ModelDTO> => {
        return fetcher.post(Paths.JsonPlaceholder.createPost(), data)
    }

    updatePost = (data: IJsonPlaceholder.Update): Promise<IJsonPlaceholder.ModelDTO> => {
        return fetcher.put(Paths.JsonPlaceholder.updatePost(data.id), data)
    }

    deletePost = (id: number): Promise<boolean> => {
        return fetcher.delete(Paths.JsonPlaceholder.deletePost(id))
    }
}
