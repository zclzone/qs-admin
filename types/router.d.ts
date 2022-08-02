import { RouteRecordRaw } from 'vue-router'

interface Meta {
  title?: string
  icon?: string
  customIcon?: string
  order?: number
  role?: Array<string>
}

interface RouteItem {
  name: string
  path: string
  redirect?: string
  isHidden?: boolean
  meta?: Meta,
  children?: RoutesType
}

type RouteType = RouteRecordRaw & RouteItem

type RoutesType = Array<RouteType>