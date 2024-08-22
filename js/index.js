
    const rejectCookieBtn = document.getElementById('rejact');
    const acceptCookieBtn = document.getElementById('Accept');
    const cookiePopup = document.getElementById('cookie');
    const sections = document.querySelectorAll('main section');
    const emailNameElement = document.getElementById('emailtext');


    rejectCookieBtn.addEventListener('click', function() {
        cookiePopup.style.display = 'none';
        
    });

    acceptCookieBtn.addEventListener('click', function() {
        cookiePopup.style.display = 'none';
        setCookie("returningUser", "yes", 365);
        
    });
// Function to set a cookie
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    let nameEQ = name + "=";
    let cookiesArray = document.cookie.split(';');
    for(let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}
// Function to check if the user is returning
function checkReturningUser() {
    let user = getCookie("returningUser");
    if (user) {
        cookiePopup.style.display = 'none';
    }
}


checkReturningUser();




function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

function checkLogin() {
    var session = getCookie('session');
    if (session) {
        var user = JSON.parse(getCookie(session));

        
        document.getElementById('signup').style.display = 'none';
        document.getElementById('account').style.display = 'none';
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';



    }

}


document.addEventListener('DOMContentLoaded', function() {
    checkLogin();
});
const logoutButton = document.getElementById('logout');
    
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            

            function deleteCookie(name) {
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
            }
            
  
        deleteCookie('session');
        document.getElementById('signup').style.display = '';
        document.getElementById('account').style.display = '';
        document.getElementById('login').style.display = '';
        document.getElementById('logout').style.display = 'none';
        document.getElementById('emailtext').style.display = 'none';
        
            
        });
    }


    function displayEmail() {
        const sessionCookie = getCookie('session');
        const emailTextElement = document.getElementById('emailtext');
    
        if (sessionCookie) {
            const user = JSON.parse(sessionCookie);
            if (user && user.name) {
                emailTextElement.textContent = user.name;
            }
        }
        

    }
    displayEmail();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
    
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




