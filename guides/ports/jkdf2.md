---
layout: template
title: "Open JKDF2"
permalink: /guides/ports/jkdf2-guide/
description: "A guide for setting up Open JKDF2 on dev mode."
---

## OpenJKDF2 UWP Edition

### Requirements
- **Xbox Series S/X**.
- **External Drive** - Required to store your game file and other data.
- **Dependency** - `Microsoft.VCLibs.x64.14.00.appx`
- **Game files** - Sourced from the **Jedi Knight Dark Forces 2** PC game.

> **Known Issues:**
> - Palette is off in Credits screen
> - Mouse projection is not 1:1
> - Joystick screen is displaying invalid binds

### Obtaining the Game Files
You will need to obtain the **JKDF2** game, e.g. from Steam or GOG.

In the root of the game files there are 5 folders:
- **Controls**
- **Episode**
- **Music**
- **Player**
- **Resource**

### Prepare Your External Drive
1. Create a folder named `df2` in lowercase.
2. Copy your 5 game files folders to your `df2` folder.
(e.g., `E:\df2`)
3. Copy the attached `xbone.ctl` file to the `Controls` folder.

**Modding:**
1. **Folder Setup**:  
   - Inside your `df2` folder, create the following subfolders in lowercase:  
     - `mods`: For game enhancements and modifications.  
     - `jkgm`: For custom texture files.
2. **Download and Configure Mods**:  
   - Download the desired mod.  
   - Follow the mod's instructions carefully to:  
     - Place the files in the correct folder (`mods` or `jkgm`)
     - Adjust any necessary in-game or configuration settings as specified by the mod's documentation.

### Initial Configuration Setup  
1. On the first launch, go to:  
   **Setup** > **Controls** > **Options** > **Load Configuration**.  
2. Select the **Xbone** configuration.