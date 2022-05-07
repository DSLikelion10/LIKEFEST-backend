module.exports = (sequelize, DataTypes) => {

    const Notice = sequelize.define("Notice", {
        noTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        noText: {
            type: DataTypes.STRING(100000),
            allowNull: false,
        },
        noImg: {
            type: DataTypes.BLOB("long"),
            allowNull: false,
        },
        noTag:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Notice;
};