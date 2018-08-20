export function add(Model, config, callback) {
  return new Promise((resolve, reject) => {
    let record = new Model(config)
    record.save(function (err, data) {
      if (err) {
        console.error(err)
      }
      if (callback) {
        callback(data)
      }
      resolve(data)
    })
  })
}

export function findUser(Model, config, callback) {
  let {
    username,
    password
  } = config
  Model.findOne({
    $or: [{
      username
    }, {
      mobile: username
    }]
  }, function (err, data) {
    if (err) {
      console.error(err)
    }
    if (data && data.password == password) {
      let obj = {
        success: true,
        username: data.username,
        nickname: data.nickname,
        avatar: data.avatar
      }
      callback(obj)
    } else {
      let obj = {
        success: false,
        msg: '账号或密码错误'
      }
      callback(obj)
    }
  })
}

export function find(Model, obj, callback) {
  return new Promise((resolve, reject) => {
    Model.find(obj, function (err, data) {
      if (err) {
        console.error(err)
        reject(err)
      }
      if (callback) {
        callback(data)
      }
      resolve(data)
    })
  })
}

export function findOne(Model, obj, callback) {
  Model.findOne(obj, function (err, data) {
    if (err) {
      console.error(err)
    }
    if (callback) {
      callback(data)
    }
  })
}

export function save(model, callback) {
  model.save(function (err, data) {
    if (err) {
      console.error(err)
    }
    console.log(data)
    if (callback) {
      callback(data)
    }
  })
}

export function findVerify(Model, config, callback) {
  return new Promise((resolve, reject) => {
    Model.findOne(config, function (err, data) {
      if (err) {
        console.error(err)
      }
      resolve(data)
      reject(data)
    })
  })
}
