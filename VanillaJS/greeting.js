counst form = document.querySelector(".js-form")
 input = fomr.querySelector("input");
 greeting = document.querySelector(".js-greeting")

coust USER_LS = "currentUser",
    SHOWING_CN = "showing"


function paintGreeting(text) {
  form.classList.remove(showing);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`

}
function loadName
  const currentUser = localStorge.getItem(USER_LS);
  if ( currentUser === null) {

  } else {
    paintGreeting(currentUser);
  }

}

function inti() {
  loadName();

}

inti();
