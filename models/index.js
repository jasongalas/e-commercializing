// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {

  },
});

// Categories have many Products
Category.hasMany(Products, {
  through: {

  },
});

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags,{
  through:{
    model: ProductTag,
  }
})

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Product,{
  through:{
    model: ProductTag,
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
