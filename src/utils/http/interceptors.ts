import type { AxiosError, AxiosResponse } from 'axios'
import { AxiosRejectError, resolveResError } from './helpers'
import { getToken } from '~/src/utils/auth/token'
import type { ErrorResolveOptions, RequestConfig } from '~/types/axios'

/** 请求拦截 */
export function reqResolve(config: RequestConfig) {
  // 处理不需要token的请求
  if (config.noNeedToken)
    return config

  const token = getToken()
  if (!token)
    return Promise.reject(new AxiosRejectError({ code: 401, message: '登录已过期，请重新登录！' }))

  /**
   * * 加上 token
   * ! 认证方案: JWT Bearer
   */
  const Authorization = config.headers?.Authorization || `Bearer ${token}`
  if (config.headers)
    config.headers.Authorization = config.headers.Authorization || `Bearer ${token}`
  else
    config.headers = { Authorization }

  return config
}

/** 请求错误拦截 */
export function reqReject(error: AxiosError) {
  return Promise.reject(error)
}

/** 响应拦截 */
export function resResolve(response: AxiosResponse) {
  const { noNeedTip } = response.config as RequestConfig
  if (response.data?.code !== 0) {
    const { message, code } = resolveResError(response?.data)
    !noNeedTip && window.$message?.error(message)
    return Promise.reject(new AxiosRejectError({ code, message, data: response?.data }))
  }
  return Promise.resolve(response?.data)
}

/** 响应错误拦截 */
export function resReject(error: AxiosError) {
  if (!error || !error.response) {
    const { code, message } = resolveResError({ code: error?.code, message: error.message })
    window.$message?.error(message)
    return Promise.reject(new AxiosRejectError({ code, message, data: error }))
  }
  const { code, message } = resolveResError(error.response?.data as ErrorResolveOptions, error.message)
  const { noNeedTip } = error.config as RequestConfig
  !noNeedTip && window.$message?.error(message)
  return Promise.reject(new AxiosRejectError({ code, message, data: error.response?.data }))
}
