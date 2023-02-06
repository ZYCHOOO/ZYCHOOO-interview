<template>
  <div class="comment-area">
    <div class="comment-area-item">
      <div class="comment-area-label">用户名：</div>
      <input v-model="commentForm.username" type="text" class="comment-area-input">
    </div>
    <div class="comment-area-item">
      <div class="comment-area-label">评论内容：</div>
      <textarea v-model="commentForm.content" cols="30" rows="10" class="comment-area-input"></textarea>
    </div>
    <div class="comment-area-btn" @click="handlePublish">发布</div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emits = defineEmits(['publish'])

const commentForm = ref({
  username: '',
  content: ''
})

const handlePublish = () => {
  const publishTime = new Date()
  const { username, content } = commentForm.value
  if (!username || !content) {
    alert('用户名和评论内容不能为空！')
    return
  }
  const commentItem = {
    publishTime,
    ...commentForm.value,
    id: `${Math.random() * 100}-${publishTime}`
  }
  emits('publish', commentItem)
  commentForm.value = { username: '', content: '' }
}

</script>

<style lang="scss" scoped>
  .comment-area {
    @include flex-column;
    padding: 20px;
    border: 1px solid black;
    &-item {
      @include flex-row;
      margin-bottom: 10px;
    }
    &-label {
      @include flex-row;
      width: 80px;
      justify-content: flex-start;
    }
    &-input {
      flex: 1;
    }
    &-btn {
      @include flex-center;
      margin-left: auto;
      width: 80px;
      height: 24px;
      background: #4685FF;
      border-radius: 2px;
      color: #FFF;
      cursor: pointer;
    }
  }
</style>
