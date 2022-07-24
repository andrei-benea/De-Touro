module.exports = class CheckLuhn {
    async command(code) {
        if (Number.isNaN(code)) return false
        var len = code.length;
        var parity = len % 2;
        var sum = 0;
        for (var i = len-1; i >= 0; i--)
        {
            var d = parseInt(code.charAt(i));
            if (i % 2 == parity) { d *= 2 }
            if (d > 9) { d -= 9 }
            sum += d;
        }
        return true;
    }
}