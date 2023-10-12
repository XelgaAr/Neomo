
{
const buildItem = document.querySelectorAll('.build-item');
const optionFlats  = document.querySelector('#option-flats')
const optionFloor = document.querySelector('#option-floor')
const optionAdress = document.querySelector('#option-adress')
const informationDescription =document.querySelector('#information-description');
console.log(buildItem);


buildItem.forEach(item => {
    item.addEventListener("mouseover", function() {
        const itemAdress = item.getAttribute('data-adress');
        const itemFloor =item.getAttribute('data-floor');
        const itemFlats =item.getAttribute('data-flats');
        const itemDescription =item.getAttribute('data-descriptions');
        console.log(itemAdress);
        console.log(itemFloor);
        console.log(itemFlats);

        optionAdress.innerHTML = itemAdress;
        optionFlats.innerHTML = itemFlats;
        optionFloor.innerHTML = itemFloor;
        informationDescription.innerHTML = itemDescription;
    })
})
}