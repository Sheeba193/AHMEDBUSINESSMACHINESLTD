const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// document.addEventListener('click', (event) =>{
//     if (!sidebar.contains(event.target) && !burger.contains(event.target) {
//         sidebar.classList.remove('active');   
//     }
// });