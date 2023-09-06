// for fields that I defined as not null

const checkFieldExists = (fieldName, errorMessage) => (req, res, next) => {
    if (req.body[fieldName]) {
        next();
    } else {
        res.status(400).json({ error: errorMessage });
    }
};

const checkDateExists = checkFieldExists("date", "Date is required");
const checkFromExists = checkFieldExists("from", "Vendor is required");
const checkAmountExists = checkFieldExists("amount", "Amount of purchase is required");



//for fields that should only have BOOLEAN values

const checkBoolean = (req, res, next) => {
    const taxRelatedValue = req.body.tax_related;
    if (taxRelatedValue === true || taxRelatedValue === false) {
      next();
    } else {
      res.status(400).json({ error: "tax_related must be a boolean value" });
    }
  };

  module.exports = { 
        checkDateExists, 
        checkAmountExists, 
        checkFromExists, 
        checkBoolean 
    }