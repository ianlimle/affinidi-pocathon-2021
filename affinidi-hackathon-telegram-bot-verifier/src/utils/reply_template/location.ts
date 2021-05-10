const locationDefaultReply: string =
  'Where are you located? Please reply with North, South, East, West';

export const exactLocation = (side: string): string => {
  switch (side) {
    case 'North':
      return 'Here is the address <North>';
    case 'South':
      return 'Here is the address <South>';
    case 'East':
      return 'Here is the address <East>';
    case 'West':
      return 'Here is the address <West>';
    default:
      return 'I do not understand';
  }
};
export default locationDefaultReply;
