---
layout: template
title: "Sonic 1 Decompilation"
permalink: /guides/ports/sonic1decomp-guide/
description: "A guide for setting up Sonic 1 Decompilation on dev mode."
---

## Sonic 1 Decompilation

### Requirements
- **Game `data.rsdk` file** - You must own a copy of Sonic to obtain the required data files.

### Obtaining the `data.rsdk` File  

#### PC:
1. Navigate to your Sonic the Hedgehog game installation folder.  
2. Locate the `data.rsdk` file within the directory.  

#### Android:
1. Install an APK extractor app on your device.  
2. Use the app to extract your installed **Sonic the Hedgehog Classic** APK.  
3. Download and install **ZArchiver**.  
4. Open ZArchiver and locate the extracted Sonic APK.  
5. Select the APK file and choose the **Extract Here** option.  
6. Navigate to the extracted **assets** folder and find the `data.rsdk.xmf` file.  
7. Rename the file to `data.rsdk` by removing the `.xmf` extension.  
8. Your `data.rsdk` file is now ready to use.

**Important**: The **Sonic Origins** and **Origins Plus** `Sonic1u.rsdk` file is **not compatible** with this port.

### Internal Setup
1. Launch **Sonic the Hedgehog** to initialize the folders.
    - The app will force close. 
2. Upload the **data.rsdk** file:
   - Open the Dev Portal.
   - Go to **File Explorer** > **Local App Data** > **Sonic the Hedgehog**.
   - Navigate to the **Local State** folder.
      - Click **Choose File**, locate your `data.rsdk` file, and **Upload**.
3. Launch **Sonic the Hedgehog** and you're ready to play.

### Additional Notes  
- You can upload save files (`Sdata.bin`) to the same directory as the `data.rsdk` file.  
- If button inputs are not working when the game starts, quit and restart the game.
   - Press the **Xbox button**, hover over **Sonic the Hedgehog**, press **Start**, and choose **Quit**.