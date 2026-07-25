import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'mindset-settings'

const defaultSettings = {
  hideBalance: false,
  disableAnimations: false,
  dataSaver: false,
  notifyExplicacaoPronta: true,
  notifySaldoBaixo: true,
  notifyConvites: true,
  notifyNovidades: false,
  notifyPorSms: false,
  locationVisible: true,
  rankingComNomeReal: true,
  perfilVisivelPara: 'todos',
}

function readInitialSettings() {
  if (typeof window === 'undefined') return defaultSettings
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? { ...defaultSettings, ...JSON.parse(stored) } : defaultSettings
  } catch {
    return defaultSettings
  }
}

const SettingsContext = createContext(null)

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(readInitialSettings)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  // Preferências que afetam a aplicação inteira usam classes no body,
  // o mesmo mecanismo já usado para o sidebar e o painel de notificações.
  useEffect(() => {
    document.body.classList.toggle('no-animations', settings.disableAnimations)
  }, [settings.disableAnimations])

  useEffect(() => {
    document.body.classList.toggle('data-saver', settings.dataSaver)
  }, [settings.dataSaver])

  function updateSetting(key, value) {
    setSettings((current) => ({ ...current, [key]: value }))
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings tem de ser usado dentro de SettingsProvider')
  }
  return context
}
