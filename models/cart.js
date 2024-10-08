'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});
    Cart.associate = function (models) {
        Cart.hasMany(models.CartItem, {
            foreignKey: 'cartId'
        });
    };
    return Cart;
};