// document.addEventListener('DOMContentLoaded', () => {
//     const townLists = document.querySelectorAll('.town-list li');
  
//     townLists.forEach(townList => {
//       const addSubtractButton = townList.querySelector('.add-subtract-icon');
//       const shopList = townList.querySelector('.shop-list');
  
//       addSubtractButton.addEventListener('click', () => {
//         shopList.classList.toggle('expanded');
//         if (shopList.classList.contains('expanded')) {
//           addSubtractButton.textContent = '-';
//         } else {
//           addSubtractButton.textContent = '+';
//         }
//       });
//     });
//   });

const expandButtons = document.querySelectorAll('.expand-button');

expandButtons.forEach(button => {
  button.addEventListener('click', () => {
    const shopList = button.nextElementSibling;
    shopList.classList.toggle('expanded');
    
    // Update button text based on expanded state
    button.textContent = shopList.classList.contains('expanded') ? '-' : '+';
  });
});