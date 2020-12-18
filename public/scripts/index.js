const checked = (id) => {
    let classes = id.className.split(' ');
    classes[1] ? id.classList.remove(classes[1]) : id.classList.add("checked"); 
}

const validate = () => {
    const PREFIX = "https://chat.whatsapp.com/";
    const link = document.getElementById("linkWpp");
    if(!link.value.startsWith(PREFIX))
        link.classList.add('invalid');
}