// Get the modal
var modal = document.querySelector('.ticket-modal');

// Get the button that opens the modal
var btn = document.querySelectorAll(".buy_button");

// Get the <span> element that closes the modal
var span = document.querySelector('.ticket-modal span.close');

// When the user clicks on the button, open the modal 
btn[0].onclick = function() {
    modal.style.display = "block";
}
btn[1].onclick = function() {
    modal.style.display = "block";
}
function show_ticket_modal()
{
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

		//btn.onclick = bus_order();
		btn.addEventListener('click', bus_order);

	function bus_order () {
	    bus_modal.style.display = "block";
	    if(screen.width < 927)
	    {
	    	let top = document.querySelector('.bus-order').getBoundingClientRect().top;
	    	bus_modal.style.top =  top + top*0.2 + 'px';
	    }
	    
	}


	// When the user clicks on <span> (x), close the bus_modal
	span.addEventListener('click', close_bus_modal);
	function close_bus_modal() {
	    bus_modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the bus_modal, close it
	window.onclick = function(event) {
	    if (event.target == bus_modal) {
	        bus_modal.style.display = "none";
	    }
	}	


}

// open bars menu

var bars = document.querySelector('.bars');
var opened = false;
bars.addEventListener('click', close_sidebar);
function close_sidebar()
{
	if(!opened)
	{
		bars.previousSibling.style.width = 300 + 'px';
		bars.previousSibling.style.display = 'inherit';
		opened = true;
	} else 
	{
		bars.previousSibling.style.display = 'none';
		opened = false;
	}

}

// дополнительные пункты меню

if(window.innerWidth < 927)
	{
		let div = document.createElement('div');
		div.className = 'row';
		div.innerHTML = 
			'<hr>'
			+ '<li><a href="#" onclick="bus_order(); close_sidebar()">билет на автобус</li>'
			+ '<li><a href="#"onclick="show_ticket_modal(); close_sidebar()">билет на концерт</li>'
			;
		document.querySelector('.nav ul').appendChild(div);	
	}