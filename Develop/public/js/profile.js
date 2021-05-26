const multer = require("multer");

const gifUploadHandler = async (event) => {
  event.preventDefault();

  const team = document.querySelector('#team').value
  const nutmeg = document.querySelector('#nutmegRadio').value
  const goal = document.querySelector('#goalRadio').value
  const celebration = document.querySelector('#celebrationRadio').value
  const gif = document.querySelector('#gifFile').value

  if (team && nutmeg && goal && celebration && gif) {
    const response = await fetch(`/api/teams`, {
      method: 'POST',
      body: JSON.stringify({ team, nutmeg, goal, celebration, gif}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to upload gif');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/teams/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete gif');
    }
  }
};

document
  .querySelector('.new-gif-form')
  .addEventListener('submit', gifUploadHandler);

document
  .querySelector('.blog-list')
  // .addEventListener('click', delButtonHandler);
