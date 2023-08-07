import { Schema,model,models } from "mongoose";

const promptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    prompt: {
        type: String,
        required: [true,"Prompt is required"]
    },
    tag: {
        type: String,
        required: [true,"tag is required"]
    },
})

const prompt = models.prompt || model("prompt",promptSchema);

export default prompt;