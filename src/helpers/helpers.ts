export const differenceBetweenDates = (date: string): string => {
  let timeWord: string = "hour";
  let timeDifference: number = Math.floor(
    (Date.now() - Date.parse(date)) / (1000 * 60 * 60)
  );

  if (timeDifference > 24) {
    timeDifference = Math.floor((timeDifference = timeDifference / 24));
    timeWord = "day";
  }

  let word: string = timeDifference > 1 ? `${timeWord}s` : timeWord;

  return timeDifference.toString() + " " + word;
};

export const paramsToString = (payload: any): string => {
  let payloadInString = "";

  for (let item in payload) {
    payloadInString = payloadInString + `${item}=${payload[item]}&`;
  }
  return `?${payloadInString}`;
};
