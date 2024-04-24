import { Button } from '../ui/button'

const HeroSection: React.FC = () => {
	return (
		<section className='space-y-4 p-10 pt-16 text-center'>
			<p className='text-4xl font-bold'>
				Criando produtos digitais, fortalecendo a marca e aprimorando
				experiências.
			</p>
			<p className='text-sm font-medium text-gray-400'>
				Sou especialista em <span className='text-green-300'>Web Designer</span>{' '}
				e <span className='text-green-300'>Desenvolvimento Full Stack.</span>
			</p>
			<Button className='font-bold shadow-[rgba(5,162,194,0.3)_-8px_0px_20px_0px,rgba(112,225,200,0.3)_0px_0px_20px_0px,rgba(255,178,36,0.3)_8px_0px_20px_0px]'>
				Entrar em contato
			</Button>
		</section>
	)
}

export default HeroSection
