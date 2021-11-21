function Bac() {
    var a = prompt("Enter Your Backgroung Color")
    alert(a)
    document.getElementById('Head').style.backgroundColor = a
}

function TexCol() {
    var b = prompt("Enter Your Backgroung Color")
    alert(b)
    document.getElementById('Head').style.color = b
}


function showImg() {
    document.getElementById("myImg").style.display = "inline"
}

function bigImg() {
    document.getElementById("myImg").style.width = "600px"
}

function smallImg() {
    document.getElementById("myImg").style.width = "300px"
}

function hideImg() {
    document.getElementById("myImg").style.display = "none"
}

function bulbToggler(id, e) {
    if (id == 1) {
        e.src = "./images/1.gif"
    } else {
        e.src = "./images/2.gif"
    }
}

function ChangeColor() {
    var para1 = prompt("Enter para 1 color")
    var para2 = prompt("Enter para 2 color")
    var para3 = prompt("Enter para 3 color")
    var para4 = prompt("Enter para 4 color")

    var result = document.getElementsByTagName("p")
    result[0].style.color = (para1)
    result[1].style.color = (para2)
    result[2].style.color = (para3)
    result[3].style.color = (para4)


}