const darkModeBtn = document.createElement('button')
darkModeBtn.innerText = 'Toggle Dark Mode'
document.body.prepend(darkModeBtn)



const handleClick = (event) => {
    document.body.classList.toggle("dark-mode")
}

darkModeBtn.addEventListener('click', handleClick)


const renderFish = (fishObj) => {
    console.log(fishObj)
    //grabbing parent elements and creating new child elements
    const grabLiveWell = document.getElementById('liveWell')
    const nameH1Tag = document.createElement('h1')
    const healthBenefitsPTag = document.createElement('p')
    const proteinPTag = document.createElement('p')
    const tastePTag = document.createElement('p')
    const fishCard = document.createElement('div')
    fishCard.addEventListener('mouseenter', () => {
        fishDetailsContainer.classList.remove('hidden')
    })
    fishCard.addEventListener('mouseleave', () => {
        fishDetailsContainer.classList.add('hidden')
    })



    const createImgTag = document.createElement('img')
    const fishDetailsContainer = document.createElement('div')
    fishDetailsContainer.classList.add('hidden')
    //add classes to name, protein, taste, health benefits
    nameH1Tag.classList.add('fishName')
    healthBenefitsPTag.classList.add('healthBenefits')
    proteinPTag.classList.add('protein')
    tastePTag.classList.add('taste')
    fishDetailsContainer.append(healthBenefitsPTag, proteinPTag, tastePTag)
    //appending new elements
    fishCard.append(nameH1Tag, createImgTag, fishDetailsContainer)


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


