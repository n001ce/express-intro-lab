export { 
	find
}

const students = [
  {text: 'Alex', present: true, _id: 125223},
  {text: 'Avis', present: true, _id: 127904},
  {text: 'Betsy', present: true, _id: 127968},
  {text: 'Blake', present: true, _id: 128904},
  {text: 'Boyoon', present: true, _id: 124904},
  {text: 'Cameron', present: true, _id: 122004},
  {text: 'Chitra', present: true, _id: 129904},
  {text: 'Cory', present: true, _id: 128904},
  {text: 'Damien', present: true, _id: 128704},
  {text: 'Dani', present: true, _id: 149204},
  {text: 'David', present: true, _id: 149304},
  {text: 'Gage', present: true, _id: 138704},
  {text: 'Henry', present: true, _id: 135604},
  {text: 'Henwin', present: true, _id: 110904},
  {text: 'Jiexi', present: true, _id: 109704},
  {text: 'John', present: true, _id: 134904},
  {text: 'Katia', present: false, _id: 128765},
  {text: 'Kyler', present: true, _id: 123495},
  {text: 'Michael', present: true, _id: 121234},
  {text: 'Nicholas', present: true, _id: 129985},
  {text: 'Pao', present: true, _id: 122735},
  {text: 'Zahir', present: true, _id: 198765},
  {text: 'Zigg', present: true, _id: 104923},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, students)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

