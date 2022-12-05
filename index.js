
const renderFish = (fishObj) => {
    console.log(fishObj['Taste'])
    const grabLiveWell = document.getElementById('liveWell')

}

fetch('https://www.fishwatch.gov/api/species')
.then(resp => resp.json())
.then(fishData => fishData.forEach(renderFish))