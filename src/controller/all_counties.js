import db from '../db';
import Sequelize from "sequelize";

module.exports = {

    counties: (req, res, next) => {
        db.Diabetes_Prevalence.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('county')), 'county'],
            ],
        }).then((data) => {
            res.json({ error: 0, message: "counties fetched", data: data })
        }).catch(err => next(err))
    },

    search_county: (req, res, next) => {
        db.Diabetes_Prevalence.findAll({
            where: { county: { $like: '%' + req.body.county + '%' } },
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('county')), 'county'],
            ],
        }).then((data) => {
            res.json({ error: 0, message: "counties found", data: data })
        }).catch(err => next(err))
    },

    add_fav: (req, res, next) => {
        db.fav_county.create({
            county: req.body.county
        }).then((data) => {
            res.json({ error: 0, message: "county added to favourites", result: data })
        }).catch(err => next(err));
    },

    get_fav: (req, res, next) => {
        db.fav_county.findAll({}).then((fav_county) => {
            res.json({ error: 0, message: "favourite counties", data: fav_county });
        })
    },

    get_data_by_county: (req, res, next) => {
        db.Diabetes_Incidence.findAll({ where: { county: req.body.county, year: 2013 } }).then((Diabetes_Incidence) => {
            db.Diabetes_Prevalence.findAll({ where: { county: req.body.county, year: 2013 } }).then((Diabetes_Prevalence) => {
                db.Diabetes_Prevalence_by_Sex.findAll({ where: { county: req.body.county, year: 2013 } }).then((Diabetes_Prevalence_by_Sex) => {
                    db.Inactivity_Prevalence.findAll({ where: { county: req.body.county, year: 2013 } }).then((Inactivity_Prevalence) => {
                        db.Inactivity_Prevalence_by_Sex.findAll({ where: { county: req.body.county, year: 2013 } }).then((Inactivity_Prevalence_by_Sex) => {
                            db.Obesity_Prevalence.findAll({ where: { county: req.body.county, year: 2013 } }).then((Obesity_Prevalence) => {
                                db.Obesity_Prevalence_by_Sex.findAll({ where: { county: req.body.county, year: 2013 } }).then((Obesity_Prevalence_by_Sex) => {
                                    res.json({
                                        error: 0,
                                        message: "data fetched by county",
                                        Diabetes_Incidence: Diabetes_Incidence,
                                        Diabetes_Prevalence,
                                        Diabetes_Prevalence_by_Sex,
                                        Inactivity_Prevalence,
                                        Inactivity_Prevalence_by_Sex,
                                        Obesity_Prevalence,
                                        Obesity_Prevalence_by_Sex
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }).catch(err => next(err));
    },

    get_chart: (req, res, next) => {
        db.Diabetes_Incidence.findAll({ where: { county: req.body.county } }).then((Diabetes_Incidence) => {
            db.Diabetes_Prevalence.findAll({ where: { county: req.body.county } }).then((Diabetes_Prevalence) => {
                db.Diabetes_Prevalence_by_Sex.findAll({ where: { county: req.body.county } }).then((Diabetes_Prevalence_by_Sex) => {
                    db.Inactivity_Prevalence.findAll({ where: { county: req.body.county } }).then((Inactivity_Prevalence) => {
                        db.Inactivity_Prevalence_by_Sex.findAll({ where: { county: req.body.county } }).then((Inactivity_Prevalence_by_Sex) => {
                            db.Obesity_Prevalence.findAll({ where: { county: req.body.county } }).then((Obesity_Prevalence) => {
                                db.Obesity_Prevalence_by_Sex.findAll({ where: { county: req.body.county } }).then((Obesity_Prevalence_by_Sex) => {
                                    res.json({
                                        error: 0,
                                        message: "data fetched by county",
                                        Diabetes_Incidence: Diabetes_Incidence,
                                        Diabetes_Prevalence,
                                        Diabetes_Prevalence_by_Sex,
                                        Inactivity_Prevalence,
                                        Inactivity_Prevalence_by_Sex,
                                        Obesity_Prevalence,
                                        Obesity_Prevalence_by_Sex
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }).catch(err => next(err));
    }
}