export function add(Model, config , callback){
  let record = new Model(config)
  record.save(function(err, data){
    if(err){
      console.error(err)
    }
    console.log(`${data}创建成功`)
    if(callback){
      callback(data)
    }
  })
}

export function findUser(Model, config, callback){
  let {username, password} = config
  Model.findOne({$or:[{username},{mobile:username}]}, function(err, data){
    if(err){
      console.error(err)
    }
    if(data.password == password){
      let obj = {
        success: true,
        msg: '登陆成功'
      }
      callback(obj)
    }else{
      let obj = {
        success: true,
        msg: '账号或密码错误'
      }
      callback(obj)
    }
  })
}

export function find(Model, obj, callback){
    Model.find(obj, function(err, data){
      if(err){
        console.error(err)
      }
      if(callback){
        callback(data)
      }
    })
}

export function findOne(Model, obj, callback){
  Model.findOne(obj, function(err, data){
    if(err){
      console.error(err)
    }
    if(callback){
      callback(data)
    }
  })
}

export function save(model, callback){
  model.save(function(err, data){
    if(err){
      console.error(err)
    }
    console.log(data)
    if(callback){
      callback(data)
    }
  })
}