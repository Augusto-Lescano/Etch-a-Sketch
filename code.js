const container=document.querySelector('.container')
let grid=[]
for(let i=0;i<16;i++){
  grid[i]=document.createElement('div')
  container.appendChild(grid[i])
  // grid[i].textContent='Hola'
  grid[i].style.backgroundColor='blue'
  grid[i].style.border='black solid 5px'
  grid[i].style.height='125px'
  grid[i].style.width='125px'
  // grid[i].style.flex='1 1 auto'
  grid[i].addEventListener('mouseenter',()=>{
    grid[i].style.backgroundColor='green'
  })
  // grid[i].addEventListener('mouseleave',()=>{
  //   grid[i].style.backgroundColor='blue'
  // })
}