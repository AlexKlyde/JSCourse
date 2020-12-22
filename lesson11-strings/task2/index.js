const users = [
  { name: 'Tom', phoneNumber: '777-77-77' },
  { name: 'Alex', phoneNumber: '777-77-77' },
  { name: 'Ron', phoneNumber: '777-77-77' },
];

const sortContacts = (arr, bool = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.sort((a, b) => bool ? 
    a.name.localeCompare(b.name) :
    b.name.localeCompare(a.name));
};
console.log(sortContacts(arr, false));
