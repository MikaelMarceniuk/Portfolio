import { SectionTitle, SectionWrapper } from '@/components/baseSection'
import { Button } from '../../../../components/ui/button'

const HeroSection: React.FC = () => {
	return (
		<SectionWrapper className='pt-16'>
			<SectionTitle title='Criando produtos digitais, fortalecendo a marca e aprimorando experiências.' />
			<p className='text-sm font-medium text-gray-400'>
				Sou especialista em <span className='text-green-300'>Web Designer</span>{' '}
				e <span className='text-green-300'>Desenvolvimento Full Stack.</span>
			</p>
			<Button className='font-bold shadow-[rgba(5,162,194,0.3)_-8px_0px_20px_0px,rgba(112,225,200,0.3)_0px_0px_20px_0px,rgba(255,178,36,0.3)_8px_0px_20px_0px]'>
				Entrar em contato
			</Button>
		</SectionWrapper>
	)
}

export default HeroSection
