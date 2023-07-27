const redirect = () =>  location.href = "http://localhost:4233/login"; 

document.querySelector("[data-id='discord_identify']").addEventListener("click", redirect); 
