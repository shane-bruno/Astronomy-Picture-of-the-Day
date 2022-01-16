
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchNASAData = async () => {
    try {
        const response = await fetch(`${url}${api_key}`)
        const data = await response.json()
        console.log('NASA APOD data', data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

const displayData = data => {
    document.getElementById('picture-title').textContent = data.title
    document.getElementById('photo-creds').textContent = "Photo Creds: " + data.copyright
    document.getElementById('date-selector').textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('picture-description').textContent = data.explanation
}

fetchNASAData()
