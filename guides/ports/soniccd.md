---
layout: template
title: "Sonic CD (Decompilation)"
permalink: /guides/ports/soniccd-guide/
description: "A guide for setting up Sonic CD (Decompilation) on dev mode."
---

## Sonic CD UWP Edition

### Requirements
- **Game `data.rsdk` file** - You must own a copy of Sonic CD to obtain the required data files.

### Obtaining the `data.rsdk` File 
1. Open your Sonic CD game directory.  
2. Locate the 'data.rsdk` file.

**Important**: The **Sonic Origins** data file (`SonicCDu.rsdk`) is **not compatible** with this port. You must use the original **Sonic CD** release's `data.rsdk` file.

### Internal Setup
1. Launch **Sonic CD** to initialize the folders.
    - The app will force close. 
2. Upload the **data.rsdk** file:
   - Open the Dev Portal.
   - Go to **File Explorer** > **Local App Data** > **Sonic CD**.
   - Navigate to the **Local State** folder.
      - Click **Choose File**, locate your `data.rsdk` file, and **Upload**.
3. Launch **Sonic CD** and you're ready to play.

### Modding
- This port is built on an older version of the **Sonic CD Remake**, so the mod folder/script approach to modding will not work.  
- However, you can unpack the `data.rsdk` file, replace the assets directly, and then repack the `rsdk`. This means only mods that replace the original assets will be compatible.  
- For convenience, you can use this **[tool](https://gamebanana.com/tools/6957)**.

### Additional Notes  
- You can upload save files (`Sdata.bin`) to the same directory as the `data.rsdk` file. 
- If button inputs are not working when the game starts, quit and restart the game.
   - Press the **Xbox button**, hover over **Sonic CD**, press **Start**, and choose **Quit**.