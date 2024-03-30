import { DownloadSimple } from "phosphor-react"
import { useTheme } from "styled-components"
import BaseBtnWrapper from "./baseBtnWrapper"
import Constants from "../../../constants"

const DownloadCvBtn = () => {
	const { colors } = useTheme()

	return (
		<BaseBtnWrapper as={'a'} href={Constants.linkToCv} target="_blank">
			<DownloadSimple
				color={colors.gray900}
				size={18} 
				weight="bold"
			/>
		</BaseBtnWrapper>
	)
}

export default DownloadCvBtn