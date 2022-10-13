import { request } from '@/utils'

export default {
  getPosts: () => request.get('/table/posts'),
}
