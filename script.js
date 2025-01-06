let genres = ['Platformer', 'RPG', 'Horror', 'Action', 'Strategy', 'Simulation'];
let themes = ['Space', 'Fantasy', 'Medieval', 'Modern City', 'Post-Apocalyptic', 'Underwater'];
let mechanics = ['Stealth', 'Crafting', 'Building', 'Combat', 'Exploration', 'Puzzle-solving'];
let characters = ['Hero', 'Villain', 'Alien', 'Robot', 'Mage', 'Detective'];
let objectives = ['Rescue', 'Escape', 'Collect', 'Defend', 'Explore', 'Solve'];

let genre = genres[Math.floor(Math.random() * genres.length)];
let theme = themes[Math.floor(Math.random() * themes.length)];
let mechanic = mechanics[Math.floor(Math.random() * mechanics.length)];
let character = characters[Math.floor(Math.random() * characters.length)];
let objective = objectives[Math.floor(Math.random() * objectives.length)];
var idea = `A ${genre} game set in a ${theme} world where you play as a ${character} with ${mechanic} mechanics. The objective is to ${objective}.`;

var explanation = `
                <strong>Setting:</strong> The game is set in a ${theme} world, featuring ${theme === 'Medieval' ? 'castles, knights, and a historical atmosphere' : ''}${theme === 'Fantasy' ? 'magical elements, mythical creatures, and enchanted lands' : ''}${theme === 'Space' ? 'futuristic spaceships, alien planets, and the vast expanse of the cosmos' : ''}${theme === 'Modern City' ? 'a bustling metropolis with skyscrapers, modern technology, and urban environments' : ''}${theme === 'Post-Apocalyptic' ? 'a ruined world with scarce resources and dangerous factions' : ''}${theme === 'Underwater' ? 'vast oceans, underwater cities, and exotic marine life' : ''}.
                <br><br>
                <strong>Main Character:</strong> You play as a ${character}, ${character === 'Hero' ? 'a brave individual determined to overcome challenges' : ''}${character === 'Villain' ? 'a cunning antagonist with a complex backstory' : ''}${character === 'Alien' ? 'an extraterrestrial being with unique abilities and perspective' : ''}${character === 'Robot' ? 'a highly advanced machine with a unique perspective on the world' : ''}${character === 'Mage' ? 'a powerful spellcaster with magical abilities' : ''}${character === 'Detective' ? 'a sharp investigator piecing together clues' : ''}.
                <br><br>
                <strong>Gameplay Mechanics:</strong> The game features ${mechanic} mechanics, allowing players to ${mechanic === 'Stealth' ? 'sneak past enemies, avoid detection, and use stealth tactics' : ''}${mechanic === 'Crafting' ? 'create tools, weapons, and items to aid in your journey' : ''}${mechanic === 'Building' ? 'construct structures, fortifications, and other creations to overcome obstacles' : ''}${mechanic === 'Combat' ? 'engage in strategic fights against enemies, using a variety of weapons and tactics' : ''}${mechanic === 'Exploration' ? 'explore vast and diverse environments, uncovering secrets and treasures' : ''}${mechanic === 'Puzzle-solving' ? 'solve challenging puzzles to progress through the game' : ''}.
                <br><br>
                <strong>Objective:</strong> The main goal is to ${objective}. This could involve ${objective === 'Rescue' ? 'saving an important character or group of people' : ''}${objective === 'Escape' ? 'finding a way out of a dangerous situation or location' : ''}${objective === 'Collect' ? 'gathering specific items or resources scattered throughout the world' : ''}${objective === 'Defend' ? 'protecting a location or group from incoming threats' : ''}${objective === 'Explore' ? 'discovering new areas and uncovering the mysteries they hold' : ''}${objective === 'Solve' ? 'unraveling a complex mystery or puzzle' : ''}.
                <br><br>
                <strong>Example Scenario:</strong> As a ${character} in this ${theme} world, you might ${objective === 'Rescue' ? `venture into a dark forest to rescue a kidnapped prince, using your ${mechanic} skills to navigate treacherous terrain and avoid enemy patrols` : objective === 'Escape' ? `find yourself trapped in an ancient castle, where you must use your ${mechanic} abilities to build makeshift ladders and bridges to escape` : objective === 'Collect' ? `explore a vast space station, collecting rare artifacts while using your ${mechanic} skills to avoid hostile alien creatures` : objective === 'Defend' ? `fortify a base in a post-apocalyptic wasteland, defending it against waves of hostile mutants using your ${mechanic} skills` : objective === 'Explore' ? `dive into the depths of an underwater city, uncovering ancient secrets and hidden treasures` : `use your detective skills to solve a series of complex puzzles and uncover the truth behind a mysterious event in a futuristic city`}.
    
            `;

document.getElementById('idea').innerText = idea;
document.getElementById('explanation').innerHTML = explanation;