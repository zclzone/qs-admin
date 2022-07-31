const proxyConfigMappings: Record<ProxyType, ProxyConfig> = {
  dev: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
  test: {
    prefix: '/api',
    target: 'https://qszone.com/api',
  },
  prod: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
}

export function getProxyConfig(envType: ProxyType = 'dev'): ProxyConfig {
  return proxyConfigMappings[envType]
}
