let game = {
    atoms: 0,
    aps: 0
}

setInterval(()=>{
    game.atoms += game.aps/60
    document.getElementById("atoms").innerHTML = Math.floor(game.atoms)
},1000/60)