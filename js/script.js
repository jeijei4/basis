function winbtn() {
    sho1 = document.getElementById("winbtn");
    sho2 = document.getElementById("bodbtn");
    sho1.style.display = "block";
    sho2.style.display = "block";
}

function clobtn() {
    sho1.style.display = "none";
    sho2.style.display = "none";
};

function winauto() {
    winauto = document.getElementById("winauto");
    bodauto = document.getElementById("bodauto");
    winauto.style.display = "block";
    bodauto.style.display = "block";
}

function cloauto() {
    winauto.style.display = "none";
    bodauto.style.display = "none";
};
document.onload = winauto();