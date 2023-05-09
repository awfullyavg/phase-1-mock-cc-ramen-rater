// fetch('http://localhost:3000/ramens')
// .then(resp => resp.json())
// .then ((ramenObjects => {
//     ramenObjects.forEach(ramenObject=> renderRamenMenuItem(ramenObject))
// }))
// //Step 1
// function renderRamenMenuItem(ramen) {
//     const newImg = document.createElement('img')
//     newImg.src = ramen.image

//     newImg.addEventListener('click', () => selectRamen(ramen))

//     document.querySelector('#ramen-menu').appendChild(newImg)

// }


// //Step 2
// function selectRamen(ramen) {
//     const img = document.querySelector('.detail-image')
//     img.src = ramen.image

//     const name = document.querySelector('.name')
//     name.textContent = ramen.name

//     const resturant = document.querySelector('.restaurant')
//     resturant.textContent = ramen.restaurant

//     const rating = document.querySelector('#rating-display')
//     rating.textContent = ramen.rating

//     const comment = document.querySelector('#comment-display')
//     comment.textContent = ramen.comment
// }

// //Step 3
// const form = document.querySelector('#new-ramen')

// form.addEventListener('submit', (event) => handleSubmit(event))

// function handleSubmit(event) {
//     event.preventDefault()

//     const ramenObject = {
//         "name": event.target.name.value,
//         "restaurant": event.target.restaurant.value,
//         "image": event.target.image.value,
//         "rating": event.target.rating.value,
//         "comment": event.target['new-comment'].value
//     }

//     renderRamenMenuItem(ramenObject)
// }




