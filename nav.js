const primarynav=document.getElementById("primary-nav")
const icon=document.getElementById("icon-ele")
icon.addEventListener("click",()=>{
    const visible=primarynav.getAttribute("data-visible");
    if(visible==="true")
    {
        primarynav.setAttribute("data-visible","false")
    }
    else
    {
        primarynav.setAttribute("data-visible","true")
    }
    console.log(visible)
})
