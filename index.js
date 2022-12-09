const darkModeBtn = document.createElement('button')
darkModeBtn.innerText = 'Toggle Deep Sea Mode'

document.body.prepend(darkModeBtn)
const grabFishForm = document.querySelector('#fishForm')
const grabSubmitButton = document.querySelector('#button')
const commentUl = document.querySelector('#comment-list')
const commentInput = document.querySelector('.comment-input')

const displayComment = (comment) => {
    const createPTag = document.createElement('p')
    createPTag.innerText = comment
    commentUl.appendChild(createPTag)
}

const handleSubmit = (event) => {
    event.preventDefault()
    const newComment = event.target.comment.value
    displayComment(newComment)
    // commentUl.append(createPTag)
    event.target.reset()
}

const handleClick = (event) => {
    document.body.classList.toggle("dark-mode")
}

darkModeBtn.addEventListener('click', handleClick)


const renderFish = (fishObj) => {
    // console.log(fishObj)
    //grabbing parent elements and creating new child elements
    const grabLiveWell = document.getElementById('liveWell')
    const nameH1Tag = document.createElement('h1')
    const healthBenefitsPTag = document.createElement('p')
    const proteinPTag = document.createElement('p')
    const tastePTag = document.createElement('p')
    const fishCard = document.createElement('div')
    const commentPTag = document.createElement('p')
    fishCard.addEventListener('mouseenter', () => {
        fishDetailsContainer.classList.remove('hidden')
    })
    fishCard.addEventListener('mouseleave', () => {
        fishDetailsContainer.classList.add('hidden')
    })

    const createImgTag = document.createElement('img')
    createImgTag.alt = fishObj['Species Name']
    const fishDetailsContainer = document.createElement('div')
    fishDetailsContainer.classList.add('hidden')
    //add classes to name, protein, taste, health benefits
    nameH1Tag.classList.add('fishName')
    healthBenefitsPTag.classList.add('healthBenefits')
    proteinPTag.classList.add('protein')
    tastePTag.classList.add('taste')
    fishDetailsContainer.append(healthBenefitsPTag, proteinPTag, tastePTag)
    commentPTag.classList.add('fishComment')
    //appending new elements
    fishCard.append(nameH1Tag, createImgTag, fishDetailsContainer, commentPTag)


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




grabFishForm.addEventListener('submit', handleSubmit)

