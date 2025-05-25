---
layout: template
title: "SOH (Ship of Harkinian) Foxtrot UWP Edition"
permalink: /guides/ports/soh-guide/
description: "A guide for setting up SOH (Ship of Harkinian) Foxtrot UWP Edition on dev mode."
---

## SOH (Ship of Harkinian) Foxtrot UWP Edition

### Requirements
- **External Drive** - Required to store your game file and other data.
- **Dependency** - `Microsoft.VCLibs.x64.14.00.appx`
- **Game (`oot.otr`) file** - Generated using the Ship of Harkinian **Foxtrot** desktop program [**here**](<https://github.com/HarbourMasters/Shipwright/releases/tag/8.0.5>).

### Obtaining the `oot.otr` file
You will need to dump your compatible game and extract the `.n64` file before generating the `oot.otr` file.
Refer to this guide for detailed instructions:

- **[Rom Dumping Guide](<https://www.shipofharkinian.com/setup-guide/dump-guide>)**

After obtaining your `.n64` file, use the Ship of Harkinian desktop program to generate the `oot.otr` file.
Follow the guide below for your operating system:

- **[Windows](<https://www.shipofharkinian.com/setup-guide/windows>)**
- **[Linux](<https://www.shipofharkinian.com/setup-guide/linux>)**
- **[macOS](<https://www.shipofharkinian.com/setup-guide/macos>)**

### Prepare Your External Drive
- Create a folder named `soh` in lowercase.
- Add your `oot.otr` to this folder.
- Inside the `soh` folder, create the following subfolder:
    - `mods` in lowercase (for mods like `.otr` files).

### Modding
- Add mods to the `mods` folder on your external drive.
- Larger mods can be added internally too:
   - Open the **Dev Portal** on your PC.  
   - Navigate to `LocalAppData > soh > Localstate` using the **File Explorer**. 
   - Inside the `LocalState` folder, create the following subfolder:  
      - `mods` in lowercase (for mods like `.otr` files). 
      - Upload your mod files into the `mods` folder.
- Uploading multiple mods? Compress them as a zip file.   
   - Click **Choose File** and select your `.zip` mod file.
   - Click **Upload**.
   - When prompted, choose yes to **Extract ZIP Contents** into the directory.

### Additional notes
- Mods can be stored in subfolders.
- Check for any specific setting requirements on the mod download page.
- Press the **Select/View** button to open the dev menu, then **X** to change focus. You can hold **X** and press a bumper button to switch between windows.