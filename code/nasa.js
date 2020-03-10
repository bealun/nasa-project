// API KEY
const nasaAPI = "https://api.nasa.gov/planetary/apod?api_key=pK2DlBXfJQkMF3wCvZR04S0qjPqHoODHprSRnalE"

// DOM
const date = document.getElementById("todaysDate")
const question = document.getElementById("explain")
const writer = document.getElementById("author")
const image = document.getElementById("nasaImg")

// GET DATA
fetch(nasaAPI)
  .then(response => {
    return response.json()

    .then(json => {
      todayDate = json.date
      todayQuestion = json.explanation
      todayWriter = json.copyright
      todayImage = json.url

      // HTML DOM
      date.innerHTML = todayDate
      question.innerHTML = todayQuestion
      writer.innerHTML = todayWriter
      image.src = todayImage
    })
  })