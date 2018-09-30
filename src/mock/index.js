import Mock from 'mockjs'
import { login, getUserInfo} from './login'
import {getTableData} from './data'

Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/get_table_data/, getTableData)

export default Mock