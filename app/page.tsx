'use client';
 
import { useCompletion } from 'ai/react';
 
export default function Completion() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion();

  console.log(completion)
 
  return (
<div className="mx-auto max-w-md py-24 flex flex-col items-center min-w-[400px]">
<header className="flex items-center h-16 px-4 border-b gap-2 sm:px-6">
      <div className="flex items-center gap-2">
        
        <span className="font-semibold tracking-wide">Antropic AI + NextJS</span>
      </div>
    </header>
  <form onSubmit={handleSubmit} className="w-full">
    <label className="text-gray-700">
      prompt:
      <input
        className="w-full border border-gray-300 rounded-md mb-4 p-2 shadow-md focus:outline-none focus:border-blue-500"
        value={input}
        onChange={handleInputChange}
      />
    </label>
    <div className="flex justify-between w-full my-4">
      <button type="button" onClick={stop} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
        Stop
      </button>
      <button disabled={isLoading} type="submit" className={`bg-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}>
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </div>    

    <output className="text-gray-600 my-4">Completion result: {completion}</output>

  </form>
</div>

  );
}

