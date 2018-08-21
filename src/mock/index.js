import Mock from 'mockjs'
import { login, getUserInfo} from './login'

Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)

export default Mock