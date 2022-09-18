var kartlar = document.querySelector(".kartlar")
var konum = 0

var solBtn = document.querySelector("#solBtn")

solBtn.onclick = ()=>{
    console.log(konum);
    if (konum - 180 < 0) return
    konum -= 180
    kartlar.scrollTo(konum,0)
}

var sagBtn = document.querySelector("#sagBtn")

sagBtn.onclick = ()=>{
    console.log(konum);
    if (konum +180 > kartlar.scrollWidth - kartlar.clientWidth + 40) return
    konum += 180
    kartlar.scrollTo(konum,0)
}