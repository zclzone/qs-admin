import { request } from '@/utils'
import type { RequestConfig } from '~/types/axios'

export default {
  login: (data = {}) => request.post('/auth/login', data, { noNeedToken: true } as RequestConfig),
}
