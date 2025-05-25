---
layout: template
title: "DXX Rebirth Guide"
permalink: /guides/ports/dxxrebirth-guide/
description: "A guide for setting up DXX Rebirth on dev mode."
---

## DXX-Rebirth UWP

### Requirements:
- **Xbox Series S/X**.
- **External Drive** - Required to store your game files and other data.
- **Dependency** - `Microsoft.VCLibs.x64.14.00.appx`
- **Game Assets** - You must own a copy of Decent to obtain the required data files.

**Note**: If you don't have the original CD, you can purchase Decent from [GoG.com](<https://www.gog.com/en/game/descent>).

### Extracting Game Assets  

1. Navigate to your **Decent** installation directory.  
2. Locate and copy the following files to your desktop:  
   - `descent.hog`  
   - `descent.pig`  

### External Drive Setup  

1. Create a folder named `decent1` (use lowercase for compatibility).  
2. Place the `descent.hog` and `descent.pig` files into the `decent1` folder.  

### (Optional) Add Custom MIDI Sound Fonts
1. Launch **DXX Rebirth** once to initialize the `.ini` file.  
2. Create a folder named `soundfonts` on your external drive.  
3. Place your `.sf2` sound font file in this folder.  
4. Rename the sound font file to `default.sf2`.  
5. Open the `descent.cfg` file (located in the `descent1` folder) using a text editor like Notepad.  
6. Update the following setting:  
   - `adl_midi_enabled = 1` → `adl_midi_enabled = 0`.  
7. Save the file and reconnect the drive to your Xbox.

### (Optional) Add Custom Soundtracks
1. Create a folder for your custom soundtrack on your external drive. (You can name this folder anything you like.)  
2. Transfer your custom soundtrack to this folder.  
   - High-quality soundtracks from all the Descent releases can be downloaded [**here**](<http://www.planetdescent.net/index.php?topic=1255.0>).  
3. In **Descent Options** > **Sound & Music** > **Jukebox Options**, select and set the path to your custom soundtrack folder.  
4. Change the **Music Type** setting from "Built-in/Add-on Music" to **Jukebox**.  
5. For music to play in menus and non-level areas:  
   - Scroll down and add the path to specific custom tracks for **Main Menu**, **Briefing**, **Credits**, **Escape Sequence**, and **Game Ending** at the bottom of the **Sound & Music Options** menu.  
6. Your custom tracks should now play in-game and in non-level areas.

### Additional Notes
- Bind your controls on the first launch:  
   - Navigate to **Options** > **Controls** > **Customize Joystick**.
- Multiplayer is supported but requires port forwarding (`42424`) on the host's router for online play.