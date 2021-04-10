import {Schema,model} from "mongoose";

const TemplateSchema = new Schema({
    template_name: String,
    template_price: Number,
    template_descr: String,
});

const Template = model("template",TemplateSchema);

export {Template};