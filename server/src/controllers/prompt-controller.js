const openai = require("../config/openai");
const inputPrompt = require("../models/input-prompt");

module.exports = {
  async sendText(req, res) {
    const inputModel = new inputPrompt(req.body);
    try {
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: inputModel.prompt,
        temperature: 0,
        max_tokens: 3500,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });
      return res.status(200).json({
        success: true,
        data: response.data.choices[0].text,
      });
    } catch (error) {
      console.error('Error occurred:', error); // Adicione este log para capturar o erro
      return res.status(400).json({
        success: false,
        error: error.response ? error.response.data : "there was an issue on the server",
      });
    }
  },
};