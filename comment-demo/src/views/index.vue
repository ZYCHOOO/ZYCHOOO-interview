<template>
  <div class="comment">
    <comment-area @publish="handlePublish" />
    <comment-item
      v-for="commentItem in commentData"
      :key="commentItem.id"
      :comment-item="commentItem"
      @delete="handleDelete"
    />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import CommentArea from '@/components/CommentArea'
import CommentItem from '@/components/CommentItem'

const store = useStore()
const commentData = computed(() => {
  return store.state.commentData || []
})

const handlePublish = (commentItem) => {
  const commentArr = [...commentData.value, commentItem]
  store.commit('setCommentData', commentArr)
}

const handleDelete = (id) => {
  const commentArr = commentData.value.filter(item => item.id !== id)
  store.commit('setCommentData', commentArr)
}

</script>

<style lang="scss" scoped>
  .comment {
    @include flex-column;
    padding: 20px;
    border: 1px solid black;
    background: #fff;
  }
</style>
