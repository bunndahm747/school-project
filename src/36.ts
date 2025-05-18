import { GitHub } from 'github';

const client = new GitHub({
  auth: {
    token: 'YOUR_GITHUB_TOKEN',
  },
});

client.user('user').repos('repo', 'branch')
  .then((repos) => {
    console.log(repos);
  })
  .catch((err) => {
    console.error(err);
  });
