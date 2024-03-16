'use client';
import Image from 'next/image';
import { useChat } from 'ai/react';
import linkedin from '../app/linkedin.svg'
import github from '../app/github.svg'
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop, reload } = useChat()

  console.log(messages); // Logs the chat history as an array
 
  return (
<div className="mx-auto py-8 bg-[#98c0d0] flex gap-2 flex-col items-center min-h-screen w-full">

<header className="flex items-center justify-evenly h-16 px-4 border bg-black  border-gray-200 w-full sm:px-6 shadow-md">
  <span className="font-semibold text-lg  text-white">Anthropic Cluade 3 + NextJS</span>
    <a target="_blank" href='https://github.com/PKFireBarry'>
      <Image
          height={33}
          width={33}
          className=" w-[33px] h-[33px]"
          alt=""
          src={github}
        />      
    </a>
  <a target="_blank" href='https://www.linkedin.com/in/darion-george/'>
      <Image
          height={33}
          width={33}
          className=" w-[33px] h-[33px] mx-4"
          alt=""
          src={linkedin}
        />      
    </a>
</header>

<div className="flex-1 max-h-[calc(100vh - 16rem)] bg-[#e2e9eb] overflow-y-auto mx-8 p-4 border rounded-md shadow-md">
  {messages.map(m => (
    <div key={m.id} className={`p-4 rounded-md max-w-full my-2 ${m.role === 'user' ? 'bg-gray-300 ml-auto' : 'bg-[#41a1c9] mr-auto'}`}>
      <span className={`font-semibold capitalize ${m.role === 'user' ? 'text-gray-800' : 'text-blue-900'}`}>{m.role}:</span>
      <p className="p-2 text-gray-800">{m.content}</p>
    </div>
  ))}
</div>

<div className="fixed bottom-0 left-0 right-0 w-full my-1 bg-black py-4 border-t border-gray-200 shadow-md">
  <form onSubmit={handleSubmit} className="flex p-1 gap-2">
    <input
      value={input}
      onChange={handleInputChange}
      placeholder="Ask me something..."
      className="rounded-md flex-grow p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      disabled={isLoading}
      type="submit"
      className={`bg-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {isLoading ? 'Streaming...' : 'Send'}
    </button>
    <button
      onClick={reload as any}
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

</div>





  );
}

