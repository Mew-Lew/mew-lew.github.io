---
layout: template
title: "Sonic Mania"
permalink: /guides/ports/sonicmania-guide/
description: "A guide for setting up Sonic Mania on dev mode."
---

## Sonic Mania UWP

### Requirements  
- **Sonic Mania game files**: You must own a copy of Sonic Mania to use the required data file.

**MOBILE PORT DOESN'T WORK!**

### Install the Sonic Mania App
- Install the `RSDKv5-UWP_1.4.0.0_x64.appx` via the dev portal.  

### External Drive Setup
1. On your external drive, create a folder for Sonic Mania (e.g., `E:\Sonic Mania`).  
2. Copy your game files into the Sonic Mania folder.
3. Launch **Sonic Mania**.  
4. When prompted to select a **data.rsdk** file:
   - Open your Sonic Mania folder.
   - Navigate to your **data.rsdk** file and click **Select**.
5. The app will crash; reopen it, and you're ready to play.

### Internal Setup
1. Launch **Sonic Mania** to initialize the folders.
    - When prompted to select a **data.rsdk** file click **Cancel**. The app will go black.  
    - Press the **Xbox button**, hover over **Sonic Mania**, press **Start**, and choose **Quit**.
2. Upload the **data.rsdk** file:
   - Open the Dev Portal.
   - Go to **File Explorer** > **Local App Data** > **Sonic Mania**.
   - Navigate to the **Local State** folder.
      - Click **Choose File**, locate your `data.rsdk` file, and **Upload**.
3. Launch **Sonic Mania** and you're ready to play.

### Modding
1. **Mod File**: Download your desired mod in `.zip` format. If not zipped, compress it into a `.zip` file.
2. In the Dev Portal, go to:
   - **File Explorer** > **Development Files** > **Windows Apps** > **Sonic Mania**.
2. Open the Sonic Mania folder and locate the **Mods** folder.
3. Upload and Extract Mod:
   - In the **Mods** folder:
   - Click **Choose File** and select your `.zip` mod file.
   - Click **Upload**.
   - When prompted, choose yes to **Extract ZIP Contents** into the directory.
4. Enable the mod via `modconfig.ini`:
   - In the Sonic Mania folder:
   - Download/Save the `modconfig.ini` file.
   - Open `modconfig.ini` in a text editor (e.g., Notepad).
   - Ignore existing lines like `D3D11 Shaders`.
   - Add your mod in the format:  
    `Ultra Ego Shadow=1`
5. Save the file.
6. Re-upload the edited `modconfig.ini`:
   - Delete the existing file.
   - Upload your new edited file.
7. Launch Sonic Mania and your mods should be applied.

### Notes
- To disable a mod, change `=1` to `=0` in the `modconfig.ini` file.

### Enabling the In-Game Dev Menu
1. In the Dev Portal, go to:
   -  **File Explorer** > **LocalAppData** > **Sonic Mania** > **LocalState**.  
   - Download the `Settings.ini` file to your computer or phone.  
2. Open `Settings.ini` in a text editor (e.g., Notepad).
   - Locate the line: `language=0`.  
   - Add the following lines directly below it:  
     ```  
     enableControllerDebugging=y  
     devMenu=y  
     ```  
   - Save the changes.  
3. Re-upload the edited `Settings.ini` file:
   - Delete the existing file.
   - Upload your new edited file.
4. In-game, press the **Select/View** button to open the Dev Menu.