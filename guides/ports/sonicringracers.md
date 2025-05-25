---
layout: template
title: "Sonic Ring Racers"
permalink: /guides/ports/sonicringracers-guide/
description: "A guide for setting up Sonic Ring Racers on dev mode."
---

## Sonic Ring Racers

### Requirements
- **Xbox Series S/X**.
- **Dependency** - `Microsoft.VCLibs.x64.14.00.appx`
- **External Drive** - Required to store your game assets.
- **Game assets**.

### Obtaining the Game Assets  
1. Go to the Ring Racers **[GitHub](https://github.com/KartKrewDev/RingRacers/releases/tag/v2.3)** releases.  
2. Download the `Dr.Robotnik.s-Ring-Racers-Assets.zip`.  
3. Extract the contents of the zip file.  

### Preparing an External Drive  
1. Create a folder named `ringracers` (use lowercase for compatibility).  
2. Place the extracted contents of the `Dr.Robotnik.s-Ring-Racers-Assets.zip` into the `ringracers` folder.  

### Controls  
- **A** = Accelerate  
- **X** = Brake / Reverse  
- **B** = Look Behind  
- **Y** = Spin Dash  
- **LB** = Reset Position  
- **LT** = Use Ring / Insta-Whip  
- **RT** = Drift  
- **RB** = Z/Skip Text  
- **Left Stick** = Steer / Move  
- **Start** = Pause / Open Menu  

### Additional Notes  
- Vsync is forced on in the OpenGL driver. Enabling in-game Vsync may cause erratic behavior with interpolation, so it's recommended to leave it off.  
- Performance can vary depending on the track. Using 1280x800 GL resolution seems to be a good balance for performance.  
- Enabling 3D models may reduce the framerate.  
- Online play works with dedicated servers. To host your own server, you may need to forward ports to the Xbox.  
   - Use the software renderer for online play, as Legacy GL is highly unstable on this platform.  
- This is not an official project by Kart Krew, so please do not report bugs related to this port to the main repository.