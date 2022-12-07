const darkModeBtn = document.createElement('button')

darkModeBtn.innerText = 'Toggle Deep Sea Mode'

document.body.prepend(darkModeBtn)
const grabFishForm = document.querySelector('#fishForm')
const grabSubmitButton = document.querySelector('#button')
const commentUl = document.querySelector('comment-list')



const handleSubmit = (event) => {
    event.preventDefault()
    const commentLi = document.createElement('li')


    commentUl.appendChild(commentLi)
    // console.log('FUCK YEAH')
//     const newComment = {content: e.target.comment.value}
//     // less D.R.Y and less code reuse

//     // const li = document.createElement("li")
//     // li.innerText = newComment
//     // cardCommentsList.appendChild(li)

//     // Better version, watch out cause we need to pass an object not a simple string
//     displayComment(newComment)
    event.target.reset()
}

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

const displayComment = (comment) => {
    const li = document.createElement("li")
    li.innerText = comment.content
    cardCommentsList.appendChild(li)
}


grabFishForm.addEventListener('submit', handleSubmit)

