
const renderFish = (fishObj) => {
    // console.log(fishObj['Taste'])
    const grabLiveWell = document.getElementById('liveWell')
    const createPTag = document.createElement('p')
    const createImgTag = document.createElement('img')
    grabLiveWell.append(createPTag, createImgTag)


}

fetch('https://www.fishwatch.gov/api/species')
.then(resp => resp.json())
.then(fishData => fishData.forEach(renderFish))