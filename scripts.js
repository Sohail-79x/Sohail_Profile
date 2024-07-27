document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const name = "Sohail";
    let index = 0;

    function typeWriter() {
        if (index < name.length) {
            nameElement.textContent += name.charAt(index);
            index++;
            setTimeout(typeWriter, 200); 
        }
    }

    typeWriter();
});
