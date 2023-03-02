let game = {
    atoms: 0,
    apc: 1,
    aps: 0,
    apccost: 10,
    prestige: {
        points: 0,
        unlocked: false
    }
}

setInterval(()=>{
    game.atoms += game.aps/60
    document.getElementById("atoms").innerHTML = Math.floor(game.atoms)
    document.getElementById("atomspersec").innerHTML = Math.floor(game.aps)
},1000/60)

function inc() {
    atoms += apc
}

function incapc() {
    if (game.atoms >= game.apccost) {game.atoms -= game.apccost; game.apccost *= 1.5; game.apc += 1}
    document.getElementById("atomgain").innerHTML = Math.floor(game.apc)
}

function prestige() {
    if (game.atoms >= 1e69) {
        game.prestige.points = game.atoms / 1e69
        game.atoms = 0
        game.apc = 1
        game.aps = 0
        game.apccost = 10
        incapc()
        document.getElementById("pp").innerHTML = Math.floor(game.perstige.points)
    }
}
