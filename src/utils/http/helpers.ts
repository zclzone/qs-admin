import { isNullOrUndef } from '@/utils/common'
import { removeToken } from '@/utils/auth/token'
import { toLogin } from '@/utils/auth/router'
import type { ErrorResolveOptions, ErrorResolveResponse } from '~/types/axios'

/** 自定义错误 */
export class AxiosRejectError extends Error {
  code?: number | string
  data?: any
  constructor(rejectData: ErrorResolveResponse, options?: ErrorOptions) {
    const { code, message, data } = rejectData
    super(message, options)
    this.code = code
    this.data = data
  }
}

export function resolveResError(error: ErrorResolveOptions = {}, errorMessage = ''): ErrorResolveResponse {
  let { code, message } = error
  if (isNullOrUndef(code)) {
    // 未知错误
    code = -1
    message = message || errorMessage || '接口未知异常！'
  }
  else {
    switch (Number(code)) {
      case 400:
        message = message || '请求参数错误'
        break
      case 401:
        message = message || '登录已过期'
        removeToken()
        toLogin()
        break
      case 403:
        message = message || '没有权限'
        break
      case 404:
        message = message || '资源或接口不存在'
        break
      case 500:
        message = message || '服务器异常'
        break
      default:
        message = message || errorMessage || '操作异常！'
        break
    }
  }
  return { code, message }
}

