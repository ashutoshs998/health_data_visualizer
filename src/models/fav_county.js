import Sequelize from "sequelize";
export default function(sequelize, DataTypes) {
    let fav_county = sequelize.define('fav_county_health', {
        county: { type: DataTypes.STRING }
    });
    return fav_county
}