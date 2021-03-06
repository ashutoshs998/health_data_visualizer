export default function(sequelize, DataTypes) {
    let Obesity_Prevalence_by_Sex = sequelize.define('Obesity_Prevalence_by_Sex_health', {
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
    return Obesity_Prevalence_by_Sex
}