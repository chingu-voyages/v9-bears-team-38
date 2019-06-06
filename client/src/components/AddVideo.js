import React, {useState} from 'react';

export const AddVideo = () => {
  //Local state for controlled form
  const [title, setTitle] = useState(null);
  const [url, setUrl] = useState(null);
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState(null);
  const [tags, setTags] = useState(null);
  const [starring, setStarring] = useState(null);

  // Post video to DB
  const addVideo = e => {
    e.preventDefault();
    let body = {
      title: title,
      url: url,
      category: category,
      description: description,
      tags: tags,
      starring: starring,
    };
    fetch('http://localhost:8000/api/addvid', {
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(response => console.log(response));
  };

  return (
    <div className='add-vid-container fbc'>
      <form id='add-vid' className='fbc' onSubmit={addVideo}>
        <div className='form-field heading-text'>
          Title:
          <input
            type='text'
            name='username'
            value={this.state.localEntry.username}
            onChange={this.handleInputChange}
            placeholder='Skinnyboy Thompson'
            required
          />
        </div>
        <div className='form-field heading-text'>
          Email:
          <input
            type='text'
            name='email'
            value={this.state.localEntry.email}
            onChange={this.handleInputChange}
            placeholder='me@theplace.io'
            required
          />
        </div>
        <div className='form-field heading-text'>
          Password:
          <input
            type='password'
            name='password'
            value={this.state.localEntry.password}
            onChange={this.handleInputChange}
            minLength='6'
            maxLength='20'
            placeholder='6-30 characters'
            required
          />
        </div>
        <div className='form-field heading-text'>
          Confirm Password:
          <input
            type='password'
            name='confirmPass'
            value={this.state.localEntry.confirmPass}
            onChange={this.handleInputChange}
            minLength='6'
            maxLength='20'
            placeholder='6-30 characters'
            required
          />
        </div>
        <div className='form-field heading-text'>
          Location:
          <input
            type='text'
            name='location'
            value={this.state.localEntry.location}
            onChange={this.handleInputChange}
            placeholder='Where are you from?'
            required
          />
        </div>
        <h4 id='submit-error'> </h4>
        <input
          type='submit'
          name='submit'
          id='newUserSubmit'
          className='heading-text submit-button'
          value={
            !this.state.localEntry.username
              ? 'Welcome Friend!'
              : `Welcome ${this.state.localEntry.username}!`
          }
        />
      </form>
    </div>
  );
};
