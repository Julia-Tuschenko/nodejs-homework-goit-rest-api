const {NotFound} = require('http-errors');
const contactsOperations = require("../../models/contacts");


const updateContactById = async (req, res) => {
      const {id} = req.params;
      const result = await contactsOperations.updateContactById(id, req.body);
      if(!result){
        throw new NotFound("Not found");
      }
      res.json({
        status: "succes",
        code: 200,
        data:{
          result
        }
      })
}

module.exports = updateContactById;