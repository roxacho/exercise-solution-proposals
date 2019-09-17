/**
 * Determinator module.
 *
 * @module src/determinator
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {*} data The data whose type is to be returned.
 * @returns {string} The data type of the parameter.
 */

 //UPPDATERING: koden funkar som det ska men har ingen console.log för output. Jag har tagit detta kod 
//från app.js och tagit ut determinator och använt tellType för att få ut alla stringer och prova 
//Allting funkar som det ska. Typeof funkar som det ska.  
function tellType (data) {
  let result = 'you sent me a'
  let type = typeof data
  

  if (type === 'undefined') {
    result += 'n undefined value.'
  } else if (type === 'function' ||
      type === 'string' ||
      type === 'number' ||
      type === 'boolean') {
    result += ` ${type}.`
  } else if (type === 'object') {
    if (data === null) {
      result += ' null value.'
    } else if (Array.isArray(data)) {
      result += 'n array.'
    } else {
      result += 'n object.'
     
    }
  }



  return result
}

exports.tellType = tellType

console.log(tellType('dog jumped over the moon'))
console.log(tellType(true))
console.log(tellType(42))
console.log(tellType({}))
console.log(tellType([]))
console.log(tellType(null))
console.log(tellType(function () {}))
console.log(tellType())

