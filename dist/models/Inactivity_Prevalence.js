'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var Inactivity_Prevalence = sequelize.define('Inactivity_Prevalence_health', {
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
    return Inactivity_Prevalence;
};
//# sourceMappingURL=Inactivity_Prevalence.js.map