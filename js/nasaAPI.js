document.getElementById('apodDate').setAttribute('max', new Date().toISOString().split('T')[0])
document.querySelector('.link-pictureSection').addEventListener('click', getAPOD)

function getAPOD(){
fetch(`https://api.nasa.gov/planetary/apod?api_key=lTqGijOmeQzmXX0p6BQGoeUy6ZFcQhUYq4doEh8H`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.apodImg').src = data.url
      document.querySelector('#apodTitle').innerText = data.title
      document.querySelector('.apodCaption').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
};

