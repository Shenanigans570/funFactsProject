


const renderFish = (fishObj) => {
    console.log(fishObj)
    const grabLiveWell = document.getElementById('liveWell')
    const namePTag = document.createElement('p')
    const createImgTag = document.createElement('img')
    grabLiveWell.append(namePTag, createImgTag)


    //setting attributes to show the individual fish
    createImgTag.src = fishObj["Species Illustration Photo"].src
    
}



const fishFetch = () => { 
fetch('https://www.fishwatch.gov/api/species')
.then(resp => resp.json())
.then(fishData => fishData.forEach(renderFish))
}
fishFetch()