import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import './create.css';
import Camera from '../../img/camera.png';
import Gallery from '../../img/gallery.png';
import PropTypes from 'prop-types';

/**
 * The create modal window to show up
 */
const Create = (props) => {
  // Upload image file to the local state.
  const [previewImage, upImage] = useState(undefined);
  // Local state to show input error
  const [inputError, changeInput] = useState(false);

  // Take the info from modal and add the item to the redux store
  function createItem(event) {
    event.preventDefault();
    // Create an empty item object to hold all data of the item
    let item = {};
    // Set the name
    item.name = event.target.name.value.trim();
    // Set the comment
    item.comment = event.target.comment.value.trim();
    // Take the date or set the current time
    item.date = event.target.date.value || Date();
    // Take the image data from local state
    item.image = previewImage;

    // Continue only if there is a valid name
    if (item.name) {
      // Add this item to the redux state with CREATE action
      props.dispatch({ type: 'CREATE', item });
      // Reset the form
      event.target.reset();
      // Reset the form
      props.toggleModal(false);
    } else {
      // Else the name must be empty so trigger the error message
      changeInput(true);
    }
  }

  // Upload an image to base64 file
  // Helper function
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
      ];
      if (!allowedTypes.includes(file.type)) {
        window.alert('Only jpg, png & gif image files are allowed!');
        return;
      }
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  // Take file from the computer and store it into the state
  function uploadImage(event) {
    console.log('Uploading an image.');
    getBase64(event.currentTarget.files[0]).then((imageData) => {
      upImage(imageData);
    });
  }

  return (
    /** Show the modal window */
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
            className={`item-title ${inputError ? 'required-error' : null}`}
            type="text"
            name="name"
            placeholder="Red Tee Shirt"
            autoFocus
            onChange={() => changeInput(false)}
          />
          <label htmlFor="image">Choose an image:</label>
          <div className="image-area">
            {previewImage ? (
              <div className="preview-image">
                <img src={previewImage} />
                <button className="preview-close" onClick={() => upImage()}>
                  &times;
                </button>
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

          <label htmlFor="date">Pick a Date: (Default is Current)</label>
          <input className="item-date" type="date" name="date" />

          <label htmlFor="comments">Comments: (Optional)</label>
          <textarea className="item-comment" name="comment" rows="2" />

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
