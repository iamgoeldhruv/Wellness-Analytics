const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require('../config');
const genAI = new GoogleGenerativeAI(config.apiKey);

exports.generateAIResponse=async(req,res)=>{
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = req.query.text 
    console.log(prompt)
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text)
        res.json({ text });
        
      } catch (error) {
        console.error('Error generating AI response:', error);
        res.status(500).json({ error: 'Internal server error' });
     }

}