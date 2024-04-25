const capitalize = (text: string) => {
	const capitalizedText = text
		.split(' ')
		.map((splitTxt) => {
			const capitalizedFirstLetter = splitTxt.charAt(0).toUpperCase()
			const remainingLetters = splitTxt.substring(1).toLowerCase()

			return capitalizedFirstLetter + remainingLetters
		})
		.join(' ')

	return capitalizedText
}

export default {
	capitalize,
}
