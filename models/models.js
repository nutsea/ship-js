const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Yuan = sequelize.define('yuan',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        course: {type: DataTypes.DECIMAL}
    },
    {
        tableName: 'yuan'
    }
)

const Order = sequelize.define('orders', 
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        track: {type: DataTypes.STRING(255)},
        status: {type: DataTypes.INTEGER}
    },
    {
        tableName: 'orders'
    }
)

module.exports = {
    Yuan,
    Order
}