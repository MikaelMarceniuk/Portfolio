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
		<section
			className={cn('space-y-4 p-10 pt-0 text-center', className)}
			{...props}
		>
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
		<p
			className={cn('text-4xl font-bold', className)}
			data-aos='fade-up'
			{...props}
		>
			{title}
		</p>
	)
}

interface ISectionSubtitleProps
	extends React.HTMLAttributes<HTMLParagraphElement> {
	children?: React.ReactNode
}

export const SectionSubtitle: React.FC<ISectionSubtitleProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<p
			className={cn('text-sm font-medium text-gray-400', className)}
			data-aos='fade-right'
			{...props}
		>
			{children}
		</p>
	)
}
