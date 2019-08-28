var output = document.getElementById("result");

function resolve(work) {
    var pressed = work.innerHTML;
    if (pressed == "=") {
        output.innerHTML = eval(output.innerHTML);
    } else if (pressed == "C") {
        output.innerHTML = 0;
    } else {
        if (output.innerHTML == "0") {
            if ((pressed == ".") || (pressed > 0)) {
                output.innerHTML = pressed;
            }
        } else {

            if (!isNaN(pressed)) {
                output.innerHTML += pressed;
            } else {
                if (!isNaN(output.innerHTML.charAt(output.innerHTML.length - 1))) {
                    output.innerHTML += pressed;
                } else {
                    output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1) + pressed;
                }
            }
        }
    }
}



