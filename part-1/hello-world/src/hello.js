
@ -1,20 +1,4 @@
/**
 * Hello module.
 *
 * @module src/hello
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the classic phrase 'Hello, World!'.
 *
 * @returns {string} The greeting 'Hello, World!'.
 */
function sayHello () {
  return 'Hello, World!'
}

const sayHello = sayHello


console.log(tellType('dog jumped over the moon'))
console.log(tellType(true))
console.log(tellType(42))
console.log(tellType({}))
console.log(tellType([]))
console.log(tellType(null))
console.log(tellType(function () {}))
console.log(tellType())