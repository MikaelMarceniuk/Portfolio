import pt from '../i18n/translations/pt.json'

type Messages = typeof pt

declare global {
	// Use type safe message keys with `next-intl`
	interface IntlMessages extends Messages {}
}
