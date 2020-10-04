let acak = Math.floor(Math.random() * 3)
let acak2 = Math.floor(Math.random() * 3)


let path_gambar_p1 = ""
let path_gambar_p2 = ""

path_gambar_p1 = [
    "images/kertas-kiri.png",
    "images/batu-kiri.png",
    "images/gunting-kiri.png",
]

path_gambar_p2 = [
    "images/kertas-kanan.png",
    "images/batu-kanan.png",
    "images/gunting-kanan.png",
]


document.querySelector("#player1").setAttribute("src", path_gambar_p1[acak])
document.querySelector("#player2").setAttribute("src", path_gambar_p2[acak2])


let p1Batu = (acak == 1)
let p1Gunting = (acak == 2)
let p1Kertas = (acak == 0)

let p2Batu = (acak2 == 1)
let p2Gunting = (acak2 == 2)
let p2Kertas = (acak2 == 0)


//menang / kalah 
if ((p1Batu && p2Gunting) || (p1Gunting && p2Kertas) || (p1Kertas && p2Batu)){
    document.querySelector("#pesan_p1").innerHTML = "Kamu Menang !!!"
    document.querySelector("#pesan_p2").innerHTML = "Kamu Kalah"
    document.querySelector("#pesan_p1").classList.add("menang")
    document.querySelector("#pesan_p2").classList.add("kalah")
}
if ((p2Batu && p1Gunting) || (p2Gunting && p1Kertas) || (p2Kertas && p1Batu)){
    document.querySelector("#pesan_p2").innerHTML = "Kamu Menang !!!"
    document.querySelector("#pesan_p1").innerHTML = "Kamu Kalah"
    document.querySelector("#pesan_p2").classList.add("menang")
    document.querySelector("#pesan_p1").classList.add("kalah")
}

//seri
if (acak == acak2){
    document.querySelector("#pesan_p2").innerHTML = "Seri"
    document.querySelector("#pesan_p1").innerHTML = "Seri"
    document.querySelector("#pesan_p2").classList.add("seri")
    document.querySelector("#pesan_p1").classList.add("seri")
}
