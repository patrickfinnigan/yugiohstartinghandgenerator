// const cards = new Array();
// $.get("Salamangreats.txt", function(data) {
//   cards = data.split(",");
//   console.log(cards);
// });

const cards = [
  "Salamangreat Gazelle",
  "Salamangreat Gazelle",
  "Salamangreat Gazelle",
  "Salamangreat Spinny",
  "Salamangreat Spinny",
  "Salamangreat Spinny",
  "Lady Debug",
  "Lady Debug",
  "Lady Debug",
  "Salamangreat Foxy",
  "Salamangreat Foxy",
  "Salamangreat Jack Jaguar",
  "Salamangreat Falco",
  "Ash Blossom & Joyous Spring",
  "Ash Blossom & Joyous Spring",
  "Ash Blossom & Joyous Spring",
  "Effect Veiler",
  "Effect Veiler",
  "Backup Secretary",
  "Salamangreat Circle",
  "Salamangreat Circle",
  "Salamangreat Circle",
  "Fusion of Fire",
  "Will of the Salamangreat",
  "Salamangreat Sanctuary",
  "Salamangreat Sanctuary",
  "Fusion of Fire",
  "Called by the Grave",
  "Called by the Grave",
  "Called by the Grave",
  "Twin Twisters",
  "Twin Twisters",
  "Foolish Burial",
  "Upstart Goblin",
  "Super Polymerization",
  "Salamangreat Roar",
  "Salamangreat Roar",
  "Salamangreat Rage",
  "Gozen Match",
  "Gozen Match",
  "Mirror Force"
];

let openingHand = []
// let openingHandPost = openingHand.split("")

for (let i = 0; i < 5; i++) {
  let draw = cards[Math.floor(Math.random() * cards.length)];
//   cards.splice([i],1);
openingHand.push(draw);
cards.splice(cards.indexOf(draw), 1);
}

console.log(openingHand);
$(".openingHand").text(openingHand)