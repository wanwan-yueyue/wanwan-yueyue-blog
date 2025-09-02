<template>
  <!-- 包裹交互元素的容器 -->
  <span class="novel-tooltip" @mouseenter="showTip" @mouseleave="hideTip">
    <!-- 读者看到的原文内容（比如“银蓝色颜料管”） -->
    <slot name="content"></slot>
    <!-- 悬浮时显示的细节弹窗 -->
    <div class="tooltip-content" v-if="isShow">
      <slot name="tip"></slot>
    </div>
  </span>
</template>

<script setup>
import { ref } from 'vue'
const isShow = ref(false)
const showTip = () => isShow.value = true
const hideTip = () => isShow.value = false
</script>

<style scoped>
.novel-tooltip {
  position: relative;
  display: inline-block;
  color: #4a6fa5; /* 用浅色突出交互元素，贴合小说色调 */
  cursor: pointer;
  border-bottom: 1px dashed #b8c8d8; /* 虚线提示“可交互” */
}
.tooltip-content {
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.95); /* 半透明白底，不遮挡原文 */
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 280px;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  z-index: 100;
  /* 柔和过渡，避免突兀 */
  transition: opacity 0.3s ease;
}
/* 加个小三角指向交互元素 */
.tooltip-content::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-bottom-color: rgba(255, 255, 255, 0.95);
}
</style>