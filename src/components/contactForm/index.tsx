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
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactFormSchema = z.object({
	name: z.string().min(1, 'O nome é obrigatório.'),
	email: z.string().email('O email é obrigatório.'),
	description: z.string().min(1, 'A descrição é obrigatória.'),
})

export type ContactFormType = z.infer<typeof contactFormSchema>

const ContactForm = () => {
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
				title: `Ficamos felizes em saber que você se interessou pelo nosso trabalho, ${name}.`,
				description:
					'Seu email foi enviado com sucesso! Aguarde nossa resposta.',
			})
		},
		onError: (error, { name }) => {
			toast({
				title: `Aconteceu um erro ao enviar email, ${name}.`,
				description:
					'Verifique sua conexao com a internet e tente novamente mais tarde.',
				color: 'red',
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
			name,
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
							<FormLabel>Nome</FormLabel>
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
							<FormLabel>Email</FormLabel>
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
							<FormLabel>Descrição breve do projeto</FormLabel>
							<FormControl>
								<Textarea className='min-h-40' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					className='w-full py-6 font-bold'
					type='submit'
					disabled={form.formState.isSubmitting}
				>
					Enviar
				</Button>
			</form>
		</Form>
	)
}

export default ContactForm
