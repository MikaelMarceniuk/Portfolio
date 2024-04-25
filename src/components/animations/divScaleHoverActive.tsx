interface IDivScaleHoverActiveProps {
	children: React.ReactNode
}

const DivScaleHoverActive: React.FC<IDivScaleHoverActiveProps> = ({
	children,
}) => {
	return (
		<div className='transition-all active:scale-90 lg:hover:scale-110'>
			{children}
		</div>
	)
}

export default DivScaleHoverActive
