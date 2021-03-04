export const differenceBetweenDates = (date: string): string => {
  let timeDifference: number = Math.floor(
    (Date.now() - Date.parse(date)) / (1000 * 60 * 60 * 24)
  );
  let word: string = timeDifference > 1 ? "days" : "day";

  return timeDifference.toString() + " " + word;
};

export const paramsToString = (payload: any): string => {
  let payloadInString = "";

  for (let item in payload) {
    payloadInString = payloadInString + `${item}=${payload[item]}&`;
  }
  return `?${payloadInString}`;
};
