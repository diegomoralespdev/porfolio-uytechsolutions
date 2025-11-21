import { t, setLanguage, initLanguage, locale } from '@/i18n'

export const useI18n = () => {
  return {
    t,
    setLanguage,
    initLanguage,
    locale
  }
}