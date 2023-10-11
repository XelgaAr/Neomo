const buildItem = document.querySelectorAll('.build-item');
const optionFlats  = document.querySelector('#option-flats')
const optionFloors = document.querySelector('#option-floors')
const optionAdress = document.querySelector('#option-adress')
const informationDescription =document.querySelector('#information-description');
console.log(buildItem);


buildItem.forEach(item => {
    item.addEventListener("mouseover", function() {
        const itemAdress = item.getAttribute('data-adress');
        const itemFloors =item.getAttribute('data-floors');
        const itemFlats =item.getAttribute('data-flats');
        const itemDescription =item.getAttribute('data-descriptions');
        console.log(itemAdress);
        console.log(itemFloors);
        console.log(itemFlats);

        optionAdress.innerHTML = itemAdress;
        optionFlats.innerHTML = itemFlats;
        optionFloors.innerHTML = itemFloors;
        informationDescription.innerHTML = itemDescription;
    })
})