// Write your solution in this file!

let driver={};
function updateDriverWithKeyAndValue(driver,key,value){
    return Object.assign({}, driver, { [key]: value });
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
    driver[key]=value;
    return driver;
}
function deleteFromDriverByKey(driver,key){
 const newObj = {...driver};
  delete newObj[key];
  return newObj;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}

const driver = {};
function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({},driver,{[key]:value})
}
function destructivelyUpdateDriverWithKeyAndValue(driver , key, value){
    driver[key]= value;
    return driver;
}
function deleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver ;
}
>>>>>>> 90da62fa12ef2f6e969f0f045597ebcb77fd89ba
