"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _models = require("./models");

var _models2 = _interopRequireDefault(_models);

var _Diabetes_Prevalence = require("./models/Diabetes_Prevalence.js");

var _Diabetes_Prevalence2 = _interopRequireDefault(_Diabetes_Prevalence);

var _Diabetes_Incidence = require("./models/Diabetes_Incidence.js");

var _Diabetes_Incidence2 = _interopRequireDefault(_Diabetes_Incidence);

var _Obesity_Prevalence = require("./models/Obesity_Prevalence.js");

var _Obesity_Prevalence2 = _interopRequireDefault(_Obesity_Prevalence);

var _Inactivity_Prevalence = require("./models/Inactivity_Prevalence.js");

var _Inactivity_Prevalence2 = _interopRequireDefault(_Inactivity_Prevalence);

var _Diabetes_Prevalence_by_Sex = require("./models/Diabetes_Prevalence_by_Sex.js");

var _Diabetes_Prevalence_by_Sex2 = _interopRequireDefault(_Diabetes_Prevalence_by_Sex);

var _Inactivity_Prevalence_by_Sex = require("./models/Inactivity_Prevalence_by_Sex.js");

var _Inactivity_Prevalence_by_Sex2 = _interopRequireDefault(_Inactivity_Prevalence_by_Sex);

var _Obesity_Prevalence_by_Sex = require("./models/Obesity_Prevalence_by_Sex.js");

var _Obesity_Prevalence_by_Sex2 = _interopRequireDefault(_Obesity_Prevalence_by_Sex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = {};

var sequelize = new _sequelize2.default('node_sample', 'hr_recruit_dev', 'recruitdev@123', { dialect: 'mysql', host: "5.9.144.226" });
Object.keys(_models2.default).forEach(function (modelName) {
    var model = _models2.default[modelName](sequelize, _sequelize2.default.DataTypes);
    db[modelName] = model;
});
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].options.associate) {
        db[modelName].options.associate(db);
    }
});

sequelize.sync().then(function (data) {});
exports.default = Object.assign({}, db, {
    sequelize: sequelize,
    Sequelize: _sequelize2.default
});
//# sourceMappingURL=db.js.map