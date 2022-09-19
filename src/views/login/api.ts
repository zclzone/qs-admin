import request from '@/utils/http'
import type { RequestConfig } from '~/types/axios'

export default {
  login: (data = {}) => request.post('/auth/login', data, { noNeedToken: true } as RequestConfig),
}
