const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

// example 1:
/* const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const passedStudents = allStudentsList
    .filter(name => !studentsForRetake.includes(name));
  
  const messages = passedStudents
    .map(name => 'Good job, ' + name);
  
  return messages;
} */

// example 2:

const getMessages = (allStudents, studentsForRetake) => 
  allStudents
    .filter(name => !studentsForRetake.includes(name))
    .map(name => 'Good job, ' + name);

console.log(getMessages(allStud, retakeStud));

// output:
// ['Good job, a', 'Good job, c']

