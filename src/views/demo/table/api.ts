import request from '@/utils/http'

export default {
  getPosts: () => request.get('/table/posts'),
}
