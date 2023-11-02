const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const cricles = document.querySelectorAll('.cricle')
let currntActives =1 ;
update()
next.addEventListener('click' , () => { 
    currntActives++
     if (currntActives > cricles.length){
        currntActives=cricles.length 
    }
    console.log(currntActives);
     update() 
})
prev.addEventListener('click',() => {
    currntActives--
    if (currntActives < 1){
        currntActives=1 
    }
    console.log(currntActives);
    update()
})

function update (){
    cricles.forEach((cricle ,idx) =>{
        if(idx < currntActives)
        {
        cricle.classList.add('active')}
        else
        {
        cricle.classList.remove('active')}
    })
     const actives =document.querySelectorAll('.active')
    progress.style.width=(actives.length-1)/(cricles.length-1)*100+"%"
    if(currntActives===1){
        prev.disabled=true
    }else if (currntActives===cricles.length){
        next.disabled=true
    }else{
        prev.disabled=false
        next.disabled=false
    }
}