---
layout: template
title: "DevilutionX Guide"
permalink: /guides/ports/devilutionx-guide/
description: "A guide for setting up DevilutionX on dev mode."
---

## DevilutionX UWP 

> **NOTE:** You'll need access to the data from the original game. If you don't have an original CD, you can buy Diablo from [**GoG.com**](<https://www.gog.com/game/diablo>) or Battle.net. Alternatively, you can use `spawn.mpq` from the [**shareware**](<https://github.com/diasurgical/devilutionx-assets/releases/latest/download/spawn.mpq>) [[**2**]](<http://ftp.blizzard.com/pub/demos/diablosw.exe>) version, in place of `DIABDAT.MPQ`, to play the shareware portion of the game.

### Extracting Game Assets  

1. Navigate to your **Diablo Hellfire** installation directory.  
2. Locate and copy the following files to your desktop:  
   - `Diabdat.mpq`  
   - `Hellfire.mpq`  
   - `Hfmonk.mpq`  
   - `Hfmusic.mpq`  
   - `Hfvoice.mpq`  
3. Compress all the files into a single **ZIP** file.  

### Internal Setup  

1. Launch **DevilutionX** to initialize the required folders.  
   - The app will display a message stating that files are missing.  
   - Quit the app:  
     - Press the **Xbox button**, hover over **DevilutionX**, press **Start**, and choose **Quit**.  

2. Upload your **ZIP** file:  
   - Open the **Dev Portal**.  
   - Navigate to **File Explorer** > **Local App Data** > **DevilutionX**.  
   - Go to the **Local State** folder.  
   - Navigate to the following subdirectories:  
     - `diasurgical` > `devilution`.  
   - Click **Choose File**, locate your **ZIP** file, and click **Upload**.  

3. Launch **DevilutionX**, and you're ready to play.  

### Additional Notes
- In the same folder where you uploaded your game files, there is a configuration file named `diablo.ini`.  
  - You can edit this file with a text editor (e.g., Notepad) to customize controls or settings.  
  - Once modified, re-upload the file to the same directory.