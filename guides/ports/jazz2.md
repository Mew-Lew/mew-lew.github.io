---
layout: template
title: "Jazz² Resurrection"
permalink: /guides/ports/jazz2-guide/
description: "A guide for setting up Jazz² Resurrection on dev mode."
---

## Jazz² Resurrection

### Requirements
- **Jazz Jackrabbit 2 game files**: You must own a copy of Jazz Jackrabbit 2 to use the required assets.  

### Obtaining the Game Assets  

The following versions of the original game can be used:  
- Jazz Jackrabbit 2: Shareware Demo  
- Jazz Jackrabbit 2 (v1.20/1.23)  
- Jazz Jackrabbit 2: Holiday Hare '98  
- Jazz Jackrabbit 2: The Secret Files  
- Jazz Jackrabbit 2: Christmas Chronicles  

If you don't own any of these versions, you can purchase the **Jazz Jackrabbit 2 Collection** from GOG.

**Extracting Game Assets:**
- For original games:  
   Extract the `.bin` file using a tool like PowerISO. Locate the `Resource` folder within the extracted files.  
- For the GOG version:  
   Open the game installation folder and use its contents.  

### External Drive Setup  
1. On your external drive, if it doesn’t already exist, create a folder named `Games` (e.g., `E:\Games`).  
2. In your `Games` folder, create a folder named `Jazz² Resurrection` (you can copy and paste the name for accuracy).  
3. Inside the `Jazz² Resurrection` folder, create another folder named `Source` (e.g., `E:\Games\Jazz² Resurrection\Source`).
4. Transfer your assets:  
   - **For original games**: Copy the contents of the `Resource` folder into the `Source` folder.  
   - **For the GOG version**: Open the game installation folder and copy everything into the `Source` folder.  
5. Launch **Jazz² Resurrection**, and you're ready to play!  

### Internal Drive Setup  
1. Launch **Jazz² Resurrection** to initialize the folders, then quit the game:  
   - Press the **Xbox button**, hover over **Jazz² Resurrection**, press **Start**, and choose **Quit**.  
2. Compress the game assets into a `.zip` file:  
   - **For original games**: Select the contents of the `Resource` folder and compress them into a `.zip` file.  
   - **For the GOG version**: Open the game installation folder, select everything, and compress it into a `.zip` file.  
3. Upload the assets:  
   - Open the **Dev Portal**.  
   - Navigate to **File Explorer** > **Local App Data** > **Jazz² Resurrection**.  
   - Go to the **Local State** folder.  
      - Click **Create New Folder**, name the folder `Source`, and confirm with **OK**.  
   - Open the `Source` folder.  
   - Click **Choose File**, locate your `.zip` file, and **Upload**.  
      - When prompted, choose yes to **Extract ZIP Contents** into the directory.
4. Launch **Jazz² Resurrection**, and you're ready to play!  

### Additional Notes
- **Xbox One Build**: `Jazz2.msixbundle`  
- **Xbox Series S/X Build**: `Jazz2_mesa.msixbundle`
