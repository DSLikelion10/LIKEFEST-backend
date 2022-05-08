module.exports = (sequelize, DataTypes) => {

    const Board = sequelize.define("Board", {
        boText: {
            type: DataTypes.STRING(10000),
            allowNull: false,
        },
    });

    return Board;
};