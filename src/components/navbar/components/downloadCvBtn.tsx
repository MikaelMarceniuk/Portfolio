import { DownloadSimple } from "phosphor-react"
import { useTheme } from "styled-components"
import BaseBtnWrapper from "./baseBtnWrapper"

const DownloadCvBtn = () => {
	const { colors } = useTheme()

	return (
		<BaseBtnWrapper>
			<DownloadSimple
				color={colors.gray900}
				size={18} 
				weight="bold"
			/>
		</BaseBtnWrapper>
	)
}

export default DownloadCvBtn