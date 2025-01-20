---
title: Embeddium
sidebar_position: 1
tags: ["Client", "Rendering", "Fork"]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionGrid from '@site/src/components/VersionGrid';

# Embeddium

**Authors:** [FiniteReality](https://github.com/FiniteReality)

**Former Authors:** [embeddedt](https://github.com/embeddedt), [Asek3](https://github.com/Asek3)


Embeddium is a fork of the fork (Rubidium) of the popular Sodium 0.5.8 mod, specifically made to bring Sodium to NeoForge and Forge. It significantly improves rendering performance and FPS while maintaining compatibility with modern Minecraft versions.

## Features

- **Performance Improvements**: All improvements from Sodium 0.5.8 and earlier, including a rewritten terrain renderer, various optimizations to the immediate-mode rendering pipeline (used by entities, GUIs, block entities, etc.), and other miscellaneous improvements
- **Frequent patch updates**: Fix mod compatibility issues soon after being reported & reproduced
- **Integrated Fabric Rendering API support**: Indium is no longer required and will not work with Embeddium
- **Optional Translucency Sorting**: Can be enabled in Video Settings

## Supported Versions

:::warning Warning
- The Fabric version has been discontinued and will no longer receive updates
- Development pace has slowed since the project transition to FiniteReality
:::

<VersionGrid versions={[
  {
    loader: 'NeoForge',
    ranges: [{ from: '1.21.1', until: '1.20.1' }]
  },
  {
    loader: 'Forge',
    numbers: ['1.20.1', '1.19.2', '1.18.2', '1.16.5']
  },
  {
    loader: 'Fabric',
    numbers: ['1.20.1']
  }
]} />



## Compatibility

:::info Add-Ons
- [Embeddium++](https://www.curseforge.com/minecraft/mc-mods/embeddiumplus)
- [Sodium/Embeddium Extras](https://www.curseforge.com/minecraft/mc-mods/magnesium-extras)
:::

:::warning Known Issues
- 
:::

:::danger INCOMPATIBLE
- Optifine
- TexTrue's Embeddium Options
- Any other Sodium mod
:::

