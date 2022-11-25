import instagram from '../images/icon-instagram.svg';
import facebook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';

export const Footer = () => {
	return (
		<>
			<footer className='h-40 bg-hills'>
				<div className='flex justify-center mt-14'>
					<img src={facebook} alt='facebookicon' className='logo w-6 h-6 m-5' />
					<img src={pinterest} alt='pinteresticon' className='logo w-6 h-6 m-5' />
					<img src={instagram} alt='instagramicon' className='logo w-6 h-6 m-5' />
				</div>
			</footer>
		</>
	);
};
