import React from 'react'
import Link from 'next/link'
function Form({type,post,setPost,submitting,handleSubmit}) {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>

      <p className='desc text-left'>
        {type} & Share amazing prompts with the world, and let your imagination run wild with any AI-powerd platform!
      </p>

      <form onSubmit={handleSubmit}
      className='flex-col gap-7 w-full mt-10 max-w-2xl flex glassphormism'
      >
        <label >
          <span className='text-base font-satoshi font-semibold text-slate-700'>Your AI Prompt</span>
          </label>
          <textarea
           value={post.prompt}
           onChange={(e) => setPost({...post,prompt: e.target.value})}
           placeholder='Write your prompt here...'
           className='form_textarea'
           required
           />
        <label >
          <span className='text-base font-satoshi font-semibold text-slate-700'>Tag </span>  
          <span className='font-normal'>(#Programming, #AI, #Art)</span>
          </label>
          <input
           value={post.tag}
           onChange={(e) => setPost({...post,tag: e.target.value})}
           placeholder='#Tag'
           className='form_input'
           required
           />
           <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href="/" className='text-gray-500 text-sm'>Cancel</Link>
            <button 
             type='submit'
             className='px-5 py-1.5 bg-primary-orange text-white rounded-full'
             disabled={submitting}>
              { submitting? `${type}...` : type }
            </button>
           </div>
      </form>
    </section>
  )
}

export default Form