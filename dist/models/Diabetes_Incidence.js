'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var Diabetes_Incidence = sequelize.define('Diabetes_Incidence_health', {
        state: { type: DataTypes.STRING },
        FIPS_code: { type: DataTypes.STRING },
        county: { type: DataTypes.STRING },
        number: { type: DataTypes.STRING },
        per_thousand: { type: DataTypes.STRING },
        lower_confidence_limit: { type: DataTypes.STRING },
        upper_confidence_limit: { type: DataTypes.STRING },
        age_adjusted_per_thousand: { type: DataTypes.STRING },
        age_adjusted_lower_confidence_limit: { type: DataTypes.STRING },
        age_adjusted_upper_confidence_limit: { type: DataTypes.STRING },
        year: { type: DataTypes.STRING }
    });
    return Diabetes_Incidence;
};
//# sourceMappingURL=Diabetes_Incidence.js.map