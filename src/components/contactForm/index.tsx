'use client'

import sendContactForm from '@/api/sendContactForm'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import formatter from '@/utils/formatter'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import DivScaleHoverActive from '../animations/divScaleHoverActive'

const contactFormSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	description: z.string().min(1),
})

export type ContactFormType = z.infer<typeof contactFormSchema>

const ContactForm = () => {
	const t = useTranslations('contactForm')
	const { toast } = useToast()
	const form = useForm<ContactFormType>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			description: '',
		},
	})

	useEffect(() => {
		if (form.formState.isSubmitSuccessful) form.reset()
	}, [form.formState.isSubmitSuccessful])

	const sendContactMutation = useMutation({
		mutationFn: sendContactForm,
		onSuccess: (_, { name }) => {
			toast({
				title: t('submit.success.title', { name }),
				description: t('submit.success.description'),
			})
		},
		onError: (error, { name }) => {
			toast({
				title: t('submit.error.title', { name }),
				description: t('submit.error.description'),
			})
		},
	})

	const handleOnSubmit = async ({
		name,
		email,
		description,
	}: ContactFormType) => {
		event?.preventDefault()
		await sendContactMutation.mutate({
			name: formatter.capitalize(name),
			email,
			description,
		})
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleOnSubmit)}
				className='space-y-4 text-left'
			>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t('inputs.name.label')}</FormLabel>
							<FormControl>
								<Input className='capitalize' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t('inputs.email.label')}</FormLabel>
							<FormControl>
								<Input type='email' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t('inputs.description.label')}</FormLabel>
							<FormControl>
								<Textarea className='min-h-40' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<DivScaleHoverActive>
					<Button
						className='w-full py-6 font-bold'
						type='submit'
						disabled={form.formState.isSubmitting}
					>
						{t('submit.button.title')}
					</Button>
				</DivScaleHoverActive>
			</form>
		</Form>
	)
}

export default ContactForm
