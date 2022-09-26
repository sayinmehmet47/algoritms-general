function countingSundays(firstYear, lastYear) {
  let days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const startDaysMonths = [
    1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335,
  ];
  const startDaysMonthsLeap = [
    1, 32, 61, 92, 122, 153, 183, 214, 245, 275, 306, 336,
  ];

  let firstDayOfYear = (year) => {
    let yearDays = {};
    let index = 0;
    let last = 0;

    for (let i = 1900; i < 2000; i++) {
      index = last % 7;
      Object.assign(yearDays, { [i]: days[index] });
      if (i % 4 === 0 && i !== 1900) {
        last = last + 2;
      } else {
        last++;
      }
    }
    return yearDays[year];
  };

  const NumberOfSundayInYear = (year) => {
    const leapYear = year % 4 === 0 ? true : false;
    const totalDays = leapYear ? 366 : 365;
    const firstDay = days.indexOf(firstDayOfYear(year));
    let index = 0;
    let current = firstDay;
    let SundayNumber = 0;
    for (let i = 0; i < totalDays + 1; i++) {
      index = current % 7;
      if (days[index] === 'Sunday') {
        if (!leapYear && startDaysMonths.includes(i + 1)) {
          SundayNumber++;
        }
        if (leapYear && startDaysMonthsLeap.includes(i + 1)) {
          SundayNumber++;
        }
      }
      current++;
    }
    return SundayNumber;
  };

  let countingSundayArray = [];

  for (let index = firstYear; index < lastYear + 1; index++) {
    countingSundayArray.push(NumberOfSundayInYear(index));
  }

  return countingSundayArray.reduce((a, b) => a + b);
}

console.log(countingSundays(1943, 1946));
