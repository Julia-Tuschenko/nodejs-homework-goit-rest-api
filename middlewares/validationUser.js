const validationUser = (schema) => {
    return (req, res, next) => {
        const {error} = schema.validate(req.body);
        if(error){
            error.status = 400;
            error.message = "Task execution error";
            next (error);
          }
        next();
    }
}

module.exports = validationUser;