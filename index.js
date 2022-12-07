const darkModeBtn = document.createElement('button')
darkModeBtn.innerHTML = "Toggle Dark Mode";
document.body.appendChild(darkModeBtn)
const grabImageInfo = document.querySelector('#fishCardDiv > .img')



const handleClick = (event) => {
    
}


darkModeBtn.addEventListener("click", handleClick)

const renderFish = (fishObj) => {
    console.log(fishObj)
    //grabbing parent elements and creating new child elements
    const grabLiveWell = document.getElementById('liveWell')
    const nameH1Tag = document.createElement('h1')
    const healthBenefitsPTag = document.createElement('p')
    const proteinPTag = document.createElement('p')
    const tastePTag = document.createElement('p')
    const fishCard = document.createElement('div')


    const createImgTag = document.createElement('img')
    //add classes to name, protein, taste, health benefits
    nameH1Tag.classList.add('fishName')
    healthBenefitsPTag.classList.add('healthBenefits')
    proteinPTag.classList.add('protein')
    tastePTag.classList.add('taste')
    //appending new elements
    fishCard.append(nameH1Tag, createImgTag, healthBenefitsPTag, proteinPTag, tastePTag)


    //setting attributes to show the individual fish
    createImgTag.src = fishObj["Species Illustration Photo"].src
    nameH1Tag.innerText = fishObj['Species Name']
    healthBenefitsPTag.innerHTML = `Health Benefits:${fishObj['Health Benefits']}`
    proteinPTag.innerHTML = `Protein content: ${fishObj['Protein']}`
    tastePTag.innerHTML = `Taste: ${fishObj['Taste']}`
    
    //create containers
    fishCard.classList.add('fishCardDiv')
    grabLiveWell.appendChild(fishCard)
}



const fishFetch = () => { 
fetch('https://www.fishwatch.gov/api/species')
.then(resp => resp.json())
.then(fishData => fishData.forEach(renderFish))
}

fishFetch()