export function setSession(key, val){
  if(typeof val === 'object'){
    val = JSON.stringify(val)
  }
  window.sessionStorage.setItem(key, val)
}

export function getSession(key){
  try{
     JSON.parse(window.sessionStorage.getItem(key))
  }catch(e){
    return window.sessionStorage.getItem(key)
  }
  //  window.sessionStorage.getItem(key)
  return JSON.parse(window.sessionStorage.getItem(key))
}

export function removeSession(arr){
  if(arr instanceof Array){
    arr.forEach((item)=>{
      window.sessionStorage.removeItem(item)
    })
  }else{
    window.sessionStorage.removeItem(arr)
  }
}