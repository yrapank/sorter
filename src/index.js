class Sorter { 
  constructor() { 
  this.element=[]; 
  this.compareFunction1; 
  } 
  
  add(element) { 
  if(element!=undefined){ 
  this.element.push(element); 
  } 
  } 
  
  at(index) { 
  return this.element[index]; 
  } 
  
  get length() { 
  return this.element.length; 
  } 
  
  toArray() { 
  return this.element; 
  } 
  
  sort(indices) { 
    indices.sort(function(a, b) { 
      return a - b; 
      });  
  let newArr = []; 
  
  for(let i=0;i<indices.length;i++){ 
  newArr.push(this.element[indices[i]]);
  if(this.compareFunction1==undefined){ 
  newArr.sort(function(a, b) { 
    return a - b; 
    }); 
  }else{
    newArr.sort(this.compareFunction1);
      
  }
 }
  
  
  
  for(let i=0;i<indices.length;i++){ 
  this.element[indices[i]]=newArr[i]; 
  } 
  } 
  
  setComparator(compareFunction) { 
  this.compareFunction1=compareFunction; 
  } 
  }

module.exports = Sorter;