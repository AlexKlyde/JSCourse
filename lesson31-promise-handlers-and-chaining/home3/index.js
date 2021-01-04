const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

delay(3000).then(() => console.log('Done'));
