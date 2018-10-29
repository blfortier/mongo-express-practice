const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    SharePrice: {
        type: Number,
        required: true
    },
    sharesOwned: {
      type: Number,
      required: true
    },
    shareHolders: {
      type: [{firstName:String, lastName: String}]  
    },
    avgVolume: {
      type: Number,  
    },
    dateBought: {
        type: Date,
        default: Date.now
    },
    timesSearched: {
        type: Object
        // date and time searched, object array of count/timestamps
    },
    largestSharesBought: {
        type: Number,
        // Specify if this path should be included
        // or excluded from query results by default
        select: true
    },
    largestSharesBoughtDate: {
        type: Date
    },
    smallestSharesBought: {
        type: Number,
        select: true
    },
    smallestSharesBoughtDate: {
        type: Date
    },
    timeSharesOwned: {
        type: 
    }
});

module.exports = Stock = mongoose.model('stocks', StockSchema);