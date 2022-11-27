export const CountdownBox = ({ number, text }) => {
	return (
		<>
			<article id="bg-gradient" className='relative rounded-2xl m-1 h-16 w-16 flex justify-between flex-col gap-3 items-center md:h-40 md:w-40 '>
				<p className='text-4xl p-3 md:text-8xl md:p-7'>{number}</p>
				<small className='text-primary-grayish text-[8px] tracking-widest md:text-lg mt-3'>{text}</small>
				<div className='absolute mr-16 top-7 md:mr-40 md:top-[75px] h-3 w-3 md:h-5 md:w-5 bg-neutral-dark-blue rounded-full'></div>
				<div className='absolute ml-16 top-7 md:ml-40 md:top-[75px] h-3 w-3 md:h-5 md:w-5 bg-neutral-dark-blue rounded-full'></div>
			</article>
		</>
	);
};
