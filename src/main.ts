/**
 * The program uses the Vehicle class
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-10-31
 */

import Vehicle from './vehicle'

console.log('Created Ford edge')
const fordEdge = new Vehicle('black', 'B70-T4RY0', 5, 254)

console.log('Status:')
fordEdge.status()

console.log('Accelerating, 10 of power for 10 sec.')
fordEdge.accelerate(10, 10)
console.log(`New speed: ${Number(fordEdge.getSpeed())}`)

console.log('Changing colour to white:')
fordEdge.setColor('white')
console.log(`New color: ${String(fordEdge.getColor())}`)

// new Bugatti
console.log('\nCreated a Bugatti')
const bugatti = new Vehicle('grey', 'GHD-78TU', 3, 220)

console.log('Status:')
bugatti.status()

console.log('Accelerating, 100 of power for 4 sec.')
bugatti.accelerate(100, 4)
console.log(`New speed: ${Number(bugatti.getSpeed())}`)

console.log('Breaking, 10 of power for 10 sec.')
bugatti.break(10, 10)
console.log(`New speed: ${Number(bugatti.getSpeed())}`)

console.log('Changing color:')
bugatti.setColor('racing red!')
console.log(`New color: ${String(bugatti.getColor())}`)

// new Citroen Ami
console.log('\nCreated a Citroen Ami')
const citroenAmi = new Vehicle('blue', 'FS-695-DQ', 2, 45)

console.log('Status:')
citroenAmi.status()

console.log('Accelerating, 5 of power for 10 sec.')
citroenAmi.accelerate(5, 10)
console.log(`New speed: ${Number(citroenAmi.getSpeed())}`)

console.log('Breaking, 2 of power for 10 sec.')
citroenAmi.break(2, 10)
console.log(`New speed: ${Number(citroenAmi.getSpeed())}`)

console.log('Changing color:')
citroenAmi.setColor('purple')
console.log(`New color: ${String(citroenAmi.getColor())}`)

console.log('\nDone.')
