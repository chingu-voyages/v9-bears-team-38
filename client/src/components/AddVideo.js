import React, {useState} from 'react';

import '../styles/AddVideo.css';

const AddVideo = () => {
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
    fetch('http://localhost:8000/api/addvid', {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: {'Content-Type': 'application/json'},
    }).then(response => console.log(response));
  };

  // Get videos
  const getVideos = e => {
    e.preventDefault();
    fetch('http://localhost:8000/api/getvid', {
      method: 'GET',
    }).then(response => console.log(response));
  };

  return (
    <div className='add-video-container fbc'>
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
      <button onClick={getVideos}>Get Videos</button>
    </div>
  );
};

export default AddVideo;
