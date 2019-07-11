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
    }).then(response => console.log(response));
  };

  const handleLogoutUser = e => {
    e.preventDefault();
    handleShowAdmin();
    dispatch({
      type: 'clearUser',
    });
  };

  return (
    <div className='admin-container fbc'>
      <aside id='close-login' className='fbr'>
        <button onClick={handleShowAdmin}>close</button>
        <button onClick={handleLogoutUser}>Logout</button>
      </aside>
      <form id='add-vid-form' className='fbc' onSubmit={addVideo}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          value={_title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Title For Video'
          required
        />
        <label htmlFor='url'>URL:</label>
        <input
          type='text'
          id='url'
          value={_url}
          onChange={e => setUrl(e.target.value)}
          placeholder='URL Where The Video Lives'
          required
        />
        <label htmlFor='date'>Date:</label>
        <input
          type='text'
          id='date'
          value={_date}
          onChange={e => setDate(e.target.value)}
          placeholder='Date Video Was Released'
          required
        />
        <label htmlFor='category'>Category:</label>
        <input
          type='text'
          id='category'
          value={_category}
          onChange={e => setCategory(e.target.value)}
          placeholder='AMA, Tutorial, Voyage 9, etc'
          required
        />
        <label htmlFor='description'>Description:</label>
        <input
          type='test'
          id='description'
          value={_description}
          onChange={e => setDescription(e.target.value)}
          placeholder='This video is about...'
          required
        />
        <label htmlFor='tags'>Tags:</label>
        <input
          type='text'
          id='tags'
          value={_tags}
          onChange={e => setTags(e.target.value)}
          placeholder='Space Seperated (e.g. AMA Van Tabbert)'
          required
        />
        <label htmlFor='starring'>Starring:</label>
        <input
          type='text'
          id='starring'
          value={_starring}
          onChange={e => setStarring(e.target.value)}
          placeholder='Space Seperated (e.g. Jim Medlock)'
        />
        <input
          type='submit'
          id='vid-submit'
          className='heading-text submit-button'
          value='Submit Video'
        />
      </form>
    </div>
  );
};

export default Admin;
