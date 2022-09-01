<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { NButton, NSwitch } from 'naive-ui'
import dayjs from 'dayjs'
import api from './api'
import { isNullOrUndef, renderIcon } from '@/utils/common'

interface RowData {
  id: number
  title: string
  category: string
  description: string
  author: string
  createDate: string
  updateDate: string
  isPublish: boolean
  publishing: boolean
}
const columns: DataTableColumns < RowData > = [
  { type: 'selection' },
  { title: '标题', key: 'title', width: 150, ellipsis: { tooltip: true } },
  { title: '分类', key: 'category', width: 80, ellipsis: { tooltip: true } },
  { title: '描述', key: 'description', width: 200, ellipsis: { tooltip: true } },
  { title: '创建人', key: 'author', width: 80 },
  {
    title: '创建时间',
    key: 'createDate',
    width: 150,
    render(row) {
      return h('span', dayjs().format('YYYY-MM-DD HH:mm:ss'))
    },
  },
  {
    title: '最后更新时间',
    key: 'updateDate',
    width: 150,
    render(row) {
      return h('span', dayjs().format('YYYY-MM-DD HH:mm:ss'))
    },
  },
  {
    title: '发布',
    key: 'isPublish',
    width: 120,
    align: 'center',
    fixed: 'right',
    render(row) {
      return h(NSwitch, {
        size: 'small',
        rubberBand: false,
        value: row.isPublish,
        loading: row.publishing,
        onUpdateValue: () => handlePublish(row),
      })
    },
  },
  {
    title: '操作',
    key: 'actions',
    width: 120,
    align: 'center',
    fixed: 'right',
    render(row) {
      return h(NButton,
        {
          size: 'small',
          type: 'error',
          onClick: () => handleDelete(row),
        },
        { default: () => '删除', icon: renderIcon('material-symbols:delete-outline', { size: 14 }) },
      )
    },
  },
]
const pagination = reactive({ pageSize: 10 })
const loading = ref<boolean>(false)
const tableData = ref([])

initTableData()

async function initTableData() {
  loading.value = true
  try {
    const res = await api.getPosts()
    tableData.value = res.data
  }
  catch (error) {
    console.error(error)
    tableData.value = []
  }

  loading.value = false
}

function handlePublish(row: RowData) {
  if (isNullOrUndef(row.id))
    return

  row.publishing = true
  setTimeout(() => {
    row.isPublish = !row.isPublish
    row.publishing = false
    window.$message?.success(row.isPublish ? '已发布' : '已取消发布')
  }, 1000)
}
function handleDelete(row: RowData) {
  if (isNullOrUndef(row.id))
    return
  window.$dialog?.warning({
    title: '确认删除？',
    negativeText: '取消',
    positiveText: '确认',
    onPositiveClick: () => {
      window.$message?.success('删除成功')
    },
    onNegativeClick: () => {
      window.$message?.success('已取消')
    },
  })
}
</script>

<template>
  <div bg-white h-full p-24>
    <div flex>
      <NButton ml-auto type="primary">
        <template #icon>
          <icon-material-symbols-add />
        </template>
        新增
      </NButton>
    </div>
    <n-data-table
      mt-20
      :columns="columns"
      :row-key="(row:RowData) => row.id"
      :data="tableData"
      :pagination="pagination"
      :scroll-x="1600"
      :loading="loading"
    />
  </div>
</template>

