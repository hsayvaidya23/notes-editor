// Dummy API for simulating AI responses

/**
 * Simulate an API call to an AI model
 * @param message User's message
 * @returns Promise resolving to AI's response
 */
export const getAIResponse = async (message: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Default response
  let response = "I'm an AI assistant. How can I help you with your notes?";
  
  // Simple response logic based on message content
  if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    response = "Hello there! How can I assist you with your notes today?";
  } else if (message.toLowerCase().includes('thank')) {
    response = "You're welcome! Is there anything else you need help with?";
  } else if (message.toLowerCase().includes('help')) {
    response = "I can help you organize your thoughts, brainstorm ideas, summarize content, or answer questions about your notes. What would you like assistance with?";
  } else if (message.toLowerCase().includes('feature')) {
    response = "This notes app includes rich text editing with support for headings, lists, and basic formatting. You can create multiple notes and chat with AI within each note!";
  } else if (message.length > 100) {
    response = "I see you've shared quite a bit of information. Let me think about this... What specific aspect would you like me to focus on or help you with?";
  }
  
  return response;
};