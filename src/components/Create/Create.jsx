import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import './create.css';
import Camera from '../../img/camera.png';
import Gallery from '../../img/gallery.png';
import PropTypes from 'prop-types';

const Create = (props) => {
  const [previewImage, upImage] = useState(undefined);
  const [inputError, changeInput] = useState(false);

  function createItem(event) {
    event.preventDefault();
    let item = {};
    item.name = event.target.name.value.trim();
    item.comment = event.target.comment.value.trim();
    item.date = event.target.date.value || Date();
    item.image = previewImage;

    if (item.name) {
      props.dispatch({ type: 'CREATE', item });
      event.target.reset();
      props.toggleModal(false);
    } else {
      changeInput(true);
    }
  }

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif'
      ];
      if (!allowedTypes.includes(file.type)) {
        window.alert('Only jpg, png & gif image files are allowed!');
        return;
      }
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  function uploadImage(event) {
    console.log('Uploading an image.');
    getBase64(event.currentTarget.files[0]).then((imageData) => {
      upImage(imageData);
    });
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button
          className="close-button"
          onClick={() => props.toggleModal(false)}>
          &times;
        </button>
        <h1 id="modal-title">Add a new item</h1>
        <form className="form" onSubmit={createItem}>
          <label htmlFor="name">
            {inputError ? (
              <span className="red-error">Item name is required!</span>
            ) : (
              'Item Name:'
            )}
          </label>

          <input
            className={`item-title ${inputError ? 'req-error' : null}`}
            type="text"
            name="name"
            placeholder="Red Tee Shirt"
            autoFocus
            onChange={() => changeInput(false)}
          />

          <label htmlFor="comments">Comments: (Optional)</label>
          <textarea className="item-comment" name="comment" rows="2" />

          <label htmlFor="date">Pick a Date: (Default is Current)</label>
          <input className="item-date" type="date" name="date" />
          <label htmlFor="image">Choose an image:</label>
          <div className="image-area">
            {previewImage ? (
              <div className="preview-image">
                <img src={previewImage} />
                <button onClick={() => upImage()}>Cancel</button>
              </div>
            ) : (
              <div className="grid-area">
                <div className="gallery">
                  <div>
                    <button className="gallery-button">
                      <img src={Gallery} width="64" alt="" />
                    </button>
                    <input
                      type="file"
                      name="gallery"
                      id=""
                      onChange={uploadImage}
                    />
                  </div>
                  Gallery
                </div>
                <div className="camera">
                  <div>
                    <img src={Camera} width="64" alt="" />
                  </div>
                  Camera
                </div>
              </div>
            )}
          </div>
          <div className="button-container">
            <button className="create-button">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.propTypes = {};

export default connect()(Create);
