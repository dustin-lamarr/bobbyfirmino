
const gifUploader = async (event) => {
const team = document.querySelector('#team').value;
const nutmeg = document.querySelector('#nutmegRadio').value;
const goal = document.querySelector('#goalRadio').value;
const celebration = document.querySelector('#celebrationRadio').value;

  event.preventDefault();

  if (team) {
    const response = await fetch(`/api/gifs`, {
      method: 'POST',
      body: JSON.stringify({
          team,
          is_meg: nutmeg,
          is_goal: goal,
          is_celebration: celebration
         }),
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
    
    console.log(response)

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to upload gif');
    }
  }
}

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
  .querySelector('#new-gif-form')
  .addEventListener('submit', gifUploader);
