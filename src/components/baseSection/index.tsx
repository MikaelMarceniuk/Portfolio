import { cn } from '@/lib/utils'

interface ISectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

export const SectionWrapper: React.FC<ISectionWrapperProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<section className={cn('space-y-4 p-10 text-center', className)} {...props}>
			{children}
		</section>
	)
}

interface ISectionTitleProps
	extends React.HTMLAttributes<HTMLParagraphElement> {
	title: string
}

export const SectionTitle: React.FC<ISectionTitleProps> = ({
	title,
	className,
	...props
}) => {
	return (
		<p className={cn('text-4xl font-bold', className)} {...props}>
			{title}
		</p>
	)
}
