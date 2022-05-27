const contactsOperations = require("../../models/contacts");
const {NotFound} = require('http-errors');

const removeContact = async (req, res) => {

      const {id} = req.params;
      const result = await contactsOperations.removeContact(id, req.body);
      if(!result){
        throw new NotFound(`Product with id=${id} not found`);
      }
      res.json({
        status: "succes",
        code: 200,
        message: "contact deleted",
        data:{
          result
        }
      })  
}

module.exports = removeContact;