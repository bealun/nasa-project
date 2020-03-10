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
      console.log(json)
      todayDate = json.date
      console.log(date)
      todayQuestion = json.explanation
      console.log(question)
      todayWriter = json.copyright
      console.log(writer)
      todayImage = json.url

      date.innerHTML = todayDate
      question.innerHTML = todayQuestion
      writer.innerHTML = todayWriter
      image.src = todayImage
    })
  })