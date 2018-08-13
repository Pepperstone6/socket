export function verifyRegister(str, msg, callback){
  if(!str){
    let obj = {
      success: true,
      msg
    }
    callback(obj)
    return
  }
}
