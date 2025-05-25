---
layout: template
title: "Darkplaces (Quake) UWP Edition Guide"
permalink: /guides/ports/darkplaces-guide/
description: "A guide for setting up Darkplaces (Quake) UWP Edition on dev mode."
---

## Darkplaces (Quake) UWP Edition


### Requirements
- **Xbox Series S/X**.
- **External Drive** - Required to store your game file and other data.
- **Game (`id1`) file** - You must own a copy of Quake or Quake enhanced to obtain the required data files.

## Obtaining the `id1` Folder  
1. Open your Quake game directory.  
2. Locate the `id1` folder.  
3. Ensure the folder contains `pak0.pak` and `pak1.pak` files.
4. If a `config.cfg` file is present, delete it.

### Notes for Enhanced Release Users

- **Important**: Avoid using the `pak0.pak` file found in the `id1` folder within the `rerelease` directory of the enhanced Quake installation.
- Instead, navigate to the root of the Quake enhanced directory.  
- Locate the `id1` folder in the root directory.  
- Use the `PAK0.PAK` and `PAK1.PAK` files from this folder for compatibility.

## Preparing an External Drive  
1. Create a folder named `quake` (use lowercase for compatibility).  
2. Place the `id1` folder into the `quake` folder.  

## Enabling Mods and Adding `zlib1.dll`

### Step 1: Add `zlib1.dll`
1. Obtain the `zlib1.dll` file from the attached `.zip` file.
2. Open the **Dev Portal** on your PC.  
3. Navigate to:  
   `DevelopmentFiles > WindowsApps > darkplaces_1.0.1.0_x64__vfvyvkbgajpwg` using the **File Explorer**.  
4. Upload the `zlib1.dll` file into this directory.

### Step 2: Add Mods
- Place any mod files directly into the `id1` folder within your `quake` directory on your external drive.  

### Controls  
- A premade configuration is included in the attached `.zip` file with the following controls:  
  - **Left Stick**: Movement  
  - **Right Stick**: Camera movement  
  - **RT**: Shoot  
  - **A**: Jump  
  - **LB/RB**: Switch weapons  
- Simply copy the `config.cfg` to your `id1` folder.

### Additional Notes
- Two builds are provided:  
  - **`darkplaces_1.0.0.0_x64.msixbundle`**: Vsync enabled.  
  - **`darkplaces_novsync_1.0.1.0_x64.msixbundle`**: Vsync disabled.
- Music is not supported in either build.