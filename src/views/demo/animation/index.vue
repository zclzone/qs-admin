<script setup lang="ts">
import { shuffle } from 'lodash-es'
interface NumItem {
  id: number
  num: number
}
const numList = ref<NumItem[]>(new Array(81).fill(undefined).map((item, index) => ({ id: index, num: index % 9 + 1 })))
</script>

<template>
  <CommonPage :show-footer="true">
    <n-button type="primary" @click="numList = shuffle(numList)">
      打乱
    </n-button>
    <transition-group tag="ul" move-class="transition-500" mt-15 w-510 f-c-c flex-wrap p-30 rounded-15 bg-white dark:bg-dark>
      <li v-for="item in numList" :key="item.id" f-c-c w-40 h-40 m-5 border-1 bc-ccc rounded-full color-primary>
        {{ item.num }}
      </li>
    </transition-group>
  </CommonPage>
</template>

