
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = 'aG7tlYvm1t4kGgI2tivzdT9wixZ8kBsySVjss4Fy'

const fetchNASAData = async () => {
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=aG7tlYvm1t4kGgI2tivzdT9wixZ8kBsySVjss4Fy')
        const data = await response.json()
        console.log('NASA APOD data', data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

const displayData = data => {
    document.getElementById('picture-title').textContent = data.title
    document.getElementById('date-selector').textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('picture-description').textContent = data.explanation
}

fetchNASAData()

console.log("hello world")