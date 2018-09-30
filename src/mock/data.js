import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'

export const getTableData = req => {
  let tableData = []
  doCustomTimes(30, () => {
    tableData.push(Mock.mock({
      name: '@name',
      email: '@email',
      createTime: '@date'
    }))
  })
  return {
    code: 200,
    data: tableData,
    msg: '',
    total: tableData.length
  }
}
