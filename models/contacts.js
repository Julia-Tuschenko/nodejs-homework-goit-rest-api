const {Schema, model} = require("mongoose"); 
const Joi = require("joi");


const contactSchema = Schema({
    name:{
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
        require: true,
    },
    phone:{
        type:String,
        require: true,
    },    
    favorite:{
       type: Boolean,
       default: false,
    },
    status:{
        type: String,
        enum:["new", "update"],
        default: "new",
    }
}, {versionKey: false, timestamps: true});

const Contact = model("contact", contactSchema);

const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.bool(),
    status:Joi.string().valid("new", "update"),
});

const favotiteJoiSchema = Joi.object({
    favorite: Joi.bool().required(),
})


module.exports = {
    Contact,
    joiSchema,
    favotiteJoiSchema,
}