'use client';
 
import { useChat } from 'ai/react';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop, reload } = useChat()

  console.log(messages); // Logs the chat history as an array
 
  return (
<div className="mx-auto max-w-md py-8 flex flex-col items-center min-h-screen w-full">

  <header className="flex items-center h-16 px-4 border-b border-gray-200 w-full sm:px-6">
    <span className="font-semibold text-lg">Anthropic Cluade 3 + NextJS Starter</span>
  </header>

  <div className="flex-1 max-h-[calc(100vh - 16rem)] overflow-y-auto  mx-8">
    {messages.map(m => (
      <div key={m.id} className={`p-4 w-screen rounded ${m.role === 'user' ? 'bg-gray-200 ml-auto' : 'bg-blue-100 mr-auto'} max-w-full my-2`}>
        <span className="font-semibold">{m.role === 'user' ? 'User:' : 'AI:'}</span>
        <p className=" p-2">{m.content}</p>
      </div>
    ))}
  </div>

  <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 right-0 w-full p-4 flex gap-2 bg-gray-100">
    <input
      value={input}
      onChange={handleInputChange}
      placeholder="Ask me something..."
      className="rounded-md flex-grow p-2 focus:outline-none"
    />
    <button
      disabled={isLoading}
      type="submit"
      className={`bg-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {isLoading ? 'Streaming...' : 'Send'}
    </button>
    <button
      onClick={reload}
      type="button"
      className={`bg-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      Reload
    </button>
    <button
      onClick={stop}
      type="button"
      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Stop
    </button>
  </form>
  
</div>


  );
}

