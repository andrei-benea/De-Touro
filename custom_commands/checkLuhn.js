module.exports = class CheckLuhn {
    async command(number) {
        if (Number.isNaN(number)) return console.log('Not a number, try again!!')
        let sss = number.toString()
        console.log(sss)
        let len = sss.length;
        console.log('nr. length: ' + len)
        let parity = len % 2;
        console.log('parity: ' + parity)
        let sum = 0;
        for (let i = len - 2; i >= 0; i--) {
            console.log('checking digit = ' + i)
            let d = parseInt(sss.charAt(i));
            console.log('initial d = ' + d)
            if (i % 2 != parity) {
                console.count('parity digit identified! Attempt: ')
                console.log('digit value to compare against parity = ' + i % 2)
                d *= 2
            }
            console.log('multiplied d = ' + d)
            if (d > 9) {
                let c = d.toString()
                console.log('d to string is = ' + c)
                let n = parseInt(c.charAt(0))
                let m = parseInt(c.charAt(1))
                let r = n + m;
                console.log('adding those digits together results in r = ' + r)
                sum += r;
                console.log('sum after adding doubled d digits = ' + parseInt(sum))
            }
            else {
                console.count('Adding UNdoubled digit to sum! Attempt: ')
                sum += d;
            }
            console.log('The sum of all digits is = ' + parseInt(sum))
        }
        let z = 10 - (sum % 10)
        let p = sss.charAt(8)
        if (z == p) {
            console.log('Checksum is correct! The checksum nr. is = ' + z)
            console.log('Checksum is correct! The last digit is = ' + p)
            return true
        }
        else return false
    }
}