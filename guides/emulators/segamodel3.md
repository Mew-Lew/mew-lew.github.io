---
layout: template
title: "Sega Model 3 Guide"
permalink: /guides/emulators/segamodel3-guide/
description: "A guide for setting up Sega Model 3 on dev mode."
---

## Sega Model 3 (Powered by Supermodel)

### Requirements:
- Xbox Series X/S.
- External USB.
- `Microsoft.VCLibs.x64.14.00.appx` dependency file.

### Prepare Game Files
1. Create a folder named `Sega Model 3` on your USB drive under the `Games` directory.
2. Place your games in this folder. Ensure the files are in **ZIP format**.
3. Connect the USB drive to your Xbox.

### Launch the Emulator
1. Open the emulator.  
2. A file explorer will appear. Navigate to your `Games` folder, then `Sega Model 3`, and select a game to play.

### Enable Widescreen & Customize Controls
1. Access the **Xbox Device Portal** again.
2. Go to **File Explorer** > **Development Files** > **Windows Apps**.
3. Find the `Sega Model 3` folder, open the `Config` folder, and download the `Supermodel.ini` file.
4. Open the `.ini` file in **Notepad**:
   - To enable widescreen:  
     Find `Widescreen = false`, change it to `true`.
   - To customize controls:  
     Edit the **Xbox Controller <-> Supermodel Input ID-Tags** in the file.
5. Save the file, then upload it back to the **Config** folder via the Xbox Device Portal, replacing the original file.

### Additional Notes:
- Use the `.ini` file to further customize settings like graphics, controls, and more.
- If you encounter issues, revisit the portal to make adjustments.