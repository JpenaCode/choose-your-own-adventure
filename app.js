const prompt = require(`prompt-sync`)();

const username = prompt(`What is your name? `);
console.log(`Your name is ${username}`);

const weaponInput = prompt(`Welcome ${username}, now please choose a weapon: Sword or Bow.`);

let successCount = 0;
let failCount = 0;
let runCount = 0;

function isAttackSuccessful(weapon, weather) {
  if (weather.trim().toLowerCase() === 'hot') {
    if (weapon.trim().toLowerCase() === 'sword') {
      return true;
    } else {
      return false;
    }
  } else if (weather.trim().toLowerCase() === 'cold') {
    if (weapon.trim().toLowerCase() === 'bow') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function attackResult(weapon, weather) {
  if (isAttackSuccessful(weapon, weather)) {
    successCount++;
    return 'Your weapon is right for this! You survive unharmed!';
  } else {
    failCount++;
    return `Oh no! You have the wrong weapon for this! You're hurt but you managed to get away. You can\'t survive another attack like that!`;
  }
}

function describeWeapon(choice) {
  if (choice.trim().toLowerCase() === 'sword') {
    console.log("That's a sharp weapon! Very useful up close!");
  } else if (choice.trim().toLowerCase() === 'bow') {
    console.log("You must be very skilled! You're dangerous from afar!");
  }
}

function nextScenario() {
  console.log(`That was intense! You move on and after a long walk you sit and rest. While you try to rest suddenly A shifty looking man appears! You can\'t see his face, he covered it with a scarf but you notice he has a weapon. Do you raise yours?`);
  const action = prompt('yes, no, run: ').trim().toLowerCase();
  const weapon = weaponInput.trim().toLowerCase();

  if (action === 'run') {
    runCount++;
    console.log('You managed to avoid the conflict and run away at full speed aimlessly.');
  } else if (weapon === 'sword') {
    if (action === 'yes') {
      failCount++;
      console.log(`You raise your Sword! Wrong move... Suddenly, before you can even charge at him, you feel an arrow hit you from behind. You realize he wasn\'t alone.`);
    } else if (action === 'no') {
      successCount++;
      console.log('You put your sword down as a show of good faith. You made the right choice. He trusts you and gives you a nice piece of warm bread and points you to the nearest town.');
    }
  } else if (weapon === 'bow') {
    if (action === 'yes') {
      successCount++;
      console.log(`You raise your bow. He puts his arms up, he knows that from this distance you can end him. As a show of good faith he gives you bread and he points you to the nearest town.`);
    } else if (action === 'no') {
      failCount++;
      console.log(`You let your guard down. Wrong move. Suddenly you feel an arrow hit you in the back. He wasn\'t alone and not to be trusted.`);
    }
  }
}

describeWeapon(weaponInput);

const weatherInput = prompt(`Now let me ask you. Do you prefer Hot or Cold? `);

function describeWeather(choice) {
  if (choice.trim().toLowerCase() === 'hot') {
    console.log(`Suddenly are transported to a icey cold tundra. A cruel joke by the narrator.`);
    console.log(`Confused, you turn around to find a hungry polar bear! Do you Attack or Run?`);
    const action = prompt(`attack, run: `).trim().toLowerCase();

    if (action === 'attack') {
      console.log(attackResult(weaponInput, choice));
      nextScenario();
    } else if (action === 'run') {
      runCount++;
      console.log('You were too scared. You managed to get away.');
      nextScenario();
    }

  } else if (choice.trim().toLowerCase() === 'cold') {
    console.log(`Suddenly are transported to a hot scorching desert. A cruel joke by the narrator.`);
    console.log(`Confused, you turn around to find an angry cobra behind you! Do you Attack or Run?`);
    const action = prompt(`attack, run: `).trim().toLowerCase();

    if (action === 'attack') {
      console.log(attackResult(weaponInput, choice));
      nextScenario();
    } else if (action === 'run') {
      runCount++;
      console.log('You were too scared. You managed to get away');
      nextScenario();
    }
  }
}

function gameEnding() {
  if (failCount === 2) {
    console.log("You die on the spot. You never had a chance. You Lose");
  } else if (failCount === 1) {
    console.log("You attempt to make it to safety but you're too hurt. Unfortunately you succumb to your wounds. You Lose");
  } else if (runCount === 2) {
    console.log("The narrator found your adventure too boring. Suddenly he strikes you down with lightning. You Lose");
  } else if (successCount >= 1) {
    console.log("Congratulations! You found the nearest town and made it to safety. You're able to make it home! You win!");
  }
}

describeWeather(weatherInput);
gameEnding();

