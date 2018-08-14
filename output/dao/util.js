'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.findUser = findUser;
exports.find = find;
exports.findOne = findOne;
exports.save = save;
function add(Model, config, callback) {
  var record = new Model(config);
  record.save(function (err, data) {
    if (err) {
      console.error(err);
    }
    console.log(data + '\u521B\u5EFA\u6210\u529F');
    if (callback) {
      callback(data);
    }
  });
}

function findUser(Model, config, callback) {
  var username = config.username,
      password = config.password;

  Model.findOne({ $or: [{ username: username }, { mobile: username }] }, function (err, data) {
    if (err) {
      console.error(err);
    }
    if (data.password == password) {
      var obj = {
        success: true,
        msg: '登陆成功'
      };
      callback(obj);
    } else {
      var _obj = {
        success: true,
        msg: '账号或密码错误'
      };
      callback(_obj);
    }
  });
}

function find(Model, obj, callback) {
  Model.find(obj, function (err, data) {
    if (err) {
      console.error(err);
    }
    if (callback) {
      callback(data);
    }
  });
}

function findOne(Model, obj, callback) {
  Model.findOne(obj, function (err, data) {
    if (err) {
      console.error(err);
    }
    if (callback) {
      callback(data);
    }
  });
}

function save(model, callback) {
  model.save(function (err, data) {
    if (err) {
      console.error(err);
    }
    console.log(data);
    if (callback) {
      callback(data);
    }
  });
}