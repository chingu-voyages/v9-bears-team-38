import React, {useState, useContext} from 'react';

import {VideoContext} from './VideoStore.js';

import '../styles/Admin.css';

const Admin = ({handleShowAdmin}) => {
  const {state, dispatch} = useContext(VideoContext);

  //Local state for controlled htmlForm
  const [_title, setTitle] = useState('');
  const [_url, setUrl] = useState('');
  const [_date, setDate] = useState('');
  const [_category, setCategory] = useState('');
  const [_description, setDescription] = useState('');
  const [_tags, setTags] = useState('');
  const [_starring, setStarring] = useState('');

  // Post video to DB
  const addVideo = e => {
    e.preventDefault();
    let postBody = {
      title: _title,
      url: _url,
      date: _date,
      category: _category,
      description: _description,
      tags: _tags,
      starring: _starring,
    };
    fetch('/api/addvid', {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: {'Content-Type': 'application/json'},
    }).then(response => {
      if (response.status === 200) {
        alert('Video was successfully added to database');
      } else {
        alert('There was an issue adding this video, please try again');
      }
    });
    resetForm();
  };

  const handleLogoutUser = e => {
    e.preventDefault();
    handleShowAdmin();
    dispatch({
      type: 'clearUser',
    });
  };

  const resetForm = () => {
    setTitle('');
    setUrl('');
    setDate('');
    setCategory('');
    setDescription('');
    setTags('');
    setStarring('');
  };

  return (
    <div className='admin-container fbc'>
      <aside id='close-login' className='fbr'>
        <button onClick={handleShowAdmin} className='lbgc'>
          close
        </button>
        <button onClick={handleLogoutUser} className='lbgc'>
          Logout
        </button>
      </aside>
      <form id='add-vid-form' className='fbc' onSubmit={addVideo}>
        <label htmlFor='title'>Title:</label>
        <input
          maxLength='40'
          type='text'
          id='title'
          value={_title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Title For Video'
          required
        />
        <label htmlFor='url'>URL:</label>
        <input
          maxLength='40'
          type='text'
          id='url'
          value={_url}
          onChange={e => setUrl(e.target.value)}
          placeholder='EMBED URL - https://youtube.com/embed/...'
          required
        />
        <label htmlFor='date'>Date:</label>
        <input
          maxLength='12'
          type='text'
          id='date'
          value={_date}
          onChange={e => setDate(e.target.value)}
          placeholder='e.g. 06/12/2019'
          required
        />
        <label htmlFor='category'>Category:</label>
        <input
          list='categories'
          id='category'
          value={_category}
          onChange={e => setCategory(e.target.value)}
          placeholder='AMA, Tutorial, etc'
          required
        />
        <datalist id='categories'>
          <option value='AMA' />
          <option value='Tutorial' />
          <option value='Project' />
          <option value='Meet The Dev' />
          <option value='Visualization' />
          <option value='Showcase' />
          <option value='Other' />
        </datalist>
        <label htmlFor='description'>Description:</label>
        <input
          maxLength='100'
          type='test'
          id='description'
          value={_description}
          onChange={e => setDescription(e.target.value)}
          placeholder='100 characters or less for description'
          required
        />
        <label htmlFor='tags'>Tags:</label>
        <input
          maxLength='30'
          type='text'
          id='tags'
          value={_tags}
          onChange={e => setTags(e.target.value)}
          placeholder='Space Seperated (e.g. AMA Van Tabbert)'
          required
        />
        <label htmlFor='starring'>Starring:</label>
        <input
          maxLength='25'
          type='text'
          id='starring'
          value={_starring}
          onChange={e => setStarring(e.target.value)}
          placeholder='Space Seperated (e.g. Jim Medlock)'
        />
        <input
          type='submit'
          id='vid-submit'
          className='heading-text submit-button lbgc'
          value='Submit Video'
        />
      </form>
    </div>
  );
};

export default Admin;
