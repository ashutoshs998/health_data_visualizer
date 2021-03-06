'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var Obesity_Prevalence = sequelize.define('Obesity_Prevalence_health', {
        state: { type: DataTypes.STRING },
        FIPS_code: { type: DataTypes.STRING },
        county: { type: DataTypes.STRING },
        number: { type: DataTypes.STRING },
        percent: { type: DataTypes.STRING },
        lower_confidence_limit: { type: DataTypes.STRING },
        upper_confidence_limit: { type: DataTypes.STRING },
        age_adjusted_percent: { type: DataTypes.STRING },
        age_adjusted_lower_confidence_limit: { type: DataTypes.STRING },
        age_adjusted_upper_confidence_limit: { type: DataTypes.STRING },
        year: { type: DataTypes.STRING }
    });
    return Obesity_Prevalence;
};
//# sourceMappingURL=Obesity_Prevalence.js.map