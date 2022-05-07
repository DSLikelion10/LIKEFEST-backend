module.exports = (sequelize, DataTypes) => {

    const Board = sequelize.define("Board", {
        
        noText: {
            type: DataTypes.STRING(100000),
            allowNull: false,
        },
    });

    return Board;
};