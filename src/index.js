fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(data => data.forEach(element => ramenMenuItems(element)))

function ramenMenuItems (ramen){
    const newImage = document.createElement('img')
    newImage.src = ramen.image

    document.querySelector('#ramen-menu').appendChild(newImage)

    newImage.addEventListener('click', () => selectRamen(ramen))

}

function selectRamen (ramen) {
    const img = document.querySelector('.detail-image')
    img.src = ramen.image

    const name = document.querySelector('#ramen-name')
    name.textContent = ramen.name

    const restaurant = document.querySelector('.restaurant')
    restaurant.textContent = ramen.restaurant

    const rating = document.querySelector('#rating-display')
    rating.textContent = ramen.rating

    const comment = document.querySelector('#comment-display')
    comment.textContent = ramen.comment

}

const theForm = document.querySelector('#new-ramen')

theForm.addEventListener('submit', (event) => handleSubmit(event))

function handleSubmit(event) {
    event.preventDefault()
    const newObject = {
    name: event.target.name.value,
    restaurant: event.target.restaurant.value,
    image: event.target.image.value,
    rating: event.target.rating.value,
    comment: event.target['new-comment'].value
}
ramenMenuItems(newObject)
}
