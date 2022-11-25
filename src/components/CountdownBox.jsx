export const CountdownBox = ({ number, text }) => {
	return (
		<>
			<article className='bg-neutral-desatured-blue rounded-2xl m-1 h-16 w-16 flex justify-between flex-col gap-3 items-center md:h-40 md:w-40 '>
				<p className='text-4xl p-3 md:text-8xl md:p-7'>{number}</p>
				<small className='text-primary-grayish text-[8px] tracking-widest md:text-lg mt-3'>{text}</small>
				<div className='fixed mr-16 bottom-[460px] md:mr-40 md:bottom-[450px] h-3 w-3 bg-neutral-dark-blue rounded-full'></div>
				<div className='fixed ml-16 bottom-[460px] md:ml-40 md:bottom-[450px] h-3 w-3 bg-neutral-dark-blue rounded-full'></div>
			</article>
		</>
	);
};
