/**
 * Get first less value in array than provided value
 * @param value Original value
 * @param array Array with values
 * @return First less value in array than provided value
 */
export default (value: number, array: number[]): number => {
  return array
    .sort((a, b) => a - b)
    .filter((item) => item < value)
    .reverse()[0];
};
