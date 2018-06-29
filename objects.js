const playlist = new Object({ Nero: 'Promises'})

function updatePlaylist(playlist, artistName, songtitle){
  Object.assign({}, playlist, { ['pendulum']: 'tarantula'})
  console.log(playlist)
}