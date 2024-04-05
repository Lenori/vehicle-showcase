import moment from 'moment';

export function countDown(targetDate: string) {
    const now = moment();
    const futureDate = moment(targetDate);

    if (futureDate.diff(now) < 0) {
        return 0;
    }

    const duration = futureDate.diff(now, 'days', true);

    const days = Math.floor(duration);

    return `${days} days`;
}
