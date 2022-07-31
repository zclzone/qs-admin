import { resolveToken } from '../utils'

const token = {
  admin: 'admin',
  editor: 'editor',
}

export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: (options) => {
      const { name } = options.body
      if (['admin', 'editor'].includes(name)) {
        return {
          code: 0,
          data: {
            token: token[name],
          },
        }
      }
      else {
        return {
          code: -1,
          message: '没有此用户',
        }
      }
    },
  },
  {
    url: '/api/auth/refreshToken',
    method: 'post',
    response: ({ headers }) => {
      return {
        code: 0,
        data: {
          token: resolveToken(headers?.authorization),
        },
      }
    },
  },
]
