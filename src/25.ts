import axios from 'axios';

const url = 'https://api.github.com/users/username';
await axios.get(url).then(response => {
  console.log('Username:', response.data.login);
});
