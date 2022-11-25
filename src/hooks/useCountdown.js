import { useEffect, useState } from 'react';

export const useCountdown = () => {
	const [countdown, setCountdown] = useState({
		days: '',
		hours: '',
		minutes: '',
		seconds: '',
	});

	const newYear = new Date('Jan 1, 2023 00:00:00').getTime();
	const now = new Date().getTime();
	const timeLeft = newYear - now;
	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	useEffect(() => {
		const countdownInterval = setInterval(() => {
			setCountdown({ days, hours, minutes, seconds });
		}, 1000);
		return () => {
			clearInterval(countdownInterval);
		};
	}, [countdown]);

	return {
		days,
		hours,
		minutes,
		seconds,
	};
};
