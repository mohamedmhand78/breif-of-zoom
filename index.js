let app= document.querySelectorAll(".appartement");
app.forEach(e => {
    e.addEventListener( "click" , (e)=>{
        e.target.classList.toggle("active");
    })
})
