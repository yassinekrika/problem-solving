// logical solution
export function maskify(cc: string): string {
    let c: string = ''
    if (cc.length >= 4) {
      for (let i:number = 0; i < cc.length - 4; i++) {
        c += '#'
      }
      c += cc.slice(-4)
    } else {
      return cc
    }
    return c
}

console.log('yassine')
// one line solution
// export function maskify(cc: string): string {
//     return cc.length >= 4 ? '#'.repeat(cc.length - 4) + cc.slice(-4) : cc
// }