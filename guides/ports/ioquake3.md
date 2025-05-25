---
layout: template
title: "ioquake3 Guide"
permalink: /guides/ports/ioquake3-guide/
description: "A guide for setting up ioquake3 on dev mode."
---

## ioquake3 UWP Edition

### Requirements
- **Xbox Series S/X**.
- **External Drive** - Required to store your game file and other data.
- **Dependency** - `Microsoft.VCLibs.x64.14.00.appx`
- **Game (`baseq3`) file** - You must own a copy of Quake 3 to obtain the required data files.

### Obtaining the `baseq3` Folder  
1. Open your Quake 3 game directory.  
2. Locate the `baseq3` folder.  
3. Ensure the folder contains `pak.pk3` files numbered 1 through 8.  
4. If a `q3config.cfg` file is present, delete it. The UWP port will generate its own configuration file.  

### Preparing an External Drive  
1. Create a folder named `q3a` (use lowercase for compatibility).  
2. Place the `baseq3` folder into the `q3a` folder.  

**Modding:**  
- Place any mods directly into the `baseq3` folder within your `q3a` directory.

### Additional Notes  
- On launch, press **B** to bypass the CD Key menu.  
- Controls:  
  - **X** acts as the Enter key.  
  - **Select/View** button serves as the Backspace key.  
- Bind your controls on the first launch:  
  1. Navigate to **Setup** > **Controls**.  
  2. Adjust bindings for **Look**, **Move**, **Shoot**, and **Misc** as needed.  
- To bring up the virtual keyboard, press both thumbsticks simultaneously.  
- Multiplayer is functional; enable downloads in the options if needed.
- Open the `q3config.cfg` file, generated in your `baseq3` folder after the first launch, using a text editor like Notepad.  
   - You can tweak stick sensitivity by adjusting the values for `j_yaw` (horizontal sensitivity) and `j_pitch` (vertical sensitivity) to suit your preferences.