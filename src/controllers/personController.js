const Person = require('../models/personModel');

// According what I see, exports is used for delegation task nothing else
exports.getAllPeople = async (req, res, next) => {
  try {
    let result = null;
    if( !!req.query.page && req.query.page !== '' ){
      result = await Person.allfromSwapi(req.query.page);
    }else{
      result = await Person.allfromSwapi();
    }
    
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.getPerson = async (req, res, next) => {
  try {
    const result = await Person.getByIdfromSwapi(req.params.personId);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}; 
