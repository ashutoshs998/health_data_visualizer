'use strict';

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

    counties: function counties(req, res, next) {
        _db2.default.Diabetes_Prevalence.findAll({
            attributes: [[_sequelize2.default.fn('DISTINCT', _sequelize2.default.col('county')), 'county']]
        }).then(function (data) {
            res.json({ error: 0, message: "counties fetched", data: data });
        }).catch(function (err) {
            return next(err);
        });
    },

    search_county: function search_county(req, res, next) {
        _db2.default.Diabetes_Prevalence.findAll({
            where: { county: { $like: '%' + req.body.county + '%' } },
            attributes: [[_sequelize2.default.fn('DISTINCT', _sequelize2.default.col('county')), 'county']]
        }).then(function (data) {
            res.json({ error: 0, message: "counties found", data: data });
        }).catch(function (err) {
            return next(err);
        });
    },

    add_fav: function add_fav(req, res, next) {
        _db2.default.fav_county.find({ county: req.body.county }).then(function (exist) {
            if (exist) {
                res.json({ error: 1, message: "already exist in favourite list" });
            } else {
                _db2.default.fav_county.create({
                    county: req.body.county
                }).then(function (data) {
                    res.json({ error: 0, message: "county added to favourites", result: data });
                }).catch(function (err) {
                    return next(err);
                });
            }
        });
    },

    get_fav: function get_fav(req, res, next) {
        _db2.default.fav_county.findAll({}).then(function (fav_county) {
            res.json({ error: 0, message: "favourite counties", data: fav_county });
        });
    },

    get_data_by_county: function get_data_by_county(req, res, next) {
        _db2.default.Diabetes_Incidence.findAll({ where: { county: req.body.county, year: 2013 } }).then(function (Diabetes_Incidence) {
            _db2.default.Diabetes_Prevalence.findAll({ where: { county: req.body.county, year: 2013 } }).then(function (Diabetes_Prevalence) {
                _db2.default.Diabetes_Prevalence_by_Sex.findAll({ where: { county: req.body.county, year: 2013 } }).then(function (Diabetes_Prevalence_by_Sex) {
                    _db2.default.Inactivity_Prevalence.findAll({ where: { county: req.body.county, year: 2013 } }).then(function (Inactivity_Prevalence) {
                        _db2.default.Inactivity_Prevalence_by_Sex.findAll({ where: { county: req.body.county, year: 2013 } }).then(function (Inactivity_Prevalence_by_Sex) {
                            _db2.default.Obesity_Prevalence.findAll({ where: { county: req.body.county, year: 2013 } }).then(function (Obesity_Prevalence) {
                                _db2.default.Obesity_Prevalence_by_Sex.findAll({ where: { county: req.body.county, year: 2013 } }).then(function (Obesity_Prevalence_by_Sex) {
                                    res.json({
                                        error: 0,
                                        message: "data fetched by county",
                                        Diabetes_Incidence: Diabetes_Incidence,
                                        Diabetes_Prevalence: Diabetes_Prevalence,
                                        Diabetes_Prevalence_by_Sex: Diabetes_Prevalence_by_Sex,
                                        Inactivity_Prevalence: Inactivity_Prevalence,
                                        Inactivity_Prevalence_by_Sex: Inactivity_Prevalence_by_Sex,
                                        Obesity_Prevalence: Obesity_Prevalence,
                                        Obesity_Prevalence_by_Sex: Obesity_Prevalence_by_Sex
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }).catch(function (err) {
            return next(err);
        });
    },

    get_chart: function get_chart(req, res, next) {
        _db2.default.Diabetes_Incidence.findAll({ where: { county: req.body.county } }).then(function (Diabetes_Incidence) {
            _db2.default.Diabetes_Prevalence.findAll({ where: { county: req.body.county } }).then(function (Diabetes_Prevalence) {
                _db2.default.Diabetes_Prevalence_by_Sex.findAll({ where: { county: req.body.county } }).then(function (Diabetes_Prevalence_by_Sex) {
                    _db2.default.Inactivity_Prevalence.findAll({ where: { county: req.body.county } }).then(function (Inactivity_Prevalence) {
                        _db2.default.Inactivity_Prevalence_by_Sex.findAll({ where: { county: req.body.county } }).then(function (Inactivity_Prevalence_by_Sex) {
                            _db2.default.Obesity_Prevalence.findAll({ where: { county: req.body.county } }).then(function (Obesity_Prevalence) {
                                _db2.default.Obesity_Prevalence_by_Sex.findAll({ where: { county: req.body.county } }).then(function (Obesity_Prevalence_by_Sex) {
                                    res.json({
                                        error: 0,
                                        message: "data fetched by county",
                                        Diabetes_Incidence: Diabetes_Incidence,
                                        Diabetes_Prevalence: Diabetes_Prevalence,
                                        Diabetes_Prevalence_by_Sex: Diabetes_Prevalence_by_Sex,
                                        Inactivity_Prevalence: Inactivity_Prevalence,
                                        Inactivity_Prevalence_by_Sex: Inactivity_Prevalence_by_Sex,
                                        Obesity_Prevalence: Obesity_Prevalence,
                                        Obesity_Prevalence_by_Sex: Obesity_Prevalence_by_Sex
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }).catch(function (err) {
            return next(err);
        });
    }
};
//# sourceMappingURL=all_counties.js.map