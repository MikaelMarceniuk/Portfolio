'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AosProvider = () => {
	useEffect(() => {
		AOS.init({
			duration: 600,
			offset: 0,
			once: true,
		})
	}, [])

	return null
}

export default AosProvider
