document.querySelector('#add').onclick=function(){
    if (document.querySelector('#newtask input').value.length ==0){
        alert("Digite uma tarefa")
    } 
    else{
        document.querySelector('#tasks').innerHTML +=`
        <div class='task'>
            <span id='taskname'>
                ${document.querySelector('#newtask input').value}
                </span>
                <button class='delete'>
                <i class='far fa-trash-alt'></i>
                </button>
                </div>
                `;
                var current_tasks = document.querySelectorAll(".delete")
                for (var i=0; i<current_tasks.length;i++){
                    current_tasks[i].onclick=function(){
                        this.parentNode.remove()

                    }
                }
    }
}