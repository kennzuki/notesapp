import { useState } from 'react';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form className='mb-6 p-8'>
      <div className='mb-4'>
        <label htmlFor='title' className='block font-semibold p-2'>
          Title
        </label>
        <input
          className='border border-gray-400 p-2 w-full rounded-lg'
          label='Title'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='priority' className='block font-semibold p-2'>
          Priority
        </label>
        <select
          className='border border-gray-400 p-2 w-full rounded-lg'
          label='Priority'
          name='priority'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value={priority}>🟢 Low</option>
          <option value={priority}>🟠 Medium</option>
          <option value={priority}>🔴 High</option>
        </select>
      </div>

      <div className='mb-4'>
        <label htmlFor='category' className='block font-semibold p-2'>
          Category
        </label>
        <select
          className='border border-gray-400 p-2 w-full rounded-lg'
          label='Category'
          name='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value={category}>📂 Work</option>
          <option value={category}>🏠 Personal</option>
          <option value={category}>💡 Ideas</option>
        </select>
      </div>

      <div className='mb-4'>
        <label htmlFor='description' className='block font-semibold p-2'>
          Description
        </label>
        <textarea
          className='border border-gray-400 p-2 w-full rounded-lg'
          label='Description'
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <button className='w-full  text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600'>
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
