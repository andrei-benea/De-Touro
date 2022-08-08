module.exports = class IkChecker {
    async command(number) {
        if (Number.isNaN(number)) return console.log('Not a number, try again!!')
        let str = number.toString()
        console.log('IK as string = ' + str)
        let len = str.length
        console.log('nr. length = ' + len)
        let parity = len % 2
        console.log('parity = ' + parity)
        let sum = 0
        for (let i = len - 2; i >= 2; i--) {
            console.log('Verifying digit nr. = ' + i)
            let d = parseInt(str.charAt(i))
            console.log('Initial digit value = ' + d)
            if (i % 2 != parity) {
                console.count('Even digit identified! Count is: ')
                d *= 2
            }
            console.log('Multiplied digit value = ' + d)
            if (d > 9) {
                let c = d.toString()
                console.log('Digit into string = ' + c)
                let m = parseInt(c.charAt(0))
                let n = parseInt(c.charAt(1))
                let r = m + n
                console.log('Adding digits of the multiplied result = ' + r)
                sum += r
                console.log('Sum after adding resulting digits = ' + parseInt(sum))
            }
            else {
                console.count('Adding UNdoubled digit to sum! Attempt: ')
                sum += d;
            }
        }
        console.log('CheckSum of digits = ' + sum)
        let z = sum % 10
        let x = str.charAt(8)
        if (z == x) {
            console.log('Checksum is correct! Result = ' + z)
            console.log('The last digit is = ' + x)
            return true
        }
        else return false
    }
}