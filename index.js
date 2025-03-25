<<<<<<< HEAD
const btn = document.querySelector(".btn")
btn.addEventListener("click",(e)=>{
    document.querySelectorAll("select[name='Register']");
    register.innerHTML="";
})  

let button=document.querySelector('.btn');

button.addEventListener('click',(e) =>{
    register1.innerHTML("");
});

=======
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    document.querySelectorAll("select[name='Register']").forEach(register => {
        register.innerHTML = "";
    });
});


let button=document.querySelector('.btn');

button.addEventListener('click',(e) =>{
    register1.innerHTML("");
});

>>>>>>> 10a661dbd8accb7dcebfc692bbc083ed21c0ed77
