// script.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const contentContainer = document.getElementById('content-container');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const target = this.dataset.target; 

            getContent(target); 
        });
    });

    function getContent(target) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `image/${target}.html`, true);

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                contentContainer.innerHTML = xhr.responseText; 
            } else {
                console.error("Request failed. Status:", xhr.status);
            }
        };

        xhr.onerror = function() {
            console.error("Error occurred during request.");
        };

        xhr.send();
    }
});