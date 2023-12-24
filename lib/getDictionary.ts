import { Locale } from '@/../i18n.config'

const dictionaries = {
  uk: () => import('../dictionaries/uk.json').then((module) => module.default),
  ru: () => import('../dictionaries/ru.json').then((module) => module.default),
} 

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
export const getAllDictionaries = async () => {
  const locales = Object.keys(dictionaries) as Locale[]
  const dictionariesPromises = locales.map((locale) => getDictionary(locale))
  const allDictionaries = await Promise.all(dictionariesPromises)
  return allDictionaries.reduce((acc, dictionary, index) => {
    const locale = locales[index]
    return {
      ...acc,
      [locale]: dictionary,
    }
  }, {})
}