'use strict';

const addPropertyV1 = (obj, key, value) => { 
  obj[key] = value;
  return obj;
}

const addPropertyV2 = (obj, key, value) => {
  return Object.assign(obj, { [key]: value });
}

