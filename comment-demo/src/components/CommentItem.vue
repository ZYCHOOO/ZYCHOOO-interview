<template>
  <div class="comment-item">
    <div class="comment-item-name">{{ commentItem.username }}</div>
    <div class="comment-item-content">：{{ commentItem.content }}</div>
    <div class="comment-item-option">
      <div class="comment-item-del" @click="handleDelete(commentItem.id)">删除</div>
      <div class="comment-item-time">{{ timestampFormat(commentItem.publishTime) }}</div>
    </div>
  </div>
</template>

<script setup>
import { timestampFormat } from '@/utils/time'
import { defineProps, defineEmits } from 'vue'

const emits = defineEmits(['delete'])
const props = defineProps({
  commentItem: { type: Object, required: true }
})

const handleDelete = (id) => {
  emits('delete', id)
}

</script>

<style lang="scss" scoped>
  .comment-item {
    @include flex-row;
    @include flex-align-center;
    min-height: 20px;
    border-bottom: 1px solid black;
    &-name {
      font-style: italic;
      color: #4685ff;
    }
    &-option {
      @include flex-column;
      @include flex-center;
      margin-left: auto;
    }
    &-del {
      margin-left: auto;
      color: #4685ff;
      cursor: pointer;
    }
  }
</style>
