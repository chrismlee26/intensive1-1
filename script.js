let button = document.getElementById("clicker"),
    count = 39;
button.onclick = function() {
        count -= 1;
    button.innerHTML = "<pre>Limited Run Pre-Order:          " + count + "/50</pre>";
}

const costInput = document.querySelector('#cost')
const marginInput = document.querySelector('#margin')
const unitInput = document.querySelector('#units')
const totalPrice = document.querySelector('#total')


function calculateMargin() {
    const costValue = costInput.value
    const marginValue = marginInput.value
    const unitValue = unitInput.value

    totalPrice.innerHTML = (costValue * marginValue * unitValue / 100).toFixed(2)

}

document.querySelector('#cost').addEventListener('change', calculateMargin)
document.querySelector('#margin').addEventListener('change', calculateMargin)
document.querySelector('#units').addEventListener('change', calculateMargin)


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modal = document.getElementById("myModal");
var btn = document.getElementById('button-press');
btn.onclick = function(){

  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}