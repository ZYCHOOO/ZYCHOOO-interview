import { createStore } from 'vuex'
import { getStorage, setStorage } from '@/utils/storage'

export default createStore({
  state: {
    commentData: getStorage('commentData') || []
  },
  mutations: {
    setCommentData (state, commentData) {
      state.commentData = commentData
      setStorage('commentData', commentData)
    }
  }
})
