import I18n from 'react-native-i18n'

I18n.defaultLocale = "en"
I18n.locale = "en"
I18n.currentLocale()

const missingTranslationRegex = /^\[missing ".*" translation\]$/

// This function is a wrapper to avoid exception wich leads in a crash
const translateOrFallback = (initialMsg, options) => {
  // We tried to translate something else than a string
  // The native I18n function will simply crash instead of rejecting the attempt with an error message
  if (typeof initialMsg !== 'string') {
    __DEV__ &&
      console.log(
        `I18n: you must give a string to translate instead of "${typeof initialMsg}"`
      )

    return '' // We don't return any message as we don't know what to send
  }

  const localMsg = I18n.t(initialMsg, options)

  // The translation does not exist, the default message is not very sexy
  // Instead we return the message we tried to translate
  if (missingTranslationRegex.test(localMsg)) {
    __DEV__ &&
      console.log(
        `translation "${initialMsg}" does not exists in translations files`
      )

    return initialMsg
  }

  return localMsg
}

export default {
  ...I18n,
  t: translateOrFallback
}
