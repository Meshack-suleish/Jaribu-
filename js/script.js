function greetUser() {
    const greetingDiv = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 15) {
        greeting = "Good Afternoon!";
    } else if(hour < 19){
        greeting = "Good Evening!";
    }else{
        greeting ="Good Night!";
    }
    greetingDiv.innerHTML = `<h2>${greeting}</h2>`;
}

function validateContactForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (phone && !phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }
    return true;
}

function toggleDetails(id) {
    const project = document.getElementById(id);
    project.style.display = project.style.display === 'none' ? 'block' : 'none';
}

// function toggleTheme() {
//      document.body.style.backgroundColor="black";
//      document.body.style.color ="white";
// }
