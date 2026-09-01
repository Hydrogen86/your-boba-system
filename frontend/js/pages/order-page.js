import { sweetAlertNormal } from "../../components/sweetAlert--single-btn.js";


const milkteaBtn = document.getElementById('milk-tea__link-btn');
const fruitteaBtn = document.getElementById('fruit-tea__link-btn');
const shakeBtn = document.getElementById('shake__link-btn');
const allBtn = document.getElementById('all__link-btn');


//Filtering
// const item_Milk_tea_visibility = document.querySelectorAll('.item.milktea-products');
// const item_Fruit_tea_visibility = document.querySelectorAll('.item.fruittea-products');



function headerActionButton () {

    milkteaBtn.addEventListener('click', () => {
        itemVisibility('milktea-products');
    });
    fruitteaBtn.addEventListener('click', () => {
        itemVisibility('fruittea-products');
    });
    shakeBtn.addEventListener('click', () => {
        itemVisibility('shake-products');
    });
    allBtn.addEventListener('click', () => {
        itemVisibility('all');
    });
    
}

//--------------------------------------------------------
// ----------Item Visibility Function---------------------
// -------------------------------------------------------
function itemVisibility (className) {

    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'flex';
        }else if (className === "all") {
            item.style.display = 'flex';
        }else {
            item.style.display = 'none';
        }
    });
}


export default headerActionButton;

