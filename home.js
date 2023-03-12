document.querySelector("ul").addEventListener("click",(e)=>{
    const liElem=e.target.parentNode
    document.querySelector("ul").removeChild(liElem)
})

function addTask() {
    const taskvalue=document.querySelector("input").value
    const ulE1=document.querySelector("ul")
    ulE1.appendChild(createLi(taskvalue))
   
}

function createLi(taskvalue) {
    const spanE1=document.createElement("span")
    spanE1.innerHTML=taskvalue
    const buttonE1=document.createElement("button")
    buttonE1.innerHTML=" Delete"
    const liE1=document.createElement("li")
    liE1.appendChild(spanE1)
    liE1.appendChild(buttonE1)
    return liE1
}