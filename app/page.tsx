'use client';
 
import { useChat } from 'ai/react';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  console.log()
 
  return (
<div className="mx-auto max-w-md py-8 flex flex-col items-center min-w-[400px]">
    <header className="flex items-center h-16 px-4 border-b gap-2 sm:px-6">
      <div className="flex items-center gap-2">
        
        <span className="font-semibold tracking-wide">Anthropic Cluade 3 + NextJS Starter</span>
      </div>
    </header>
    <div className='h-screen'>
      {messages.map(m => (
        <div className=''>
          
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
        </div>
      ))}
 
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Ask me something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
    </div>

  );
}

