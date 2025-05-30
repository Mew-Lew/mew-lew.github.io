---
layout: template
title: "Dev Mode Guide"
permalink: /guides/devmode-guide/
description: "A guide for setting up dev mode on dev Xbox."
---

# Preliminary Steps

## Important notes
* If you are in the Xbox Update Preview program, ensure that you exit it before switching on Dev Mode. This step helps in preventing the **E208 error**. Here's how to exit:
    * Open the **Xbox Insider App**.
    * Navigate to **Xbox Update Preview > Manage > Leave Preview**.
    * Update your console through settings.
* Switching between Dev and Retail Modes deletes your Quick Resume states and any local captures. To save captures, use an external USB drive.

## Purchasing Microsoft Developer Account

### What You Need
* An Xbox One or Series console
* A Windows 10/11 PC or VM
* USB drive for storing files

### Steps:
1.  Visit the developer sign-up site and click **Create a developer account**.
2.  If the page does not load for you, try this alternative link.
3.  If it asks you to join a program to unlock new opportunities, select **Windows and Xbox**.
4.  Choose your country and select **Individual**.
5.  Fill in all required fields.
6.  Input your billing information.
    *(Note: If there is a problem processing your payment, please try again later with a different account or payment method).*

## Unstable method for buying a developer account at a lower price

### Important note
This section has a high chance of not working. There's no fix for this.

### Steps:
1.  **Sign Out of Outlook**: Open Outlook on your device and make sure you are signed out.
2.  **Access Registration Page**: Visit the Microsoft Developer registration page by clicking on this link: `https://developer.microsoft.com/store/register`
3.  **Initiate Sign-Up Process**: On the registration page, find and click the **[SIGN UP]** button.
4.  **Create a New Account**: When you see the option to “Create One!”, click it to start creating a new account.
5.  **Set Up Email and Password**: Follow the instructions to create a new email address and password. These will be your Microsoft Developer account credentials.
6.  **Select Region/Country for Payment Method**:
    * Choose **Argentina** when using a MasterCard.
    * Select **Turkey** if you are using a Visa card.
7.  **Provide Postal Code**: Use the postal code `L6700` for Argentina. For Turkey, use `06000`.
    * Some users report success using a generator for this information.
8.  **Enter Date of Birth and Address**: Any date of birth is acceptable. For the address, you can use "..." or any placeholder if you prefer.
9.  **Payment Information for Dev Mode**: Enter your card details, including the card number, expiry date, and CVV.
    * Use "..." or fake information for the address, but the postal code should be `L6700` for MasterCard. For Visa, use a Turkish postal code.
    * Choose **Argentina** when using a MasterCard.
    * Select **Turkey** if you are using a Visa card.

## Setting up USB drive for emulation

### Manual instructions for formatting and adding permissions

#### Important notes:
* This is a guaranteed method of successfully preparing your USB drive for emulation.
* You **MUST** have access to a Windows PC or virtual machine to perform this setup properly.

#### Steps
1.  **Format your USB drive to NTFS**
    * Connect your USB/external drive to your PC
    * Right-click on your USB and select **Format**
    * Then click **File System** and select **NTFS**.
    * Now select **Start** at the bottom
2.  After formatting, right click on your drive -> select **Properties** and then select the **Security** tab at the top.
3.  Go to **Advanced > Add > Select Principal > Advanced > Find Now > ALL APPLICATION PACKAGES > OK > Tick the Full Control box > OK > Tick Replace all child object permission entries box > OK**
4.  You will get an error about System Volume Information, click **continue** and ignore it.
5.  Once you have connected the newly formatted drive to your Xbox, you must set it as **Media!** (**DO NOT SELECT GAMES AND APPs**).

### Using the XboxMediaUSB

#### Important notes:
* XboxMediaUSB is not applying the correct permissions for some users. To resolve this, you will need to do this manually using the instructions above.

#### Steps:
1.  Go to the GitHub.
2.  Download the latest version of XboxMediaUSB and extract it.
3.  Open `XboxMediaUSB.exe`.
4.  Select your USB drive and click **Format USB**.
5.  Safely eject the drive once it’s ready.

## Installing Dev Mode on Xbox

### Initial setup
1.  Go to the Microsoft Store and search for **Xbox Dev Mode**.
2.  Install and open the app.
3.  You’ll receive a code and a link to enter it.
4.  On your PC, go to the link (`https://aka.ms/activatexbox`) and enter the code.
5.  Your console will now activate Dev Mode and restart.

### Configuration

#### First Setup:
1.  After a restart, go to **Manage Dev Storage** and allocate at least 5GB to Dev Mode.
2.  Restart the console to apply these changes.

#### Connect to Internet:
1.  Go to **Settings > Network Settings > Set up wireless network** (or use Ethernet).
2.  Once connected, proceed to configure remote access.

### Remote Access via PC

#### Steps:
1.  **Enable Xbox Device Portal**: Go to **Settings > Remote Access Settings** and enable this feature.
2.  If you want to add a layer of security, select the box for **Require Authentication** and set up a username and password.

### Accessing Xbox Device Portal

#### From PC:
1.  In a web browser, enter the Device Portal link shown on your Xbox.
2.  Ignore the security warning and proceed anyway.

#### What you can do in Device Portal:
* Install emulators, manage files, change system settings, and more.

## Installing Emulators

### Download Emulators:
1.  Download emulators such as Dolphin and RetroArch from Xbox Dev Store.
2.  Extract the emulator files on your desktop.

### Upload to Xbox:
1.  In the Device Portal, click the green **Add** button.
2.  Drag the emulator files (e.g., Dolphin `APPX` file) and any required dependency files (These dependency files will be `x64`).
3.  Click **Next** and follow the installation steps.