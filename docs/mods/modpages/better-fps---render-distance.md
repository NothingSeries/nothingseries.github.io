---
title: Better FPS - Render Distance
sidebar_position: 2
tags: ["Client"]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionGrid from '@site/src/components/VersionGrid';

# Better FPS - Render Distance

**Authors:** [someaddons](https://github.com/someaddons)

Better FPS Render Distance is a mod which adds a few performance improvements to increase fps.

## Features

- **Render Distance**: By default minecraft renders everything in a square radius(cylinder in 1.18), this is changed to a 3d circular radius which can be stretched horizontally and vertically via config or video option. 
The higher the stretch the less caves below you will be rendered, esp distant ones. Provides about 10-35% less chunk sections to be rendered and thus gives a neat fps boost.

## Supported Versions

<VersionGrid versions={[
  {
    loader: 'NeoForge',
    numbers: ['1.21.1']
  },
  {
    loader: 'Forge',
    ranges: [{ from: '1.20.1', until: '1.16.5' }]
  }
]} />

## Compatibility

:::warning Known Issues
- with optifine, the video options button is not available
:::

:::danger INCOMPATIBLE
- Very Many Players
:::

