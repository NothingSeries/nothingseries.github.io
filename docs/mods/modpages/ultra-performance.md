---
title: Ultra Performance Mods
description: The BEST performance mods for Minecraft (real)
sidebar_position: 999
tags: ["client", "rendering", "tpsfix", "memory"]
---

import { ModList } from '@site/src/components/ModList';

# Ultra Performance Mods

:::warning
This page is meant to be taken with humor and is purely for entertainment! All entries here are jokes or parodies of common mod concepts. For real performance mods, please check our other documentation pages.
:::

export const mods = [
  {
    name: 'NeoRift Lite - Forgified Quilt Mod',
    description: 'Fork of an Fork from the Risugami\'s Modloader Mod. The ULTIMATE performance mod that combines ALL loaders into one(real)',
    tags: ['ALL'],
    forgixUrl: 'https://forum.quiltmc.org/t/forgix-a-way-for-merging-mod-loaders-into-a-singular-jar/392'
  },
  {
    name: 'Download More RAM',
    description: 'Just download more RAM! Why didn\'t you think of this before?',
    tags: ['Client', 'Memory'],
    websiteUrl: 'https://downloadmoreram.com/'
  },
  {
    name: 'Captcha',
    description: 'Creates an captcha all 15 minutes to prevent bots from accessing your items!',
    tags: ['Client', 'Security'],
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/captcha'
  },
  {
    name: 'Darmstadtium',
    description: 'Uses advanced mixins to render chunks that shouldn\'t be visible. Doubles your lag for maximum realism!',
    tags: ['Client', 'Rendering'],
    status: 'approved',
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/darmstadtium',
    githubUrl: 'https://github.com/ChiefArug/Darmstadtium'
  },
  {
    name: 'Alex Mobs',
    description: 'Adds so many mobs that your TPS counter overflows and goes negative. Now you can experience time travel!',
    tags: ['Client', 'Server', 'TpsFix'],
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/alexs-mobs',
    modrinthUrl: 'https://modrinth.com/mod/alexs-mobs',
    githubUrl: 'https://github.com/AlexModGuy/AlexsMobs'
  },
  {
    name: 'Magnesium',
    description: 'Like Sodium but outdated and explosive! Warning: May attract creepers or mcreator mods.',
    tags: ['Client', 'Rendering'],
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/sodium-reforged'
  },
  {
    name: 'FPS Boost',
    description: 'Boosts your FPS by showing fewer frames. Can\'t have low FPS if you have no FPS!',
    tags: ['Client', 'Rendering'],
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/fps-boost'
  },
  {
    name: 'FPS Increaser',
    description: 'Increases your FPS counter by adding random numbers to it. Now you can have 9999 FPS!',
    tags: ['Client', 'Rendering'],
    url: 'https://www.nyan.cat/'
  },
  {
    name: 'FPS Optimizer',
    description: 'Optimizes your game by removing all entity ticking. Can\'t die to mobs if nothing moves!',
    tags: ['Client', 'Server', 'Rendering', 'TpsFix'],
    url: 'https://www.leagueoflegends.com/en-us/'
  },
  {
    name: 'Optifine',
    description: 'The OLDEST performance mod for Minecraft. It\'s like a fine wine, it gets better with age?',
    tags: ['Client', 'Rendering'],
    websiteUrl: 'https://optifine.alternatives.lambdaurora.dev/'
  },
  {
    name: 'Rickrollify',
    description: 'Replaces all in-game music with Never Gonna Give You Up. Also plays it when you die!',
    tags: ['Client', 'Sound'],
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    name: 'GregTech Modern',
    description: 'Makes crafting a dirt block require a quantum computer and 47 different processing steps',
    tags: ['Client', 'Server', 'TpsFix'],
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/gregtechceu-modern',
    githubUrl: 'https://github.com/GregTechCEu/GregTech-Modern'
  },
  {
    name: 'Essential Mod',
    description: 'Adds most unessential features to the game.',
    tags: ['Client', 'Cosmetic'],
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/e4mc'
  },
  {
    name: 'NoCubes',
    description: 'Removes all cubes from Minecraft. Now it\'s just Mine!',
    tags: ['Client', 'Rendering'],
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/nocubes'
  },
  {
    name: 'Pandora Boxes',
    description: 'Every box has a 50% chance to spawn a wither. Good luck!',
    tags: ['Client', 'Server'],
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/pandoras-box'
  },
  {
    name: 'Psychedelic Craft',
    description: 'Adds shader-based visual effects that will make you question if you installed a mod or ate those weird mushrooms.',
    tags: ['Client', 'Rendering'],
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/psychedelicraft'
  },
  {
    name: 'A Watched Pot',
    description: 'Stare at your furnace to stop it from working! Save resources by making blocks too nervous to tick when watched.',
    tags: ['Client', 'Rendering'],
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/a-watched-pot',
    githubUrl: 'https://github.com/aeonic-mods/a-watched-pot'
  },
  {
    name: 'No Server Autosaves',
    description: 'Save server resources by not saving at all! Who needs backups when you have confidence?',
    tags: ['Client', 'Server'],
    modrinthUrl: 'https://modrinth.com/mod/no-server-autosaves'
  }
];

<ModList mods={mods} />
