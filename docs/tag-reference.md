---
title: Tags Reference
description: Reference guide for all mod tags
sidebar_position: 100
---

# Tags Reference

Filter mods by clicking on tags. Combine multiple tags to find mods that match all selected criteria.

:::tip Tip
To find mods efficiently:
1. Click any tag to filter mods by that tag
2. Select multiple tags to find mods that have all selected tags
:::

## Mod Loaders

<div className="tag-section">

- `#neoforge` - NeoForge ModLoader
- `#forge` - Forge ModLoader
- `#fabric` - Fabric ModLoader
- `#quilt` - Quilt ModLoader

</div>

## Minecraft Versions

<div className="tag-section">

- `#1.21.1` - Latest version
- `#1.20.1` - Modern version
- `#1.16.5` - Legacy version
- `#1.12.2` - Vintage version
- `#1.7.10` - Archaic version

</div>

## Types

<div className="tag-section">

- `#client` - Client-side only mods
- `#server` - Server-side only mods

</div>

## Features

<div className="tag-section">

- `#memory` - Memory optimization mods
- `#rendering` - Performance improvement mods
- `#lighting` - Lighting improvement mods
- `#bugfix` - Bugfix mods 
- `#fork` - Forks of other mods

</div>

<style>
{`
  .tag-section {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 1.5rem 0;
  }

  .tag-section li {
    list-style: none;
    padding: 0.5rem 1rem;
    background: var(--ifm-color-emphasis-100);
    border: 2px solid var(--ifm-color-emphasis-200);
    border-radius: 20px;
    margin: 0;
    transition: all 0.2s;
    cursor: pointer;
  }

  .tag-section li:hover {
    background: var(--ifm-color-emphasis-200);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .tag-section code {
    color: var(--ifm-color-primary);
    background: none;
    padding: 0;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .tag-section li:hover code {
    color: var(--ifm-color-primary-darker);
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 2rem;
    color: var(--ifm-color-emphasis-700);
  }
`}
</style>