

const iterations = 200;
var resolutionX = 1920;
var resolutionY = myHeight / (myWidth / resolutionX);
var text = document.getElementById("span");

var offset = new CNum(0, 0);

function drawImage() {
    for (y = 0; y < resolutionY; y++) {
        for (x = 0; x < resolutionX; x++) {


            var complexNX = ((x / resolutionX * myWidth + ((resolutionX / myWidth) / 2)) - centerX) / scale;
            var complexNY = ((y / resolutionY * myHeight + ((resolutionY / myHeight) / 2)) - centerY) / scale;
            var complexConstant = new CNum(complexNX, complexNY).add(offset);


            var complex = new CNum(0, 0);
            var stable = true;
            var i = 0;

            do {


                complex = complex.square();
                complex = complex.add(complexConstant);

                if (complex.magnitude() > 2) {
                    stable = false;
                }
                else {
                    i++;
                }

            } while ((complex.magnitude() < 2 && i < iterations));



            var percentage = i / iterations;
            if (i == iterations) {
                ctx.fillStyle = "#000000";
            }
            else {
                var rgb = hslToRgb(percentage, 1, 0.45);
                ctx.fillStyle = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
            }
            //comment the above block and uncooment below for other colors
            /* else {
                ctx.fillStyle = "rgb(" + percentage*255+ ",0,0)"
            } */




            ctx.fillRect(x * (myWidth / resolutionX), y * (myHeight / resolutionY), myWidth / resolutionX + 1, myHeight / resolutionY + 1);

        }
        text.innerHTML = Math.round((y / resolutionY) * 100) + "%";
    }

}

function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
