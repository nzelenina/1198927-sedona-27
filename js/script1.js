var link = document.querySelector (".date-button");
		
		var wind = document.querySelector (".modal-date");
		var popup = document.querySelector (".search");
		
		link.addEventListener ("click" , function (evt) {
		evt.preventDefault();
		wind.classList.add ("modal-close");
	});
	popup.addEventListener ("click", function (evt){
			evt.preventDefault();
			wind.classList.remove ("modal-close");
			
			
			
		
	});
