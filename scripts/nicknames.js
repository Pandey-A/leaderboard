import { join } from "path";
import { read, write } from "./utils.js";
let fileLoc = join(process.cwd(), "participants.json");

let firstName = [
	"Always",
	"Amazing",
	"Angry",
	"Awesome",
	"Balanced",
	"Best",
	"Big",
	"Bitter",
	"Bold",
	"Bonkers",
	"Bouncy",
	"Brave",
	"Bright",
	"Bubbly",
	"Bumbly",
	"Chaotic",
	"Chatty",
	"Cheeky",
	"Cheery",
	"Chic",
	"Chill",
	"Chilled",
	"Chilly",
	"Chrome",
	"Classic",
	"Clever",
	"Cloudy",
	"Clumsy",
	"Cold",
	"Colossal",
	"Cool",
	"Crafty",
	"Crazy",
	"Cuddly",
	"Dizzy",
	"Dramatic",
	"Dreamy",
	"Electric",
	"Epic",
	"Fabulous",
	"Famous",
	"Fancy",
	"Fast",
	"Feisty",
	"Firey",
	"First",
	"Fluffy",
	"Freezing",
	"Friendly",
	"Fun",
	"Funky",
	"Gentle",
	"Giddy",
	"Gifted",
	"Glorious",
	"Goofy",
	"Googly",
	"Graceful",
	"Great",
	"Grey",
	"Groovy",
	"Gutsy",
	"Happy",
	"Hasty",
	"Hazy",
	"Heroic",
	"Hyper",
	"Infallible",
	"Infamous",
	"Janky",
	"Jittery",
	"Jolly",
	"Joyful",
	"Jumpy",
	"Keen",
	"Klutzy",
	"Last",
	"Lone",
	"Loud",
	"Lucky",
	"Mad",
	"Magic",
	"Majestic",
	"Marvelous",
	"Mega",
	"Merry",
	"Mighty",
	"Mystic",
	"Nerdy",
	"Nifty",
	"Nimble",
	"Nippy",
	"Noble",
	"Orange",
	"Perfect",
	"Playful",
	"Popular",
	"Posh",
	"Powerful",
	"Prickly",
	"Prized",
	"Quick",
	"Quiet",
	"Rad",
	"Rapid",
	"Rare",
	"Real",
	"Red",
	"Rocky",
	"Rolly",
	"Round",
	"Royal",
	"Scared",
	"Scary",
	"Second",
	"Secret",
	"Shady",
	"Shiny",
	"Silly",
	"Sleepy",
	"Slick",
	"Slimy",
	"Small",
	"Smart",
	"Smashing",
	"Smooth",
	"Snappy",
	"Sneaky",
	"Sparkly",
	"Special",
	"Spicy",
	"Spiky",
	"Steady",
	"Stout",
	"Strong",
	"Stumbly",
	"Sunny",
	"Super",
	"Superb",
	"Sweet",
	"Swift",
	"Talented",
	"Third",
	"Tiny",
	"Toothy",
	"Tough",
	"Tricky",
	"Tumbling",
	"Tumbly",
	"Unbeaten",
	"Unlucky",
	"Unsteady",
	"Upbeat",
	"Valiant",
	"Vivid",
	"Wacky",
	"Weird",
	"Wild",
	"Wise",
	"Wobbly",
	"Wonky",
	"Zany",
];

let lastName = [
	"Sponge",
	"Spring",
	"Star",
	"Streamer",
	"Student",
	"Summer",
	"Sun",
	"Superhero",
	"Surfer",
	"Sweeper",
	"Tail",
	"Tea",
	"Tiger",
	"Tomato",
	"Toon",
	"Treasure",
	"Tree",
	"Turtle",
	"Unicorn",
	"Vampire",
	"Victor",
	"Viking",
	"Villain",
	"VIP",
	"Virtuoso",
	"Wallflower",
	"Werewolf",
	"Winner",
	"Winter",
	"Witch",
	"Wizard",
	"Wolf",
	"Yeeter",
	"Yeetus",
	"Yeti",
	"Zebra",
	"Zoomer",
];

const ran = (min = 0, max = 1) => {
	return Math.floor(Math.random() * (max - min) + min);
};

let participants = read(fileLoc);
let takenNamesArr = [];
for (let i = 0; i < participants["profiles"].length; i++) {
	let nickname;
	do {
		nickname = `${firstName[ran(0, firstName.length)]} ${lastName[ran(0, lastName.length)]}`;
	} while (takenNamesArr.indexOf(nickname) != -1);

	takenNamesArr.push(nickname);
	participants["profiles"][i]["nickname"] = nickname;
}

write(fileLoc, participants);
