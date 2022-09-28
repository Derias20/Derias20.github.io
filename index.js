const discordElement = document.getElementById("discord");

discordElement.addEventListener("click", () => {
    if (navigator.clipboard)
        navigator.clipboard.writeText(discordElement.attributes.getNamedItem("data-tag").value);

    const popup = document.createElement("span");
    popup.classList.add("popup");
    popup.innerText = navigator.clipboard ? "Copied to clipboard!" : discordElement.attributes.getNamedItem("data-tag").value;
    popup.style.left = discordElement.getBoundingClientRect().left - discordElement.getBoundingClientRect().width + "px";
    popup.style.top = discordElement.getBoundingClientRect().top - discordElement.getBoundingClientRect().height - 50 + "px";
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 3000);
});

const observer = new IntersectionObserver((entries) => {
    for(let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            setTimeout(() => {
                entries[i].target.classList.add("visible");
            }, 500 * (i + 1));
        }
    }
});

document.querySelectorAll(".animate-me").forEach((element) => observer.observe(element));
