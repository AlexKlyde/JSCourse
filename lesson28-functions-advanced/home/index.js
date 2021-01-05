/* const shmoment = date => {
  let years = date.getFullYear();
  let months = date.getMonth();
  let days = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();

  const calculator = {
    add(dateType, num) {
      switch (dateType) {
        case 'years':
          years += num;
          break;
        case 'months':
          months += num;
          break;
        case 'days':
          days += num;
          break;
        case 'hours':
          hours += num;
          break;
        case 'minutes':
          minutes += num;
          break;
        case 'seconds':
          seconds += num;
          break;
        case 'milliseconds':
          milliseconds += num;
          break;

        default:
      }
      return this;
    },

    subtract(dateType, num) {
      switch (dateType) {
        case 'years':
          years -= num;
          break;
        case 'months':
          months -= num;
          break;
        case 'days':
          days -= num;
          break;
        case 'hours':
          hours -= num;
          break;
        case 'minutes':
          minutes -= num;
          break;
        case 'seconds':
          seconds -= num;
          break;
        case 'milliseconds':
          milliseconds -= num;
          break;

        default:
      }
      return this;
    },

    result() {
      return new Date(
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
      );
    },
  };

  return calculator;
};

console.log(
  shmoment(new Date(2020, 0, 7, 17, 17, 17, 30))
    .add('milliseconds', 5)
    .result(),
);
 */

const shmoment = date => {
  const result = {
    years: date.getFullYear(),
    months: date.getMonth(),
    days: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds(),
  };

  const calculator = {
    add(dateType, num) {
      result[dateType] += num;
      return this;
    },

    subtract(dateType, num) {
      result[dateType] -= num;
      return this;
    },

    result() {
      return new Date(...Object.values(result));
    },
  };

  return calculator;
};

console.log(
  shmoment(new Date(2020, 0, 7, 17, 17, 17, 30))
    .add('minutes', 5)
    .subtract('years', 3)
    .result(),
);
