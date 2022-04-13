let apiKey = 'qgWGpJJSX0ydxx7ihMhIhP3i7Rbq9EEGk340EOhf'
document.getElementById('apodDate').setAttribute('max', new Date().toISOString().split('T')[0])
document.querySelector('.link-pictureSection').addEventListener('click', getAPOD)
document.querySelector('#apodDate').addEventListener('change', getBAPOD)

function writeAPOD(data){
    if (data.media_type === "image"){
        document.querySelector('#apodPic').innerHTML += `<img class="apodImg" src="${data.url}"  aria-labelledby="apodTitle">`
        document.querySelector('#apodPic').innerHTML += `<h3 id="apodTitle">${data.title}</h3>`
        document.querySelector('#apodPic').innerHTML += `<blockquote id="apodQuote"><p class="apodCaption">${data.explanation}</p></blockquote>`
    }else if (data.media_type === "video"){
        document.querySelector('#apodPic').innerHTML += `<iframe width="560" height="315" src="${data.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        document.querySelector('#apodPic').innerHTML += `<h3 id="apodTitle">${data.title}</h3>`
        document.querySelector('#apodPic').innerHTML += `<blockquote id="apodQuote"><p class="apodCaption">${data.explanation}</p></blockquote>`
    }
}

function writeBAPOD(data){
    if (document.getElementById("apodDate").validity.valid) {
        if (data.media_type === "image"){
            document.querySelector('#apodBPic').innerHTML += `<img class="apodImg" src="${data.url}"  aria-labelledby="apodTitle">`
            document.querySelector('#apodBPic').innerHTML += `<h3 id="apodTitle">${data.title}</h3>`
            document.querySelector('#apodBPic').innerHTML += `<blockquote id="apodQuote"><p class="apodCaption">${data.explanation}</p></blockquote>`
        }else if (data.media_type === "video"){
            document.querySelector('#apodBPic').innerHTML += `<iframe width="560" height="315" src="${data.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            document.querySelector('#apodBPic').innerHTML += `<h3 id="apodTitle">${data.title}</h3>`
            document.querySelector('#apodBPic').innerHTML += `<blockquote id="apodQuote"><p class="apodCaption">${data.explanation}</p></blockquote>`
        }
    }
}

function getAPOD(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      if (document.querySelector('#apodPic').innerHTML.trim() === "") {
      writeAPOD(data)
    }})
    .catch(err => {
        console.log(`error ${err}`)
    })
};


function getBAPOD(){
    let bDate = document.getElementById("apodDate").value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${bDate}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      if (document.querySelector('#apodBPic').innerHTML.trim() == "") {
        writeBAPOD(data)
      }else{
        document.querySelector('#apodBPic').innerHTML = ""
        writeBAPOD(data)
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
};


