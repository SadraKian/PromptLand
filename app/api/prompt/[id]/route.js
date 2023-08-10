import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// GET (Reading the prompt)

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: "404" });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompt!", { status: 500 });
  }
};

// PATCH ( Updating the prompt )

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id).populate("creator");

    if (!existingPrompt)
      return new Response("Prompt not found", { status: "404" });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to edit  prompt!", { status: 500 });
  }
};

// DELETE ( Deleting the prompt )

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(params.id);

    return new Response("The prompt is removed", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete prompt!", { status: 500 });
  }
};
