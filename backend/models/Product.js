const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"]
  },
  description: {
    type: String,
    required: [true, "can't be blank"]
  },
  price: {
    type: String,
    required: [true, "can't be blank"]
  },
  category: {
    type: String,
    required: [true, "can't be blank"]
  },
  pictures: {
    type: Array,
    required: true
  },
  onStock: {
    type: Boolean,
    default:true 
  },
  noteClients: {
    type:String,
  },
  avisCl: {
    type: String,
  },

  marque: {
    type: String,
    required: [true, "can't be blank"]
  },
  fabricant: {
    type: String,
    required: [true, "can't be blank"]
  },
  fonct: {
    type: String,
    required: [false, "optional"]
  },
rubrique: {
  type: String,
  required: [true, "can't be blank"]
},
}, {minimize: false});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
