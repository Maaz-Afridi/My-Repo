

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let input = document.getElementById("input");
    let random = Math.floor(Math.random() * 12345) * 4;
    let str = String(random);
    console.log(str);
    if (str.length < 6) {
        str += 2;
    }
    console.log(str)
    let color = input.value = "#" + str;
    document.body.style.backgroundColor = color;
});
