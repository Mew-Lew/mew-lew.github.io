---
layout: template
title: "ChonkyStation 3 Guide"
permalink: /guides/wipapps/chonkystation3-guide/
description: "A guide for setting up ChonkyStation 3 on dev mode."
---

# ChonkyStation 3 UWP (Proof of Concept) Guide
#### Guide Author: Jeen

This guide provides instructions for installing and running a Proof of Concept (POC) build of ChonkyStation 3 UWP, a PlayStation 3 emulator, on an Xbox Series S/X console in Developer Mode.  *This build is highly experimental and incomplete.  Not all games will work, and those that do may have significant issues.*

**Ported By:** @MoonPower

## Prerequisites

*   **Xbox in Developer Mode:** Your Xbox Series S/X must be in Developer Mode.
*   **PC:** A Windows PC for file transfers, accessing the Xbox Dev Portal, and potentially using RPCS3.
*   **ChonkyStation 3 UWP Files:** Download the [ChonkyStation 3 UWP .zip file](https://xbdev.store/#99).  This .zip *should* contain:  *(Note: The provided link now points to a more general location.  Ideally, this would link directly to the ChonkyStation 3 download.)*
    *   `xbox-uwp-sdl2-starter_1.0.6.0_x64.appx` (or a similarly named `.appx` file) - The main application package.
    *   An `x64` folder - Contains dependency files.
    *   A `sys` folder - Contains essential system files.
*  **PKG GUI, TrueAncestor Resigner, PS3 ISO Tools, PSN Liberator, and RPCS3:** If you wish to convert PS3 games, you will need some or all of these tools.

## Installation and Setup

### Part 1: Install the Appx and Dependencies

1.  **Extract Files:** Extract the downloaded ChonkyStation 3 UWP .zip file to a location on your PC.  *Crucially*, also extract the contents of the `x64` folder (which contains the dependencies).

2.  **Access Xbox Dev Portal:** On your PC, open a web browser and access the Xbox Device Portal (you should have the URL from when you enabled Developer Mode).

3.  **Install Appx:**
    *   In the Dev Portal, go to "My games & apps" and click "Add".
    *   Click "Choose file" and select the `xbox-uwp-sdl2-starter_1.0.6.0_x64.appx` file (or the similarly named `.appx` file).
    *   Click "Next".

4.  **Install Dependencies:**
    *   You'll be prompted to add dependencies.
    *   Click "Choose file" and add *all* the dependency files from the extracted `x64` folder, *one by one*.
    *   Click "Start" to begin the installation.

### Part 2: Copy System Files and Prepare Game Folder

1.  **Launch ChonkyStation 3 (Initial Launch):** Launch the "ChunkyStation C#" application on your Xbox. It will likely crash, but this initial launch is *required* to create necessary folders.

2. **Access Xbox Dev Portal:** Open the Xbox Device Portal in your web browser.
3. **Copy the System Files**
      *  Go to "File explorer".
     *   Navigate to: `LocalAppData\xbox-uwp-sdl2-starter\LocalState`.
     * Click **Create new folder** and name it `dev_hdd0`.
     * Navigate inside the `dev_hdd0` and create a folder and name it `game`.
4. **Transfer System Files:**
   *   Go back to the extracted ChonkyStation 3 UWP folder on your PC. Find the `sys` folder.
    *   *Copy all the files* inside the `sys` folder.
   * In the **Dev Portal**, navigate to `LocalAppData\xbox-uwp-sdl2-starter\LocalState`.
    *   *Paste* the copied files into the `LocalState` folder.

### Part 3: Add a Game (.elf)

1.  **Access Xbox Dev Portal:** Open the Xbox Device Portal in your web browser.

2.  **Navigate to `dev_hdd0/game`:**
     *   Go to "File explorer".
     *   Navigate to:  `LocalAppData\xbox-uwp-sdl2-starter\LocalState\dev_hdd0\game`.

3. **Upload `.elf`:** Place your desired game's `.elf` file into the `dev_hdd0\game` folder. You can do this by using the "Choose file" and "Upload" options in the Dev Portal, or by using FTP. *Do not rename the file*. The emulator will load the *first* `.elf` file it finds in this directory.

### Part 4: Launch and Test

1.  **Launch ChonkyStation C#:** Launch the "ChunkyStation C#" application on your Xbox.

## How to Test Other Games

*   **ELF Format:** Games *must* be in `.elf` format.
*   **Location:** Place the game's `.elf` file in the `dev_hdd0/game` folder within the app's `LocalState` folder.  Only *one* game can be loaded at a time due to the POC nature of the build; the emulator will load the first .elf` it finds. You *must* remove or rename any other `.elf` files in that directory.

## Creating .elf Files (from PS3 Games)

*This section describes how to convert legally obtained PS3 game files to .elf format.*

There are multiple methods to obtain `.elf` files from PS3 games:

**Method 1: PKG Games (PSN Store Versions)**

1.  **Download Tools:**
    *   **PKG GUI:** ([https://www.mediafire.com/?5kpbnpb4bujs3rz](https://www.mediafire.com/?5kpbnpb4bujs3rz)).  This tool extracts files from PS3 PKG packages. *Note: Use caution when downloading from unofficial sources.*
    *   **TrueAncestor Self Resigner:** [https://www.psx-place.com/resources/trueancestor-self-resigner-by-jjkkyu.33/](https://www.psx-place.com/resources/trueancestor-self-resigner-by-jjkkyu.33/) This tool resigns EBOOT files.

2.  **Extract EBOOT.BIN:** Use PKG GUI to extract the `EBOOT.BIN` file from the PS3 game's PKG package.  The `EBOOT.BIN` is typically located within the `USRDIR` folder inside the extracted PKG contents.

3.  **Resign EBOOT.BIN:**
    *   Copy the extracted `EBOOT.BIN` file to the TrueAncestor Self Resigner folder.
    *   Run `resigner.exe` (or the equivalent executable).
    *   Choose option 1 ("Resign EBOOT.BIN to SELF").
    *   This will generate a `.elf` file in the same directory as the `EBOOT.BIN`.

**Method 2: ISO Games (Disc Images)**

1.  **Download Tool:**
    *   **PS3 ISO Tools:** [https://www.psx-place.com/resources/ps3-iso-tools.68/](https://www.psx-place.com/resources/ps3-iso-tools.68/)

2.  **Extract ISO:** Use PS3 ISO Tools to extract the contents of the ISO image.

3.  **Locate EBOOT.BIN:**  Find the `EBOOT.BIN` file within the extracted files.  It's usually located in the `PS3_GAME\USRDIR` folder.

4.  **Resign EBOOT.BIN:** Follow the same steps as in Method 1 (using TrueAncestor Self Resigner) to convert the `EBOOT.BIN` to a `.elf` file.

**Method 3: Converting PKG to ISO**
    *   **PSN Liberator:** [https://www.psx-place.com/resources/psn-liberator.869/](https://www.psx-place.com/resources/psn-liberator.869/)
    * Convert the PKG to ISO, then proceed with **Method 2**.

**Method 4: Using RPCS3 (PC Emulator)**

1.  **Decrypt Game:** Ensure your PS3 game is decrypted and in folder format. You can confirm this by navigating to the game folder; you should see a `PS3_GAME` folder, and inside that, a `USRDIR` folder. The `EBOOT.BIN` file will be inside `USRDIR`.  *Not all games require a separate `.edat` file for decryption. Some games use a `key.edat`, others may use a differently named `.edat` file (e.g., `drm.edat`), and some games don't require one at all.  The `.edat` file, if needed, is usually found in the `USRDIR` folder.*

2.  **RPCS3:** Download and Open the [RPCS3 emulator](https://rpcs3.net/) on your PC.

3.  **Decrypt Binaries:**
    *   Go to the "Utilities" tab.
    *   Select "Decrypt PS3 Binaries".
    *   Navigate to the game's `PS3_GAME\USRDIR` folder and select the `EBOOT.BIN` file.
    *   If required by the game, you may also need to select the appropriate `.edat` file during the decryption process. RPCS3 will usually prompt you if it needs an `.edat` file.
    *   RPCS3 will decrypt the file, and you'll find the `EBOOT.elf` in the same folder as the `EBOOT.BIN`.

**Common Errors (RPCS3 Method):**

*   **"32 Digit HEX code" prompt:** If RPCS3 asks for a 32-digit HEX code when you select the `EBOOT.BIN`, your game is *not* decrypted. You'll need to decrypt the game files before proceeding.  This often involves finding or generating an appropriate decryption key (which is beyond the scope of this guide, and may have legal implications).

## Important Notes

*   **Proof of Concept:**  This build of ChonkyStation 3 UWP is a *proof of concept* and is *highly experimental*. Do not expect full compatibility or performance.
*   **Game Compatibility:** Not all games will work, and those that do may have significant issues.
*   **WIP:**  This is a work in progress, and future updates may improve compatibility and performance.
