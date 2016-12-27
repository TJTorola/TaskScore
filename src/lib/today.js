const CUTOFF_HOUR = 4;

const today = () => {
	const stamp = Date.now();
	return Math.floor(stamp / (1000 * 60 * 60 * 24));
};

export const todaysCutoff = () => {
	const dayNum = today(),
	      dayStamp = dayNum * 1000 * 60 * 60 * 24;

	return dayStamp + (CUTOFF_HOUR * 1000 * 60 * 60);
};
