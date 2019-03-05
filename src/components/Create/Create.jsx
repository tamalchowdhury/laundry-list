import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import './create.css';
import Camera from '../../img/camera.png';
import Gallery from '../../img/gallery.png';
import PropTypes from 'prop-types';

const Create = (props) => {
  const [isImage, change] = useState(false);
  const [previewImage, upImage] = useState(undefined);

  function createItem(event) {
    event.preventDefault();
    let item = {};
    item.name = event.target.name.value.trim();
    item.comment = event.target.comment.value.trim();
    item.date = event.target.date.value || Date();
    item.image = previewImage;

    // If there is an image, then capture it
    // if (event.target.gallery) {
    //   getBase64(event.target.gallery.files[0]).then((imageData) => {
    //     item.image = imageData;
    //   });
    // }
    if (item.name) {
      props.dispatch({ type: 'CREATE', item });
      event.target.reset();
      props.toggleModal(false);
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
          <label htmlFor="name">Item Name:</label>
          <input
            className="item-title"
            type="text"
            name="name"
            placeholder="Red Tee Shirt"
            autoFocus
          />

          <label htmlFor="comments">Comments: (Optional)</label>
          <textarea className="item-comment" name="comment" rows="2" />

          <label htmlFor="date">Pick a Date: (Default is Current)</label>
          <input className="item-date" type="date" name="date" />
          <label htmlFor="image">Choose an image:</label>
          <div className="image-area">
            {previewImage ? (
              <div className="preview-image">
                <button onClick={() => upImage()}>Cancel</button>
                <img src={previewImage} />
              </div>
            ) : (
              <Fragment>
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
              </Fragment>
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
