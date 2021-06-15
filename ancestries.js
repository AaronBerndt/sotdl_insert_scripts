const test = `Arachne	Curse of the Spider Wood
Bugbear	Hunger in the Void
Cambion	Exquisite Agony
Centaur	Riders of the Wind
Changeling	Shadow of the Demon Lord
Changeling	Stolen Lives
Changeling	Victims of the Demon Lord
Clockwork	Shadow of the Demon Lord
Clockwork	Victims of the Demon Lord
Clockwork	Ghosts in Machines
Darkling	Scions of the Betrayer
Dhampir	Blood Scions
Dwarf	Shadow of the Demon Lord
Dwarf	For Gold and Glory
Dwarf	Victims of the Demon Lord
Elf	Terrible Beauty
Faun	Demon Lord Companion
Faun	Between Two Worlds
Ferren	Demon Lord's Companion 2
Fomor	Hunger in the Void
Ghost	Between Life and Death
Ghoul	Flesh of the Fallen
Gnome	Children of the Restless Earth
Goblin	Shadow of the Demon Lord
Goblin	Victims of the Demon Lord
Goblin	Snot and Stitches
Grave Thrall	Kingdom of Skulls
Halfling	Demon Lord Companion
Halfling	Uncommon Courage
Hamadryad	Demon Lord's Companion 2
Hobgoblin	Terrible Beauty
Human	Shadow of the Demon Lord
Human	Only Human
Human	Victims of the Demon Lord
Incarnation	Hunger in the Void
Jotun	A Glorious Death
Molekin	Demon Lord's Companion 2
Naga	Demon Lord's Companion 2
Orc	Shadow of the Demon Lord
Orc	Victims of the Demon Lord
Orc	Born to Kill
Pixie	Terrible Beauty
Revenant	Tombs of the Desolation
Salamander	Tombs of the Desolation
Serpent Person	SotDL Freeport Companion
Skinchanger	Tooth and Claw
Sylph	Demon Lord's Companion 2
Transcendent	Godless
Undine	SotDL Freeport Companion
Vampire	Tombs of the Desolation
Warg	Hunger in the Void
Woad	Song of the Woad
Yerath	Demon Lord's Companion 2`;

const testMap = test.split(/\r?\n/).map((item) => {
  const regex = /(.*)\t(.*)/gm;
  const matchedItems = regex.exec(item);

  return { name: matchedItems[1], book: matchedItems[2] };
});
console.log(testMap);
