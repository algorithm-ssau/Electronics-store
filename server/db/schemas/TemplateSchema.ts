const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
    template_name: String,
    template_price: Number,
    template_descr: String,
});

const Template = mongoose.model("template",TemplateSchema);
module.exports = Template;