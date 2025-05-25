---
layout: template
title: "Dhewm 3 Guide"
permalink: /guides/ports/dhewm3-guide/
description: "A guide for setting up Dhewm 3 on dev mode."
---

## Dhewm3 UWP Edition

### Requirements:
- **Xbox Series S/X**.
- **External Drive** - Required to store your game file and other data.
- **Dependency** - `Microsoft.VCLibs.x64.14.00.appx`
- **Game (`base`) file** - You must own a copy of Doom 3 to obtain the required data files.

### Obtaining the `base` Folder  
1. Open your Doom 3 game directory.  
2. Locate the `base` folder.  
3. Ensure the folder contains `pak.pk4` files numbered 0 through 8.  

**Important**: The **BFG Edition** data will not work; it must be the **original version**.

### Preparing an External Drive  
1. Create a folder named `d3` (use lowercase for compatibility).  
2. Place the `base` folder into the `d3` folder.  

### Resurrection of Evil (ROE) Build Specifics

For the **Resurrection of Evil** expansion build, in addition to the `base` game files from the original Doom 3, you'll also need the expansion's specific game data files (e.g., `pak000.pk4` from ROE). These files are typically located in a folder named `d3xp`. You must place this `d3xp` folder alongside the `base` folder within your main `d3` directory on the external drive.

### Additional Notes  
- Bind your controls on the first launch:  
  1. Navigate to **Options** > **Controls**.  
  2. Adjust bindings for **Movement**, **Weapons**, **Attack/Look**, and **Other** as needed.   
- **Multiplayer** is functional.  
- Using the in-game **Exit Game** option will cause the game to freeze. To quit the game:  
  1. Press the **Xbox button**.  
  2. Hover over **dhewm3-uwp**.  
  3. Press **Start** and select **Quit**.  
- **Modding** is not supported.