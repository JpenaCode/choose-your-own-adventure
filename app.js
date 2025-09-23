const prompt =require(`prompt-sync`)();

const username =prompt(`what is your name?`);
console.log(`Your name is ${username}`);

const weaponInput = prompt(`Welcome ${username}, now please choose a weapon: Sword or Bow.`);

function describeWeapon(choice) {
    const weapon = choice.trim().toLowerCase();

if (weapon === `sword`) {
    console.log("That's a sharp weapon! Useful Upclose")
} else if (weapon === `bow`) {
    console.log(`You must be very skilled! You're dangerous from afar!`)
}
}

describeWeapon(weaponInput)

const weatherInput = prompt(`Now let me ask you. Do you prefer Hot or Cold?`)

function describeWeather(choice) {
    const weather = choice.trim().toLowerCase()

if (weather === `hot`) {
    console.log(`Suddenly a Tornado forms and surrounds around you. You can't see an inch away from you You magically get swept away to a icey tundra`)
    console.log(`With nothing in sight but an icey wasteland you walk on aimlessly. After a mile of walking a polar bear appears`)
    const action = prompt(`attack, hide, run`).trim().toLowerCase()

if (action === 'attack') {
      console.log('You charge forward—your courage echoes across the tundra.');
    } else if (action === 'hide') {
      console.log('You duck behind a snowdrift, the bear sniffs the air and lumbers past.');
    } else if (action === 'run') {
      console.log('You sprint across the crunchy snow, breath clouding the air behind you.');
    }

} else if (weather === `cold`) {
    console.log(`Suddenly a bright light flashes your eyes and blinds you and whehn you vison returns suddenly you're in a hot scorching desert`)
    console.log(`a rattlesnake appears`)
    const action = prompt(`Attack, Hide, Run`)

}
}

describeWeather(weatherInput)
