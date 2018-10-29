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
    shares: {
      type: Number,
      required: true
    },
    avgVolume: {
      type: Number,  
    },
    dateBought: {
        type: Date,
        default: Date.now
    },
    timesSearched: {
        type: Number
    },
    largestSharesBought: {
        type: Number,
        // Specify if this path should be included
        // or excluded from query results by default
        select: true
    },
    smallestSharesBought: {
        type: Number,
        select: true
    },
    timeSharesOwned: {
        type: "function(){dateBought - Date.now}"
    }
    
    
    
});

module.exports = Stock = mongoose.model('stocks', StockSchema);