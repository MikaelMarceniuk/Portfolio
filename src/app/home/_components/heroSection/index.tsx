import DivScaleHoverActive from '@/components/animations/divScaleHoverActive'
import {
	SectionSubtitle,
	SectionTitle,
	SectionWrapper,
} from '@/components/baseSection'
import Link from 'next/link'
import { Button } from '../../../../components/ui/button'

const HeroSection: React.FC = () => {
	return (
		<SectionWrapper>
			<SectionTitle title='Criando produtos digitais, fortalecendo a marca e aprimorando experiências.' />
			<SectionSubtitle>
				Sou especialista em <span className='text-green-300'>Web Designer</span>{' '}
				e <span className='text-green-300'>Desenvolvimento Full Stack.</span>
			</SectionSubtitle>

			<DivScaleHoverActive>
				<Button data-aos='fade-left' className='font-bold shadow-service-card'>
					<Link href='/contact'>Entrar em contato</Link>
				</Button>
			</DivScaleHoverActive>
		</SectionWrapper>
	)
}

export default HeroSection
