var playlist = new Object({ Nero: 'Promises'})

function updatePlaylist(playlist, artistName, songtitle){
  Object.assign({}, playlist, { ['pendulum']: 'tarantula'})
  return playlist
}
 console.log(playlist)