---
layout: template
title: "Zircon (Quake)"
permalink: /guides/ports/zircon-guide/
description: "A guide for setting up Zircon (Quake) on dev mode."
---

## Zircon (Quake) UWP Edition

### Requirements
- **Xbox Series S/X**.
- **External Drive** - Required to store your game file and other data.
- **Game (`id1`) file** - You must own a copy of Quake or Quake enhanced to obtain the required data files.

### Obtaining the `id1` Folder  
1. Open your Quake game directory.  
2. Locate the `id1` folder.  
3. Ensure the folder contains `pak0.pak` and `pak1.pak` files and a `music` folder.
4. If a `config.cfg` file is present, delete it.

### Notes for Enhanced Release Users

- **Important**: Avoid using the `pak0.pak` file found in the `id1` folder within the `rerelease` directory of the enhanced Quake installation.
- Instead, navigate to the root of the Quake enhanced directory.  
- Locate the `id1` folder in the root directory.  
- Use the `PAK0.PAK` and `PAK1.PAK` files from this folder for compatibility.
- If you want in-game music, copy the `music` folder from the `id1` directory in the `rerelease` folder to the `id1` folder on your external drive.

### Preparing an External Drive  
1. Create a folder named `quake` (use lowercase for compatibility).  
2. Place the `id1` folder into the `quake` folder.  

### Modding
- Place any mod files directly into the `id1` folder within your `quake` directory on your external drive.

### Controls  
- A premade configuration is included in the `.zip` file with the following controls:  
  - **Left Stick**: Movement  
  - **Right Stick**: Camera movement  
  - **RT**: Shoot  
  - **A**: Jump  
  - **LB/RB**: Switch weapons  
- Simply copy the `config.cfg` to your `id1` folder.

### Additional Notes
- Two builds are provided:  
  - **`zircon_vsync_1.0.5.0_x64.msixbundle`**: Music works, but HDR is not supported.  
  - **`zircon_vsync_hdr_1.0.3.0_x64.msixbundle`**: Partial HDR support, but music does not work.