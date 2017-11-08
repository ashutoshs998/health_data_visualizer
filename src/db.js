import Sequelize from "sequelize";
import models from "./models";
import Diagnosed_Diabetes_Prevalence from "./models/Diabetes_Prevalence.js";
import Diabetes_Incidence from "./models/Diabetes_Incidence.js";
import Obesity_Prevalence from "./models/Obesity_Prevalence.js";
import Inactivity_Prevalence from "./models/Inactivity_Prevalence.js";
import Diabetes_Prevalence_by_Sex from "./models/Diabetes_Prevalence_by_Sex.js";
import Inactivity_Prevalence_by_Sex from "./models/Inactivity_Prevalence_by_Sex.js";
import Obesity_Prevalence_by_Sex from "./models/Obesity_Prevalence_by_Sex.js";

const db = {};

const sequelize = new Sequelize('node_sample', 'hr_recruit_dev', 'recruitdev@123', { dialect: 'mysql', host: "5.9.144.226" });
Object.keys(models).forEach((modelName) => {
    const model = models[modelName](sequelize, Sequelize.DataTypes);
    db[modelName] = model;
});
Object.keys(db).forEach((modelName) => {
    if (db[modelName].options.associate) {
        db[modelName].options.associate(db);
    }
});

sequelize.sync().then((data) => {})
export default Object.assign({}, db, {
    sequelize,
    Sequelize
});