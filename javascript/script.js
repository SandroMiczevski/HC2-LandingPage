// Open the sidebar after clicking the button
function registerBtnClick(){
    var formList = document.getElementById("form");    
    if (formList.className == "form-off"){    
        formList.className = "form-on";    
    } else {    
        formList.className = "form-off";    
    }  
}

// Form Submission 
const form = document.getElementById("registration");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let data = {
        username,
        email
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content')
    let loading = `<p> Loading... <p>`
    content.innerHTML = loading;

    console.log(`${username}, ${email}`)

    setTimeout(() => {
        content.innerHTML = `<p> Done! <p>`;
    }, 1000)
})