const button = document.querySelector("button");
const input = document.querySelector("input");
const cont = document.getElementById("cont");
const form = document.querySelector("form");

// cont.style.border = '2px solid red'

console.log(cont);

cont.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-trash-can gufi") {
    console.log(object);
  } else {
  }
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const taskk = ` 
        <div class="task">
            <span><i class="fa-solid fa-star"></i></span>
                <p>${input.value}</p>
                <div class="icon">
                    <span class="fa-solid fa-trash-can gufi"></span>
                    <span><i class="fa-solid fa-face-angry"></i></span>
                </div>
            </div> 
             
            `;

  cont.innerHTML += taskk;
});
