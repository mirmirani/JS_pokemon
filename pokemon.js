const pokemon = [
    {
        pokemon_name: "Bulbasaur",
        move1: "Tackle",
        move2: "Growl",
        move3: "Vine whip",
        move4: "Razor leaf",
    },
    {
        pokemon_name: "Charmander",
        move1: "Scratch",
        move2: "Ember",
        move3: "Fire fang",
        move4: "Slash",
    },
    {
        pokemon_name: "Squirtle",
        move1: "Tackle",
        move2: "Tail whip",
        move3: "Water gun",
        move4: "Bubble",
    },
    {
        pokemon_name: "Pikachu",
        move1: "Tail whip",
        move2: "Growl",
        move3: "Thunder shock",
        move4: "Electro ball",
    }
    {
        pokemon_name: "Gastly",
        move1: "Nightmare",
        move2: "Night shade",
        move3: "Payback",
        move4: "Dark pulse",
    }
    {
        pokemon_name: "Geodude",
        move1: "Tackle",
        move2: "Charge",
        move3: "Rock throw",
        move4: "Rock blast",
    }
    {
        pokemon_name: "Clefairy",
        move1: "Spotlight",
        move2: "Sing",
        move3: "Lucky chant",
        move4: "Cosmic power",
    }
    {
        pokemon_name: "Eevee",
        move1: "Bite",
        move2: "Growl",
        move3: "Baby-doll eyes",
        move4: "Tail whip",
    }
]

// add more pokemon?


var game = {
    lastMoveUser: "",
    userLifePts: 100,
    compLifePts: 100,
    compPokemon: "",
    userPokemon: "",
    compMove: "",
    userMove: "",
    userpokemonConfirmed: false,
};

// game state


// compChoice --> Attack

//UserChoice --> Attack


function gamedetails() {
console.log(game)
console.log("last move user?" + game.lastMoveUser)

game.lastMoveUser = false;

console.log("last move user?" + game.lastMoveUser)

console.log(pokemon[0].pokemon_name)
console.log(pokemon[1].pokemon_name)
console.log(pokemon[2].pokemon_name)
console.log(pokemon[3].pokemon_name)

console.log("Comp picks " + pokemon[Math.floor(Math.random()*4)].pokemon_name)

console.log("cold")

}
//function 1 --> choose pokemon
//1.1 comp chooses pokemon

function userChoice() {
   return;
}

function compChoice() {
  var item = pokemon[Math.floor(Math.random() * pokemon.length)]
  console.log(item.pokemon_name)
  console.log(item.move1)
  console.log(item.move2)
  console.log(item.move3)
  console.log(item.move4)
  //put moves in new array and choose random - might need higher order functions 
  return item.pokemon_name;
}

function userChoice1() {
    var item = pokemon[Math.floor(Math.random() * pokemon.length)]
    console.log(item.pokemon_name)
    console.log(item.move1)
    console.log(item.move2)
    console.log(item.move3)
    console.log(item.move4)
    //put moves in new array and choose random - might need higher order functions 
    return item.pokemon_name;
   return;
}

function userChoice2() {
   return;
}


//function 2 --> stop from re-choosing // at the end

//function 3 --> fight sequence
//3.1 loose life
//

//function 1 ---> end game and reset, make choosing mokemon availabe to work



function stopSelection() {
    return
}

function compAttack() {
    var item = pokemon[Math.floor(Math.random() * pokemon.length)]
    console.log(item.pokemon_name)
    console.log(item.move1)
    // here I have the pokemon selected --> put the items in a list
    let attacks = [];
    attacks.push(item.move1, item.move2, item.move3, item.move4);

    let cAttack = attacks[Math.floor(Math.random()* attacks.length)];

    console.log(attacks)

    return cAttack

    //put moves in a list
    //get from list
    // sort out how many attack points in a following function
}


/*
    data
    selctions/states - root object
    onclick - choose pokemon
    - confirm box appears -
    - user confirms --> moves box appears and compSelection appears - 
    user choice = clicked pokemon
    user attack = button choice
    user attack --> random attack points, comp loses life points
    last move changes to user

    comp choice --> chooses pokemon
    comp attack choice --> random attack
    comp damage points --> changes lastmove to comp
    switch to user turn -->

    gameOver function --> if comp life points 0/<0 --> user wins 
    play again button appears

    play again button leads to pokemon selection appearing

*/

function pokemon_confirmation() {
    if (userpokemonConfirmed != false) {
        return
    } else {

    }
}

// create markup first
//