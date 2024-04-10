export const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

export const transKorTime = (kor_time: string) => {
  if (!kor_time) {
    return {
      hh: 0,
      mm: 0,
    };
  }

  let hh = Number(kor_time.split("시간")[0]);
  let mm = Number(kor_time.split("시간")[1].split("분")[0]);

  return {
    hh,
    mm,
  };
};
export const getSaveTime = (kor_time: string) => {
  if (!kor_time) {
    return [50, 0];
  }

  const availableTime = 50 * 60; // h to min

  const { hh, mm } = transKorTime(kor_time);

  let spentTime = hh * 60 + mm;
  let saveTime = availableTime - spentTime;

  return [saveTime, spentTime];
};

export const getDecreasePercentTime = (time1: string, time2: string) => {
  if (typeof time1 !== "string" || typeof time2 !== "string") {
    return {
      isPossible: false,
    };
  }

  const { hh: prevHH, mm: prevMM } = transKorTime(time1);
  const { hh: nextHH, mm: nextMM } = transKorTime(time2);

  const calTime1 = prevHH * 60 + prevMM;
  const calTime2 = nextHH * 60 + nextMM;

  const decrease = calTime1 - calTime2;
  const decreasePercentage = (decrease / calTime1) * 100;

  return {
    isPossible: true,
    percentage: decreasePercentage.toFixed(2),
  };
};
