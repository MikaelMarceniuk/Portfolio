import { cn } from '@/lib/utils'

interface IDivScaleHoverActiveProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

const DivScaleHoverActive: React.FC<IDivScaleHoverActiveProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				'transition-all active:scale-90 lg:hover:scale-110',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export default DivScaleHoverActive
