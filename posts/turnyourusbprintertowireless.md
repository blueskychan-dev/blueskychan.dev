---

title: "Turning a USB-Only Printer into a Wireless Printer with CUPS (Self-Hosted on Linux)"
desc: Don’t throw away that old printer — make it wireless instead!
date: "10-14-2025"
tags:

- How-to
- Linux

---

Hey, Mind here! 👋

I know it’s a bit funny to start with a “How-to” post, but I really hope this one will be helpful for you (or someone out there).

---

## 🖨️ The Beginning

I’ve had my Canon Pixma E410 printer at home for a long time. The ink is expensive, so I asked [@latenightdef](https://pongpeeraw.techtransthai.org) to help me find a shop that could modify it with an ink tank system — and finally, I got it done!

![theprinter](/printer/theprinter.png)

Since I already have a self-hosted Linux server nearby (named *miyabidell*), I thought:

> “Why not make this printer wireless?”

Note: the Canon Pixma E410 doesn’t support Wi-Fi. It can only print via USB and scanning.

Before we start, let’s unbox it, plug it into the server, and get ready.

![plugtheusb](/printer/plugusb.gif)

---

## ⚙️ Preparing

Once your server is powered on, connect the printer and check if it’s detected with:


lsusb


![lsusb](/printer/lsusb.png)

If your printer shows up like this — congrats! Everything is working, and we’re ready to move on.

---

## 📦 Installing Required Packages

You’ll need the following packages:

- cups
- gutenprint
- gutenprint-cups (for Canon drivers)
- samba (to make the printer discoverable on your network)

On Fedora (my server’s OS), you can install them with:


sudo dnf install cups gutenprint gutenprint-cups samba -y


---

## 🧩 Setting Up CUPS

Once installed, open the CUPS configuration file:


sudo nano /etc/cups/cupsd.conf


![check1](/printer/check1.png)

Make sure of the following:

* The `Listen` line should be `Listen *:631` — **not** `Listen localhost:631`.
  Otherwise, you won’t be able to access or manage the printer from other devices.

* Under the `<Location>` tags, add `Allow @LOCAL` and comment out or remove `Order allow,deny`.
  Without this, the CUPS web interface (admin, logs, etc.) won’t be accessible from other computers.

Save your changes and restart or enable the CUPS service:


sudo systemctl enable --now cups


---

## 🖥️ Adding the Printer

Open your browser and go to:


http://<server-ip>:631


You should see the CUPS web interface:

![cupswebsite](/printer/cupswebsite.png)

Go to the **Administration** tab → click **Add Printer**.

![admin](/printer/adminpage.png)

If prompted for login credentials, use your server’s username and password (the one with `sudo` privileges).

Next, select your printer and click **Continue**.

![choose1](/printer/choose1.png)
![choose2](/printer/choose2.png)

Now, name your printer — anything you like — but make sure to **check “Share This Printer.”**
Without this, the wireless setup won’t work!

![choose3](/printer/choose3.png)

Then, select your printer model and click **Add Printer**.

![done1](/printer/done1.png)

Optionally, configure your printer’s default settings.
If everything looks fine, skip ahead.

Click **Printers**, select your printer, and test print.

![select](/printer/select.png)
![testprint](/printer/testprint.png)

If it prints successfully — congrats again!

![testprintresult.png](/printer/testprintresult.png)

---

## 🌐 Configuring Samba (for Wireless Access)

Samba allows other devices (like phones or laptops) to find your printer easily over the network.

First, enable Samba:


sudo systemctl enable --now smb


![enablesmb](/printer/enablesmb.png)

Then edit the Samba configuration file:


sudo nano /etc/samba/smb.conf


![sambaconfig](/printer/sambaconfig.png)

Make sure it looks like the example above, then save and restart Samba:


sudo systemctl restart smb


And that’s it — your wireless printer is now ready!

---

## 📱 Testing Wireless Printing

Grab your phone, choose any photo or document, and search for printers on your network.

You should now see your server-shared printer available to print.

[🎥 Here’s what it should look like in action.](/printer/wirelesstest.mp4)

If you see similar results — congrats, everything’s working perfectly!

---

## 🏁 Finally

I hope this guide helped you give your old printer a new life instead of tossing it into e-waste.
Thanks for reading, and see you in the next blog! 💙