import mongoose from "mongoose";

const ChatBotModel = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },

  phone: {
    required: true,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
});

const ChatBot = mongoose.models.ChatBot || mongoose.model("ChatBot", ChatBotModel);
export default ChatBot;
