import {Schema,model} from "mongoose";

const TemplateSchema = new Schema({
    template_name: {type: String, default: ""},
    template_price: {type: Number, default: 0},
    template_descr: {type: String, default: ""},
});

const Template = model("template",TemplateSchema);

export {Template};