import Replicate from "replicate";
import { ReplicateStream, StreamingTextResponse } from "ai";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

if (!process.env.REPLICATE_API_TOKEN) {
  throw new Error(
    "REPLICATE_API_TOKEN не распознан. Обратитесь к инструкции по работе с приложением."
  );
}

export const runtime = "edge";

export async function POST(req) {
  const { prompt, systemPrompt, maxTokens, temperature, topP, version } =
    await req.json();

  const response = await replicate.predictions.create({
    // IMPORTANT! You must enable streaming.
    stream: true,
    input: {
      prompt: `${prompt}`,
      system_prompt: systemPrompt,
      max_new_tokens: maxTokens,
      temperature: temperature,
      repetition_penalty: 1,
      top_p: topP,
    },
    // IMPORTANT! The model must support streaming. See https://replicate.com/docs/streaming
    version: version,
  });

  // Convert the response into a friendly text-stream
  const stream = await ReplicateStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
