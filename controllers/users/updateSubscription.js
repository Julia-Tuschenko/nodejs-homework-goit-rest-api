const {NotFound} = require('http-errors');
const {User} = require('../../models');


const updateSubscription = async (req, res) => {
      const {subscription} = req.body;
      const result = await User.findOneAndUpdate({subscription});
      if(!result){
        throw new NotFound("Not found");
      }
      res.json({
        status: "succes",
        code: 200,
        data:{
          user:{
            subscription
          }
        }
      })
}

module.exports = updateSubscription;