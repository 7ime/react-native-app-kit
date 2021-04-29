import {IService} from './model'
import JsonPlaceholderService from './jsonplaceholder-service'

class Service implements IService {
    jsonPlaceholderService = new JsonPlaceholderService()
}

const service = new Service()

const getService = () => service

export default getService
