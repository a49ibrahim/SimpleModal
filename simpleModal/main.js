//Get modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
//get close button
var closeBtn = document.getElementsByClassName('CloseBtn')[0];

//listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside clicks
window.addEventListener('click', clickOutside )

//function open modal
function openModal() {
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display= 'none';
}

function clickOutside(e){
  if(e.target == modal){
        modal.style.display= 'none';
    }
}