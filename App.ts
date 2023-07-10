// export function reverseWords(str: string): string {
//     return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
// }


// logical solution
// export function maskify(cc: string): string {
//     let c: string = ''
//     if (cc.length >= 4) {
//       for (let i:number = 0; i < cc.length - 4; i++) {
//         c += '#'
//       }
//       c += cc.slice(-4)
//     } else {
//       return cc
//     }
//     return c
// }

// one line solution
// export function maskify(cc: string): string {
//     return cc.length >= 4 ? '#'.repeat(cc.length - 4) + cc.slice(-4) : cc
// }

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n: number): number {
    return n === 0 ? 0 : n % 10 !== 0 ? n : noBoringZeros(n / 10)
}

console.log(noBoringZeros(0))