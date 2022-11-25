import { useCountdown } from './hooks/useCountdown';
import { Countdown, Footer } from './components';

export const LaunchCountdown = () => {
	const { days, hours, minutes, seconds, prevValue } = useCountdown();

	return (
		<>
			<div className='bg-stars min-h-screen bg-neutral-dark-blue font-red-hat flex flex-col justify-between'>
				<div></div>
				<Countdown days={days} hours={hours} minutes={minutes} seconds={seconds} prevValue={prevValue} />
				<Footer />
			</div>
		</>
	);
};
