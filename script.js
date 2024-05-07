
function showDropdown(event){
    event.preventDefault();
    const dropdown = document.querySelector("#dropdown")
    dropdown.style.display="flex"
}
function hideDropdown(event){
    event.preventDefault();
    const sidebar = document.querySelector("#dropdown")
    dropdown.style.display="none"
}

