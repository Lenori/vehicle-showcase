import moment from 'moment';

function convertToIso(dateString: string): string {
    const parts: string[] = dateString.split(/[/ :-]/);

    const year: number = parseInt(parts[0]);
    const month: number = parseInt(parts[1]) - 1;
    const day: number = parseInt(parts[2]);
    const hours: number = parseInt(parts[3] || '0');
    const minutes: number = parseInt(parts[4] || '0');
    const seconds: number = parseInt(parts[5] || '0');

    const date: Date = new Date(year, month, day, hours, minutes, seconds);

    return date.toISOString();
}

export function countDown(date: string) {
    const targetDate = moment(convertToIso(date));

    const now = moment();

    const difference = targetDate.diff(now);

    const days = Math.floor(Math.abs(difference / (1000 * 60 * 60 * 24)));
    const hours = Math.floor(
        Math.abs(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    const formattedString = `${days} day${days !== 1 ? 's' : ''} ${hours} hour${hours !== 1 ? 's' : ''}`;

    return formattedString;
}
