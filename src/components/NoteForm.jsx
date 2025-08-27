import { useState } from 'react';

const NoteForm = ({notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: '',
        priority: 'medium',
        category: '',
        description: '',
      });
  
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setNotes([...notes, formData]);
        setFormData({
          title: '',
          priority: 'medium',
          category: '',
          description: '',
        });
      };
  return (
    <form onSubmit={handleSubmit} className='mb-6 p-8'>
      <div className='mb-4'>
        <label htmlFor='title' className='block font-semibold p-2'>
          Title
        </label>
        <input
          className='border border-gray-400 p-2 w-full rounded-lg'
          label='Title'
          name='title'
          value={formData.title}
          onChange={handleChange}
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
          value={formData.priority}
          onChange={handleChange}
        >
          <option value='priority'>🟢 Low</option>
          <option value='priority'>🟠 Medium</option>
          <option value='priority'>🔴 High</option>
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
          value={formData.category}
          onChange={handleChange}
        >
          <option value='category'>📂 Work</option>
          <option value='category'>🏠 Personal</option>
          <option value='category'>💡 Ideas</option>
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
          value={formData.description}
          onChange={handleChange}
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
