
 // js for sliding images section
document.addEventListener("DOMContentLoaded", () => {
   
 })
let slideIndex = 0;
slider();

function slider() {
  let i;
  let x = document.getElementsByClassName("tm-slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(slider, 10000); // Change image every 1 minute
} 
// js for the booking section
    
        let data = document.getElementsByClassName('data');

        const name = document.getElementById("name1");
        const email = document.getElementById("email1");

        

        function toggleForm(){

            const booking = document.getElementById("booking");
const home = document.getElementsByClassName("tm-list");
          const form = document.querySelector('form');
          
            window.onload=() => {
                form.className = "toggle"
                console.log("come");
            }
            // booking.addEventListener("click", () => {
                

                if(form.className=="toggle"){
                    form.className='';
                    console.log(form.className);

                }
                else{
                    form.className = "toggle";
                    console.log(form.className);
                }
            // })

        }
         toggleForm();

         function getDate(){
            const date = document.getElementsByClassName("range");
            let today = new Date().toLocaleDateString()

            console.log(today)
         }
         getDate();

         function activeReg() {
           let btn = document.getElementById("sub");
           
           for (var i=0;i<btn.length;i+=1){
           btn[i].style.display = 'none';
}
}
    // Function to increment count
const handleIncrement = () => {
  const count = 0;
    count++;
    totalCount.innerHTML = count;
  };
  // Function to decrement count
const handleDecrement = () => {
     const count = 0;
    count--;
    totalCount.innerHTML = count;
  };

  // Select increment and decrement buttons
const handleCounter1 = document.getElementById("handleCounter1");
const handleCounter2 = document.getElementById("handleCounter2");


// Make an API call
function Home() {
  fetch("http://localhost:3000/houses")
    .then(response => response.json())
    .then(houses => {
      houses.forEach(element => {
        let imageDiv = document.createElement("div")
        imageDiv.innerHTML =`<img src="${element.image}" height="200px" width="200px" alt="image" />`
        document.getElementById("home-img").appendChild(imageDiv)
        

      })
     
    })
}
	



        