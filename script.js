function empty(){
    if(localStorage.length == 0){
        let table = document.getElementById('table')
        table.innerHTML = `<div class="alert alert-danger" id='at' role="alert">
  <h5>Todo List is Empty !</h5> <br>
  <p>Please Enter Your Todos</p>
</div>`
    }
    else{
        let at = document.getElementById('at')
        at.remove()
    }
}

empty()
const handle = ()=>{
    let title = document.getElementById('title').value
    let dec = document.getElementById('description').value

    if(title && dec){

        localStorage.setItem(title, dec)
        empty()
    }
    else{
        alert("Empty cell !")
    }

}

let but = document.getElementById('button')
but.addEventListener('click', handle)

