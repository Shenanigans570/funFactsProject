


const renderFish = (fishObj) => {
    console.log(fishObj)
    //grabbing parent elements and creating new child elements
    const grabLiveWell = document.getElementById('liveWell')
    const nameH1Tag = document.createElement('h1')
    const healthBenefitsPTag = document.createElement('p')
    const proteinPTag = document.createElement('p')
    const tastePTag = document.createElement('p')

    const createImgTag = document.createElement('img')
//add classes to name, protein, taste, health benefits
    nameH1Tag.classList.add('fishName')
    healthBenefitsPTag.classList.add('healthBenefits')
    proteinPTag.classList.add('Protein')
    tastePTag.classList.add('Taste')
    //appending new elements
    grabLiveWell.append(nameH1Tag, createImgTag, healthBenefitsPTag, proteinPTag, tastePTag)


    //setting attributes to show the individual fish
    createImgTag.src = fishObj["Species Illustration Photo"].src
    nameH1Tag.innerText = fishObj['Species Name']
    healthBenefitsPTag.textContent = fishObj['Health Benefits']
    proteinPTag.textContent = fishObj['protein']
    tastePTag.textContent = fishObj['Taste']

}



const fishFetch = () => { 
fetch('https://www.fishwatch.gov/api/species')
.then(resp => resp.json())
.then(fishData => fishData.forEach(renderFish))
}
fishFetch()