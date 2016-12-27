const CUTOFF_HOUR = 4;

const hrsToMs = hrs => 1000 * 60 * 60 * hrs;
const ONE_DAY = hrsToMs(24);

const today = () => {
	const stamp = Date.now();
	return Math.floor(stamp / ONE_DAY);
};

export const todaysCutoff = () => {
	const dayNum     = today(),
	      dayStamp   = dayNum * ONE_DAY,
	      cutoffTime = dayStamp + hrsToMs(CUTOFF_HOUR);

	if (cutoffTime < Date.now()) {
		return cutoffTime;
	} else {
		return cutoffTime - ONE_DAY;
	}
};
