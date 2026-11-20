# AK's Game Dev Journal

A place to record notes re game dev.
This is for my own use, just so I have a safe off-site place to keep this data, but I don't mind others peeking.

## Future

Leaving some notes 2026-08-12, projects I mean to pick up later, after Bellacopia Maleficia.

- Romassist v4. Similar idea to v3, but run the menu in a web browser, launch web games, and make a WebAssembly-based black box emulator system.
- Fife. Minimalist GUI library, text editor, and image editor. Because I'm frustrated sometimes by Pluma and GIMP.
- Sitter 2009. Replatform to Egg. It's my largest game by distributable size, but definitely doesn't need to be.
- More broadly, I'd like to modernize all my games to target just a few patterns. In order of preference:
- - Egg
- - Shovel
- - Web
- - Custom divorcible I/O
- - Fully custom
- Other bespoke games to replatform:
- - Too Heavy. It's a full rewrite but I don't think a crazy one. And right now it's web-only, kind of inconvenient.
- - Tag Team Adventure Quest.
- - Opener of Cages (Shovel)
- - Nine Lives (Shovel)
- - Full Moon? Enormous effort.
- - Plunder Squad? ''
- - All the Tiny Arcade games. (Lil Sitter, Pocket Orchestra, Ivan Denisovich)
- - Campaign Trail of the Mummy.
- Full data extraction from old Mac games. Esp Bandit and Zen, I'd like to collect stats on their maps and graphics.
- - A general tool for packing and unpacking resource files would be helpful.
- - Made a good start on QuickTime to MIDI (see project `qt2midi`).
- - PNG from PICT, for CopyBits only, should be a snap.
- - Since we do have 68k or PowerPC executables, what are the odds we could decompile those and replatform? hm. Probly easier to rewrite.
- - - Commercial tool for 68k asm to x86 asm conversion: https://www.microapl.com/Porting/PortAsm.html
- - - All-purpose decompiler written by the NSA (!): https://github.com/NationalSecurityAgency/ghidra
- Set up a proper emulation system for running old Mac games. I've had it piecemeal here and there but never a solid single-source-of-truth kind of system. 68k and PowerPC are both in scope.
- I'd like to try targetting some other exotic systems.
- - Thumby Color
- - Pippin: It's just a PowerPC Mac, so that's certainly appealing.
- - NES
- - SNES
- - Gameboy
- - CD-I
- - Atari 7800

Game ideas floating around:

- Fly By Night. Multiplayer adventure with a strong time component. Break into the vault and steal the jewel. Already has a 14-page minicomic!
- The Secret of the Seven Sauces. Dot runs a stew shack. I got pretty far with this once (`2025/sevensauces`) but wasn't satisfied.
- Black Bell. Dot and Moon collect medicine for sick people. Kind of a 2-player episodic Thirty Seconds Apothecary.
- Clean Sweep. Dot runs a housekeeping service, and she has to clean the castle. The gag is that awesome adventure stuff happens, but is just a distraction from cleaning the floor.
- Vampire Rescue. Sitter but vampires instead of children.
- Sister Act: The Video Game. Multiplayer rhythm game for NES. If I ever figure out NES. Obviously we'll never get permission to distribute it, but it's still hilarious.
- Dagger in the Dark: Murder mystery, works like a dinner party puzzle. There's a Pi project c 2014 called `mm` with the basic idea.
- - Witnesses that speak a "foreign language", substitution cipher.
- - Witnesses that have taken a vow of silence, so you have to wheel a chalkboard to them, sokobanny puzzles.
- - Witnesses that demand a bribe, fetch quests. Oblique hint to want they want, like "I want something invented by somebody born on 11 February.". Light bulb! So you have to look things up.
- - Quantumly entangled witnesses. Two witnesses give one clue. One the odd letters and one the evens.
- - Liars. Must determine for each witness whether they tell the truth or not. Every witness gives two facts.
- - Maybe you play three rounds per session: One straight, one with all tricks except Liars, then one with Liars.
- - Somebody eating a lifetime supply of candy, so you have to cut off the candy flow to understand him.
- - "I'll talk but not here. The walls have ears.", and you have to meet them at an appointed place and time, which you'll surely forget.
- - Sleeping witnesses that you have to enter their dream. Maybe bump, wait one second, then bump again.
- Some kind of open world trading and crafting game, with no universal currency.
- - eg collect acorns in the forest, but the forest merchants don't want them. Acorns are valuable in the desert.
- - Every commodity in the world is permanent and strictly limited. Like, trees don't grow back if you chop them down.
- - Dance near an animal to take control of it. Rabbits can dug tunnels, birds can fly to the islands, etc. Each animal has its own inventory.

Other things:

- There should be a game jam where every participant gets dealt a specific disability to accomodate.
- - Maybe we could work with a children's charity, and actually get specific kids to write for.
- - Devs learn about accessibility, needy kids get a free custom game, everybody wins, innit?
