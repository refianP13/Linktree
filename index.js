{

}

const buttons = [
    {
        name: "instagram",
        link: "https://www.instagram.com/finnzz_ndrian/",
        class: "instagram"
    },
    {
        name: "Youtube",
        link: "https://www.instagram.com/finnzz_ndrian/",
        class: "youtube"
    },

];
const btnContainer = document.getElementById("button-container")
buttons.forEach((button) => {
    
    const btn = document.createElement("button");
    btn.innerText = button.name;
    btn.classList.add("btn");
    btn.classList.add(button.class);
    btn.addEventListener("click", () => window.open(button.link, "_blank"))
    btnContainer.append(btn);
});
