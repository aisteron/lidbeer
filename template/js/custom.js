// Get the modal
var modal = document.querySelector('.ticket-modal');

// Get the button that opens the modal
var btn = document.querySelectorAll(".buy_button");

// Get the <span> element that closes the modal
var span = document.querySelector('.ticket-modal span.close');

function isHidden(el) {
    var style = window.getComputedStyle(el);
    //return (style.display === 'none')

    return style.display;

}

// When the user clicks on the button, open the modal 
btn[0].onclick = function() {
    modal.style.display = "block";
    if(isHidden(document.querySelector('.float_ticket')) == 'block')
    {
    	document.querySelector('.float_ticket').style.display = 'none';
    }
}
btn[1].onclick = function() {
    modal.style.display = "block";
    if(isHidden(document.querySelector('.float_ticket')) == 'block')
    {
    	document.querySelector('.float_ticket').style.display = 'none';
    }
}
function show_ticket_modal()
{
	modal.style.display = "block";

	if(isHidden(document.querySelector('.float_ticket')) == 'block')
    {
    	document.querySelector('.float_ticket').style.display = 'none';
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.querySelector('.float_ticket').style.display = 'block'

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
	    	//bus_modal.style.top =  top + top*0.2 + 'px';
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
			+ '<li><a href="#" onclick="show_ticket_modal(); close_sidebar()">билет на концерт</li>'
			;
		document.querySelector('.nav ul').appendChild(div);	
	}
if(window.innerWidth > 400)
{
	

	window.onscroll = function() {
	  /*var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	  document.getElementById('showScroll').innerHTML = scrolled + 'px';*/
	  let top = document.querySelector('.bus-order').getBoundingClientRect().top;
	  if(top < 0 && !document.querySelector('.float_ticket'))
	  {
			var div = document.createElement('div');
			div.className = 'float_ticket';
			div.innerHTML = '<a href="#" onclick="bus_order()"><img src="/template/img/float_ticket.png"></a>';
			document.querySelector('header').appendChild(div);
	  } else if(top > 0 && document.querySelector('.float_ticket'))
	  {
	  		document.querySelector('header .float_ticket').style.display = 'none';
	  } else if (top < 0 && document.querySelector('.float_ticket'))
	  {
	  		document.querySelector('header .float_ticket').style.display = 'block';
	  }

	}
}


// current counter from source

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.querySelector("p.count").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/template/count.php", true);
  xhttp.send();
}

loadDoc();

// add counter
var clicked = false;
document.querySelector("img.i-go").addEventListener('click', function(){
	if(!clicked)
	{
		document.querySelector("p.count").innerHTML = parseInt(document.querySelector("p.count").innerHTML) +1;
		clicked = true;
	}
})


// галаконцерт

document.querySelector('.nav a.gala').addEventListener('click', function(e){
	
	if(window.innerWidth < 927){ close_sidebar(); }
	document.querySelector('.wrap.gala').style.visibility = 'visible';
	document.querySelector('.wrap.gala').style.width = '100vw';
	
	let nav = document.querySelectorAll('.nav li a');

	for (let i = nav.length - 1; i >= 0; i--)
	{
	  nav[i].classList.remove('active');
	}

	e.target.classList.add('active');

	document.querySelector('header .logo').innerHTML = '&#x2190;';
	document.querySelector('header .logo').classList.add('arrow');


});

// возврат на главную

function go_home()
{
	document.querySelector('.wrap.gala').style.visibility = 'hidden';
	document.querySelector('.wrap.gala').style.width = '0vw';

	document.querySelector('.wrap.faq').style.visibility = 'hidden';
	document.querySelector('.wrap.faq').style.width = '0vw';

	let nav = document.querySelectorAll('.nav li a');

	for (let i = nav.length - 1; i >= 0; i--)
	{
	  nav[i].classList.remove('active');
	}

	document.querySelector('.nav li a.main').classList.add('active');
	document.querySelector('header .logo').innerHTML = '<img src="template/img/limberi_logo.svg" width="95">';

}

document.querySelector('header .logo').addEventListener('click', go_home);
document.querySelector('.nav li a.main').addEventListener('click', go_home);

// F.A.Q.

document.querySelector('.nav a.faq').addEventListener('click', function(e){
	if(window.innerWidth < 927){ close_sidebar(); }

	document.querySelector('.wrap.faq').style.visibility = 'visible';
	document.querySelector('.wrap.faq').style.width = '100vw';

	let nav = document.querySelectorAll('.nav li a');

	for (let i = nav.length - 1; i >= 0; i--)
	{
	  nav[i].classList.remove('active');
	}

	e.target.classList.add('active');

	document.querySelector('header .logo').innerHTML = '&#x2190;';
	document.querySelector('header .logo').classList.add('arrow');

});

// FAQ tabs

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();