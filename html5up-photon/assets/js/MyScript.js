/**
 * Created by Nemanja on 12/29/2017.
 */
function showMenuOnScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("menu").className = "navbar navbar-inverse navbar-fixed-top";
        document.getElementById("menu").classList.remove("navbar-inverse-transparent");
        document.getElementById("navbar-before").style.display="block";
    } else {
        document.getElementById("menu").className = "navbar navbar-inverse-transparent navbar-fixed-top";
        document.getElementById("navbar-before").style.display="none";
    }
}