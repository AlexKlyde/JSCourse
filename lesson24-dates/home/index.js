// Algo
// 1. get the time difference in milliseconds by subtracting two Date objects 
//  1.2 divide it by 1000 to get only seconds.
// 2. calculate (and subtract) days
// 3. calculate (and subtract) hours
// 4. calculate (and subtract) hours
// 5. what is left in differance variable save it to seconds;
// return string interpolation with values of days, hours, minutes and seconds

const getDiff = (startDate, endDate) => {
  let difference = Math.abs(endDate - startDate) / 1000;

  const days = Math.floor(difference / 86400);
  difference -= days * 86400;

  const hours = Math.floor(difference / 3600) % 24;
  difference -= hours * 3600;

  const minutes = Math.floor(difference / 60) % 60;
  difference -= minutes * 60;

  const seconds = Math.floor(difference);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(
  getDiff(new Date('2019/10/1 04:10:00:00'), new Date('2019/10/2 18:20:30')),
);

// function timeDiffCalc(dateFuture, dateNow) {
//   let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
//   console.log(diffInMilliSeconds);

//   // calculate days
//   const days = Math.floor(diffInMilliSeconds / 86400);
//   diffInMilliSeconds -= days * 86400;
//   console.log(diffInMilliSeconds);
//   console.log('calculated days', days);

//   // calculate hours
//   const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
//   diffInMilliSeconds -= hours * 3600;
//   console.log('calculated hours', hours);

//   // calculate minutes
//   const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
//   diffInMilliSeconds -= minutes * 60;
//   console.log('minutes', minutes);

//   let difference = '';
//   if (days > 0) {
//     difference += days === 1 ? `${days} day, ` : `${days} days, `;
//   }

//   difference +=
//     hours === 0 || hours === 1 ? `${hours} hour, ` : `${hours} hours, `;

//   difference +=
//     minutes === 0 || hours === 1 ? `${minutes} minutes` : `${minutes} minutes`;

//   return difference;
// }

// console.log(
//   timeDiffCalc(new Date('2019/10/1 04:10:00'), new Date('2019/10/2 18:20:00')),
// );

// the time difference is:
// 1 day, 14 hours, 10 minutes
