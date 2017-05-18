var state = {
  s: {name: 'Single Responsibility', description: 'A class should have one and only one reason to change, meaning that a class should have only one job.'},
  o: {name: 'Open Closed', description: 'Objects or entities should be open for extension, but closed for modification.'},
  l: {name: 'Liskov Substitution Princple', description: 'Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.'},
  i: {name: 'Interface Segregation Principle', description: 'A client should never be forced to implement an interface that it doesnt use or clients shouldnt be forced to depend on methods they do not use.'},
  d: {name: 'Dependency Inversion', description: 'Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.'}
}

var crud = {
  c: {name: 'Create', description: 'I create new things'},
  r: {name: 'Read', description: 'I can read the things that exist'},
  u: {name: 'Update', description: 'I can update things that already have been created'},
  d: {name: 'Delete', description: 'I forever delete things that you don\'t want'},

}

var http = {
  post: {name: 'Post', description: 'Create new things in the server'},
  get: {name: 'Get', description: 'Get things from server'},
  put: {name: 'Put', description: 'Replace certain things in the server'},
  patch: {name: 'Patch', description: '' },
  delete: {name: 'Delete', description: 'Remove things from the server forever'}

}

export default {
    getPrinciple(letter){
      debugger
      return state[letter.toLowerCase()]
  },

    getCrud(letter){
      debugger
      return crud[letter.toLowerCase()]
  },

    getHttp(letter){
      debugger
      return http[letter.toLowerCase()]
    }

}

