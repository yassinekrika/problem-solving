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

// function noBoringZeros(n: number): number {
//     return n === 0 ? 0 : n % 10 !== 0 ? n : noBoringZeros(n / 10)
// }

// console.log(noBoringZeros(0))

// In this Kata, you should implement a function, that takes integer in range [0..255] (8 bits), and returns combination of pits and lands that encode the number. Result should have format of string: PLLPL... where P represents pit and L represents land. Combination should always start with pit. Numbers should be encoded in little-endian, which means you start from least significant bit.

// Example
// Input: 5

// Binary representation (8 bits): 00000101

// Output: PLLPPPPPP

// Explanation:

// Starts from P as per description
// Changes to L because first bit is 1
// Stays L because second bit is 0
// Changes to P because third bit is 1
// Stays P because fourth bit is 0
// Stays P till the end because all subsequent bits are 0


export function encodeCD(n: number): string {
    let encode: string = 'P'
    let nbr:string = '0'.repeat(8 - n.toString(2).length) + n.toString(2)
    
    let str:string = nbr.split('').reverse().map((n) => {
      if (n === "1") {
        if (encode[encode.length] === 'L'){
          encode + 'P'
        } else if (encode[encode.length] === 'P') {
          encode + 'L'
        }
      } else {
        encode + encode[encode.length]
      }
      return encode
  //     return n === '1' && encode[encode.length - 1] === 'L' ? encode + 'P' : encode +'L'                                            
    }).join('')
    console.log(str)
    return str
}

console.log(encodeCD(5))