# Opportunities to modernize my old games

2026-10-27

I'll list all the games from README.md here.
Bucketting by what I feel is the best way forward, if we want to bring them up to date.
Then sorting those buckets by priority; best to pursue at the top.

## Carbon Mac

I don't have source for any of these but do have binaries.
If we only want to run them, the best approach is emulation.
To modernize I think the only option is to rewrite from scratch.
For starters, we'd need tooling to extract the data. Would be a fun project in any case.
But don't try rewriting any until you're able to run it reliably under emulation. Otherwise, can't know you're building the same thing.

 - Bandit
 - Master Zen
 - Diet Rock
 - Tidy Bug
 - Rosie the Rivetter
 - Pyromania 3
 - Swordsman Wong
 - Feed the Beast
 - Dog Catcher
 - Tetris (Mac)
 - Demolition Crew
 - Tic Tac Toe
 - Minesweeper (Mac)
 - Train
 - Whack-A-Mole
 - Zombie

## Native Oddballs

These are probably the most valuable, and also the most difficult.
Sitter 9 would be a full rewrite, since it's written in C++.
Chetyorska might not be an option at all since it requires MIDI-In. I'd have to add that to Egg, and not sure that I want to.
But then again, Emuhost v4 is planning to have MIDI support, so maybe we migrate to that?

 - Sitter 9
 - Tag Team Adventure Quest
 - Campaign Trail of Mummy
 - Plunder Squad
 - Full Moon
 - Chetyorska

## Pygame

A quick test on 2026-10-27, and Python 2.7 does still work, but I couldn't get Pygame installed.
Python 2 is very much not supported anymore, by anybody.
Haven't checked whether I can run Pygame on modern Python but there's no reason to think we can't.
Easy Mode: Poke and prod to bring them up to compatibility with Python 3.
Hard Mode: Rewrite for Egg.

FWIW, I also have Sitters 1 and 2, which are also Pygame. They were never finished.

 - Sitter 3
 - Secret of the Octopotamus
 - Super Trivia Challenge

## TinyArcade

If we migrate these, it's important that we preserve the ability to build for Tiny.
That should be possible, using Egg or Shovel as an alternate.
Worth playing with.

 - Ivan Denisovich
 - Pocket Orchestra
 - Li'l Sitter

## Web

No particular urgency in replatforming these.
Especially if Romassist v4 supports Web the way I hope, we can keep these just as is.
If we're going to touch Too Heavy, I wouldn't mind an invasive rewrite to clean up the physics a little.

 - Too Heavy
 - Economy of Motion
 - Just Below the Surface

## Raylib

Costume Conundrum isn't really my game, it's Alex's.
And I don't think there's any need to change it.

 Costume Conundrum            | lil  | Native          |12447776 /  5557 | Code by Alex, music by Aster. |

## Shovel

Replatforming to Egg should be a snap.
But is it possible to write in such a way that they can still build like Shovel?
Would be a shame to lose the 13 kB size of Nine Lives, but that's definitely lost if we migrate.
And I'm of two minds about Shovel's long term position in the pantheon.
Emuhost v4 might knock it out as the preferred software-only platform.
Or maybe I just don't need such a platform.
Anyway, I don't feel any particular urgency in changing these two.

 - Opener of Cages
 - Nine Lives

## HyperCard

Surprisingly, only one HC game has survived up to now.
It's not a very involved one, either, just a lot of point and click.
(also it's not any fun).
We could reimplement as HTML or something. Need some tooling to extract the bitmaps.
Not sure I want to dignify this game with that much attention.

 - Bob's Magical Journey

## Lost

First step would be finding them at all, via magic or time travel.

 - SLMOM 1..3
 - Pyromania 1
 - Super Bob
 - Legacy of Kei
 - J&A Demon Hunters

## PICO-8

I'm fine with PICO-8 as a long term platform.
And Sitter Pico is just a POC, not a great game by any standard, not worth worrying about.

 - Sitter Pico

## Egg

Egg is my preferred platform today. No need to touch any of these.

 - Upsy-Downsy
 - Season of Penance
 - Spelling Bee
 - Thirty Seconds Apothecary
 - Presto Changeo
 - Reddin Iggle
 - Dot's Wicked Garden
 - Goblin Kabobblin'
 - Dead Weight
 - Cherteau
 - Sam-Sam
 - Zen Garden
 - Humm Fu
 - Mysteries of the Crypt
 - When You Wish Upon A Bone
 - Queen of Clocks
 - Vexularg
 - Inversion
 - License to Illuse
 - XRM: Extreme Racing Machines
 - Kleptomania
 - All Fifty Two
 - You Could Use A Nap
