let isOpen;

const isContactOpen = () => {
    const share = document.querySelector(".share");

    isOpen = share.classList.contains("checked");
    console.log(isOpen);
};

const buttonClick = () => {
    const contactButton = document.querySelector(".share");

    if (isOpen) {
        contactButton.classList.remove("checked");
        hideContact();
    } else {
        contactButton.classList.add("checked");
        showContact();
    }
};

const hideContact = () => {
    const contactContainer = document.querySelector(".contact");
    contactContainer.classList.add("hidden");
    isOpen = false;
    const contactButton = document.querySelector(".share");
    contactButton.classList.remove("checked");
    const shareIcon = document.querySelector(".share_img");
    shareIcon.classList.remove("checked");
};
const showContact = () => {
    const contactContainer = document.querySelector(".contact");
    contactContainer.classList.remove("hidden");
    isOpen = true;
    const contactButton = document.querySelector(".share");
    contactButton.classList.add("checked");
    const shareIcon = document.querySelector(".share_img");
    shareIcon.classList.add("checked");
};

const shareButton = document.querySelector(".share");
shareButton.addEventListener("click", buttonClick);
