'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var Diabetes_Prevalence_by_Sex = sequelize.define('Diabetes_Prevalence_by_Sex_health', {
        state: { type: DataTypes.STRING },
        FIPS_code: { type: DataTypes.STRING },
        county: { type: DataTypes.STRING },
        number_men: { type: DataTypes.STRING },
        percent_men: { type: DataTypes.STRING },
        lower_confidence_limit_men: { type: DataTypes.STRING },
        upper_confidence_limit_men: { type: DataTypes.STRING },
        age_adjusted_percent_men: { type: DataTypes.STRING },
        age_adjusted_lower_confidence_limit_men: { type: DataTypes.STRING },
        age_adjusted_upper_confidence_limit_men: { type: DataTypes.STRING },
        number_women: { type: DataTypes.STRING },
        percent_women: { type: DataTypes.STRING },
        lower_confidence_limit_women: { type: DataTypes.STRING },
        upper_confidence_limit_women: { type: DataTypes.STRING },
        age_adjusted_percent_women: { type: DataTypes.STRING },
        age_adjusted_lower_confidence_limit_women: { type: DataTypes.STRING },
        age_adjusted_upper_confidence_limit_women: { type: DataTypes.STRING },
        year: { type: DataTypes.STRING }
    });

    return Diabetes_Prevalence_by_Sex;
};
//# sourceMappingURL=Diabetes_Prevalence_by_Sex.js.map