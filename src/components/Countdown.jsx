import { CountdownBox } from './CountdownBox';

export const Countdown = ({ days, hours, minutes, seconds }) => {
	return (
		<>
			<section className='font-red-hat text-center uppercase'>
				<h1 className=' text-neutral-white tracking-widest text-2xl m-8 md:mb-20'>WE'RE LAUNCHING SOON</h1>
				<div className='flex justify-center text-primary-soft-red gap-5'>
					<CountdownBox number={days} text={'days'} />
					<CountdownBox number={hours} text={'hours'} />
					<CountdownBox number={minutes} text={'minutes'} />
					<CountdownBox number={seconds} text={'seconds'} />
				</div>
			</section>
		</>
	);
};
