---
layout: template
title: "Chrono Divide Guide"
permalink: /guides/ports/chronodivide-guide/
description: "A guide for setting up Chrono Divide on dev mode."
---

## Red Alert 2: Chrono Divide

### Install the Chrono Divide App
- Unzip the `ChronoDivide.zip` file.
- Install the `STORE_1.0.12.0_x64_Debug.msixbundle` via the dev portal.
   - Install all 5 included dependencies.

### Launch Chrono Divide
1. Close the first pop-up titled **Chrono Dive Data**.  
2. Select **Yes** when prompted to download `EBWebView1.zip`.  
3. Wait for the download to complete.  
4. After the download finishes, there will be a short delay. Avoid pressing anything during this time.  
5. Close the **Download Completed Chrono Dive Data** pop-up.  
6. Open the **Dev Portal** and navigate to:  
   `LocalAppData/STORE/LocalState`.  
   - Delete the `EBWebView` folder.  
   - Rename the `EBWebView1` folder to `EBWebView` by removing the `1`.  
   - If the `EBWebView1.zip` file is still in the `LocalState` folder, you can delete it.  
7. Restart **Chrono Divide** to apply the changes.  

### Additional Notes
- This app is a web wrapper, so mods are not supported.  
- Enable fullscreen either from the title screen or in the in-game options.  
- If the cursor becomes desynced, move the right stick to resync it.
- Keyboard input is supported.