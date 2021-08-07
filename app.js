//first bring Selectors
const result = document.getElementById('result')
const filter = document.getElementById('filter')
//then init an empt array
const listItems = []

//async/await example
// async function myDisplay(){
//     let myPromise = new Promise(function(myResolve, myReject){
//         myResolve('thank you letter');
//     }
//   document.getElementById('demo').innerHTML = await myPromise;

// }
// myDisplay();


getData()

//this eventlistener will listen to whatever is being typed in and .target returns the res
filter.addEventListener('input', (e) => filterData(e.target.value))


async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50')
    
    const { results } = await res.json()

    //clean result   
    result.innerHTML = ''

    //loop through the json
    results.forEach(user => {

    //lets construct an li
    const li = document.createElement('li')
    
    //take the list items array which was empty, push the li
    listItems.push(li)

    //take the li and add the innerHTML
    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `
    result.appendChild(li)
    })

}


//function for the filter 
function filterData(searchTerm) {
  listItems.forEach(item => {
      if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
        item.classList.remove('hide')
      } else {
          item.classList.add('hide')
      }
    
    })

}
