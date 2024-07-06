import {
  formatDistanceToNow,
  parseISO,
} from 'date-fns';

export const formatDateToDistance = (date: string) => {
  let timeAgo = 'Invalid date';

  try {
    const parsedDate = parseISO(date);
    if (!isNaN(parsedDate.getTime())) {
      timeAgo = formatDistanceToNow(parsedDate, { addSuffix: true });
    }
  } catch (error) {
    console.error('Error parsing date:', error);
  }

  return timeAgo;
};
