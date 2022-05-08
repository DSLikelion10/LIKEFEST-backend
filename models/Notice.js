module.exports = (sequelize, DataTypes) => {

    const Notice = sequelize.define("Notice", {
        noTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        noText: {
            type: DataTypes.STRING(10000),
            allowNull: false,
        },
        noTag:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        noImg:{
            type: DataTypes.BLOB("long"),
            allowNull: true,
        }
    });

    return Notice;
};