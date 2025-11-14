export default async function main() {

    console.log('hello')

    var a = 1

    console.log(`a : ${a}`)
    a= a + 1
    console.log(`a : ${a}`)

    let b = 1
    b += 5
    console.log(`b : ${b}`)

    const c = 1
    // c += 1
    console.log(`c : ${c}`)
    
    let a1 = 1
    console.log(`a1: ${a1}`)
    {
        let a1 = 3
        a1 += 1 
        console.log(` a1: ${a1}`)
    }
    console.log(`a1: ${a1}`)
    
}
const menuitems = document.querySelectorAll(".menu-item");
let currentIndex = 0;

window.addEventListener("keydown", (e) => {
    if(e.key === "ArrowUp") {
        menuitems[currentIndex].classList.remove('select');
        currentIndex--;
        if(currentIndex < 0) currentIndex = 2;
    }
    else if(e.key === "ArrowDown") {
        menuitems[currentIndex].classList.remove('select');
        currentIndex++;
        currentIndex %= 3;
    }

    menuitems[currentIndex].classList.add("select");
});
