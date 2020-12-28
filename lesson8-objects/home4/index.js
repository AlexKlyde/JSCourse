function addPropertyV1(obj, key, value){ 
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return {...obj, [key]: value};
}
