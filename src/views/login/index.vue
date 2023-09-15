<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import api from './api'
import { getLocal, removeLocal, setLocal, setToken } from '@/utils'
import bgImg from '@/assets/images/login_bg.webp'
import { addDynamicRoutes } from '@/router'

const title: string = import.meta.env.VITE_APP_TITLE

const router = useRouter()
const route = useRoute()
const query = route.query

interface LoginInfo {
  name: string
  password: string
}

const loginInfo = ref<LoginInfo>({
  name: '',
  password: '',
})

const localLoginInfo = getLocal('loginInfo') as LoginInfo
if (localLoginInfo) {
  loginInfo.value.name = localLoginInfo.name || ''
  loginInfo.value.password = localLoginInfo.password || ''
}

const loging = ref<boolean>(false)
const isRemember = useStorage('isRemember', false)
async function handleLogin() {
  const { name, password } = loginInfo.value
  if (!name || !password) {
    window.$message?.warning('请输入用户名和密码')
    return
  }
  try {
    loging.value = true
    const res: any = await api.login({ name, password: password.toString() })
    window.$notification?.success({ title: '登录成功！', duration: 2500 })
    setToken(res.data.token)
    if (isRemember.value)
      setLocal('loginInfo', { name, password })
    else
      removeLocal('loginInfo')

    await addDynamicRoutes()
    if (query.redirect) {
      const path = query.redirect as string
      Reflect.deleteProperty(query, 'redirect')
      router.push({ path, query })
    }
    else {
      router.push('/')
    }
  }
  catch (error) {
    console.error(error)
  }
  loging.value = false
}
</script>

<template>
  <AppPage :show-footer="true" bg-cover :style="{ backgroundImage: `url(${bgImg})` }">
    <div m-auto p-15 f-c-c min-w-345 rounded-10 card-shadow bg-white dark:bg-dark bg-opacity-60>
      <div w-380 hidden md:block px-20 py-35>
        <img src="@/assets/images/login_banner.webp" w-full alt="login_banner">
      </div>

      <div w-320 flex-col px-20 py-35>
        <h5 f-c-c text-24 font-normal color="#6a6a6a">
          <img src="@/assets/images/logo.png" height="50" class="mr-10">{{ title }}
        </h5>
        <div mt-30>
          <n-input
            v-model:value="loginInfo.name"
            autofocus
            class="text-16 items-center h-50 pl-10"
            placeholder="admin"
            :maxlength="20"
          />
        </div>
        <div mt-30>
          <n-input
            v-model:value="loginInfo.password"
            class="text-16 items-center h-50 pl-10"
            type="password"
            show-password-on="mousedown"
            placeholder="123456"
            :maxlength="20"
            @keydown.enter="handleLogin"
          />
        </div>

        <div mt-20>
          <n-checkbox :checked="isRemember" label="记住我" :on-update:checked="(val:boolean) => (isRemember = val)" />
        </div>

        <div mt-20>
          <n-button w-full h-50 rounded-5 text-16 type="primary" :loading="loging" @click="handleLogin">
            登录
          </n-button>
        </div>
      </div>
    </div>
  </AppPage>
</template>
