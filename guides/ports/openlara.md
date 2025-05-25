---
layout: template
title: "OpenLara"
permalink: /guides/ports/openlara-guide/
description: "A guide for setting up OpenLara on dev mode."
---

## OpenLara UWP

### Extracting Game Assets  

**NOTE:** You can use assets from the original PC or PS1 versions. The original PC version
can be purchased at **[GOG.com](<https://www.gog.com/game/tomb_raider_123>)**.

### **For PS1 Version**  
1. Use a program like **PowerISO** to extract the ISO or BIN file.  
2. Copy the following folders to your desktop:  
   - `PSXDATA`  
   - `FMV`  
   - `DELDATA`  

### **For GOG Version**  
1. Navigate to the game's installation directory and open the **DOSBOX** folder.  
2. Open the `dosbox.conf` file in a text editor like **Notepad**.  
3. Scroll to the bottom and add the following under the `[autoexec]` heading:

```
mount C .
        imgmount d ".\GAME.GOG" -t iso -fs iso
        xcopy D:\DATA\ C:\DATA\
        xcopy D:\FMV\ C:\FMV\
```
It should look like this:

```
[autoexec]
# Lines in this section will be run at startup.
# You can put your MOUNT lines here.
mount C .
        imgmount d ".\GAME.GOG" -t iso -fs iso
        xcopy D:\DATA\ C:\DATA\
        xcopy D:\FMV\ C:\FMV\
```
4. Copy the `GAME.GOG` file from the **Tomb Raider 1** folder and paste it into the **DOSBOX** folder.  
5. Run the **DOSBox** application from the same directory. This will extract the `DATA` and `FMV` folders to the **DOSBOX** directory.  
6. Copy the extracted `DATA` and `FMV` folders to your desktop.

### Obtaining Audio Files

1. **Download Audio Files**:  
   - Get the **(TR1 also Gold)** file from **[this link](https://opentomb.earvillage.net/)**.
   - Extract the ZIP file.  

2. **Transfer Files**:  
   - Copy the contents of the `pix` folder to:  
     - `PSXDATA` folder for PS1.  
     - `DATA` folder for GOG.  
   - Copy the `audio` folder to your desktop.  

3. **Prepare for Compression**:  
   - **For PS1**:  
     - Select the following folders:  
       - `PSXDATA`  
       - `FMV`  
       - `DELDATA`  
       - `audio`  
     - Compress all into a single ZIP file.  

   - **For GOG**:  
     - Select the following folders:  
       - `DATA`  
       - `FMV`  
       - `audio`  
     - Compress all into a single ZIP file.

### Internal Setup
1. Launch **OpenLara** to initialize the folders.
    - The app will force close.
2. Upload your **zip** file:
   - Open the Dev Portal.
   - Go to **File Explorer** > **Local App Data** > **OpenLara**.
   - Navigate to the **Local State** folder.
      - Click **Choose File**, locate your `zip` file, and **Upload**.
      - When prompted, choose yes to **Extract ZIP Contents** into the directory.
3. Launch **OpenLara** and you're ready to play.

### Additional notes
- Press **LB** + **A** to enable first person.
- The PS1 assets have crackly FMV audio, but everything else works fine.