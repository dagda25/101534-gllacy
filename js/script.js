	var link = document.querySelector(".feedback-button");
	
	var popup = document.querySelector(".modal-feedback");
	var close = popup.querySelector(".modal-close");
	
	var form = popup.querySelector("form");
	var userName= popup.querySelector("[name=user-name]");
	var email = popup.querySelector("[name=user-email]");
	var message = popup.querySelector("[name=user-message]");
	
	var storage = localStorage.getItem("userName");
	var storageMail = localStorage.getItem("email");
	
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-feedback-visible");
		
		if (storage && storageMail) {
			userName.value = storage;
			email.value = storageMail;
			message.focus();
		} else if (storage) {
			userName.value = storage;
			email.focus();
		} else if (storageMail) {
			email.value = storageMail;
			userName.focus();
		} else {
			userName.focus();
		}
	});
	
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-feedback-visible");
		popup.classList.remove("modal-error");
	});
	
	form.addEventListener("submit", function (evt) {
		if (!userName.value || !email.value || !message.value) {
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		} else {
			localStorage.setItem("userName", userName.value);
			localStorage.setItem("email", email.value);
		}
	});
	
	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			if (popup.classList.contains("modal-feedback-visible")) {
				popup.classList.remove("modal-feedback-visible");
				popup.classList.remove("modal-error");
			}
		}
	});