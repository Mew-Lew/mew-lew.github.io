---
layout: template
title: "Zelda 3"
permalink: /guides/ports/zelda3-guide/
description: "A guide for setting up Zelda 3 on dev mode."
---

## Zelda 3

### Requirements
- a `zelda3.sfc` USA ROM file (for asset extraction step only) with SHA256 hash `66871d66be19ad2c34c927d6b14cd8eb6fc3181965b6e517cb361f7316009cfb`
- `Microsoft.VCLibs.x64.14.00.appx` dependency file

### Extract Assets
- Download the zelda3 project by clicking "Code > Download ZIP" on the **[Github](<https://github.com/snesrev/zelda3>)** page
- Extract the ZIP to your hard drive
- Place the USA rom named zelda3.sfc in the root directory
- Double-click `extract_assets.bat` in the main directory to create zelda3_assets.dat in that same directory

### Internal Setup
1. Launch **Zelda 3** to initialize the folders.
    - The app will force close. 
2. Upload the `zelda3_assets.dat` and the `config.ini` file:
   - Open the Dev Portal.
   - Go to **File Explorer** > **Local App Data** > **Zelda3**.
   - Navigate to the **Local State** folder.
      - Click **Choose File**, locate your `zelda3_assets.dat` file, and **Upload**.
3. Launch **Zelda 3** and you're ready to play.