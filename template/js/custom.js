// Get the modal
var modal = document.querySelector('.ticket-modal');

// Get the button that opens the modal
var btn = document.querySelector(".buy_button");

// Get the <span> element that closes the modal
var span = document.querySelector('.ticket-modal span.close');

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

if(document.querySelector('.bus-order'))
{
	let bus_modal, btn, span;
		bus_modal = document.querySelector('.bus-modal');
		btn = document.querySelector(".bus-order");
		span = document.querySelector('.bus-modal span.close');

	btn.onclick = function() {
	    bus_modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the bus_modal
	span.onclick = function() {
	    bus_modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the bus_modal, close it
	window.onclick = function(event) {
	    if (event.target == bus_modal) {
	        bus_modal.style.display = "none";
	    }
	}	


}