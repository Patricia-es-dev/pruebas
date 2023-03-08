import axios from 'axios'
const CODE_URL = 'https://jsonplaceholder.typicode.com/users'
// import codeWarProfile from '@/domain/codeWarProfile'
// import chuckJoke from '@/domain/chuckJoke'
// const CODE_URL = 'https://www.codewars.com/api/v1/users/some_user'
// const CHUCK_URL = 'https://api.chucknorris.io/jokes/random'
// async function getChuckRandomJoke() {
//   const response = await axios.get(CHUCK_URL)
//   return chuckJoke(response.data)
//   }
//   async function getCodewarProfile() {
//     const response = await axios.get(CODE_URL)
//     console.log('response')
//     return codeWarProfile(response.data)
//     // return response.data.map((data) => chuckJoke(data))
//   }
// export default {
//   getChuckRandomJoke,
//   getCodewarProfile
// }
async function getRooms() {
  try {
    const response = await axios.get(CODE_URL);
    return chuckJoke(response.data)
  } catch (e) {
    console.log(e);
  }
}
async function storeRoom() {
  const payload = {
    name: this.name,
    email : this.email
  }
  try {
    const room = await axios.post(CODE_URL, payload);
    console.log(room , 'has been added')
  } catch(e) {
    console.log(e);
  }
}
async function updateRoom() {
  const payload = {
    name: this.name,
    email : this.email
  }
  try {
    const room = await axios.put(CODE_URL + this.room.id, payload);
    console.log(room.data);
    alert("Room updated!");
  } catch (e) {
    console.log(e);
  }
}
async function deleteRoom(id) {
  let x = window.confirm("You want to delete the user?");

  if (x) {
    const room = await axios.delete(CODE_URL + id);

    console.log(room);
    alert("Room deleted!");
  }
}
export default {
  getRooms,
  storeRoom,
  updateRoom,
  deleteRoom
}