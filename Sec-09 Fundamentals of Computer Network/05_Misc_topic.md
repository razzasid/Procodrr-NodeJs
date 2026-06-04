# What Are Port Numbers?

Port numbers are numerical identifiers used to identify:

* applications,
* services,
* processes

running on a device.

---

# Simple Understanding

Think of:

| Networking Concept | Real-Life Example |
| ------------------ | ----------------- |
| IP Address         | Building Address  |
| Port Number        | Apartment Number  |

The IP address tells:

> which device should receive the data.

The port number tells:

> which application/service inside that device should handle the data.

---

# Example

Suppose your laptop has:

* Chrome browser,
* Discord,
* VS Code Live Server,
* SSH server

all running together.

Your single IP address is enough for the device,
but ports help the OS decide:

> which app gets which network data.

---

# Port Number Range

Port range:

0 - 65535

Total ports:

65536

---

# Port Categories

| Range         | Type                  | Usage                        |
| ------------- | --------------------- | ---------------------------- |
| 0 – 1023      | Well-Known Ports      | Standard internet services   |
| 1024 – 49151  | Registered Ports      | User applications            |
| 49152 – 65535 | Dynamic/Private Ports | Temporary client connections |

---

# Common Ports

| Service | Port |
| ------- | ---- |
| HTTP    | 80   |
| HTTPS   | 443  |
| FTP     | 21   |
| SSH     | 22   |
| DNS     | 53   |
| SMTP    | 25   |

---

# Important Understanding

One device can run:

* many services,
* many servers,
* many applications

simultaneously because of ports.

Example:

```text id="d0lf2q"
192.168.0.5:80
192.168.0.5:443
192.168.0.5:3000
```

Same IP.
Different ports.
Different services.

---

# Client Port vs Server Port

## Server Port

Fixed ports where services listen.

Examples:

* HTTP → 80
* HTTPS → 443

---

## Client Port

Temporary random ports used by client devices.

Example:

* browser opens temporary port while accessing website.

These are usually:

* dynamic/private ports.

---

# What Are Network Interfaces?

# Network Interface = Way To Connect To Network

A network interface is:

> hardware/software used to access networks or internet.

Every internet connection happens through some network interface.

---

# Computer Network Interfaces

## 1. WiFi

Wireless networking using:

* radio signals.

Requires:

* WiFi card/adapter.

---

## 2. Ethernet / LAN Cable

Uses physical cable connection.

Usually:

* faster,
* lower latency,
* more stable than WiFi.

Speed depends on:

* cable quality,
* router,
* NIC (network card).

---

# Ethernet Cable Categories

Examples:

| Cable Type | Max Speed                |
| ---------- | ------------------------ |
| Cat5       | 100 Mbps                 |
| Cat5e      | 1 Gbps                   |
| Cat6       | 10 Gbps (short distance) |

---

## 3. Bluetooth

Can transfer:

* files,
* internet connection,
* device communication.

Example:

* Bluetooth tethering.

Usually slower than WiFi.

---

## 4. USB Tethering

Phone shares internet using:

* USB cable.

Often:

* more stable and faster than hotspot.

---

# Typical Speed Comparison

```text id="fhm7ew"
Ethernet > USB > WiFi > Bluetooth
```

---

# Phone Network Interfaces

Phones mainly use:

* WiFi
* Bluetooth
* USB
* Cellular Data (SIM)

---

# Cellular Data

Mobile internet uses:

* SIM card,
* mobile tower,
* ISP infrastructure.

Examples:

* 4G
* 5G

---

# What is MAC Address?

# MAC = Media Access Control Address

A MAC address is:

> a unique hardware identifier assigned to every network interface.

---

# Important MAC Address Points

## MAC Address Size

MAC address uses:

48bits

(6 bytes)

---

# MAC Address Format

## Colon Format

```text id="s4lyv8"
00:1A:2B:3C:4D:5E
```

---

## Hyphen Format (Windows)

```text id="lp7m35"
00-1A-2B-3C-4D-5E
```

---

## Cisco Dot Format

```text id="uw9d1q"
001A.2B3C.4D5E
```

---

# Important Understanding

Every network interface has its own MAC address.

Example:

* WiFi adapter → separate MAC
* Ethernet adapter → separate MAC

---

# MAC vs IP Address

| MAC Address                | IP Address                     |
| -------------------------- | ------------------------------ |
| Physical hardware identity | Logical network identity       |
| Works inside local network | Works across networks/internet |
| Usually permanent          | Can change dynamically         |

---

# How Routers Use MAC Addresses

Routers use MAC addresses to:

* identify devices,
* manage local traffic,
* assign DHCP leases.

---

# ARP (Address Resolution Protocol)

ARP helps convert:

```text id="2m8ezi"
IP Address → MAC Address
```

inside local networks.

Example:

* router knows device IP,
* ARP finds corresponding MAC address.

---

# View MAC Address in Windows

Command:

```bash id="0f5l4w"
ipconfig /all
```

MAC appears as:

```text id="u4k7ea"
Physical Address
```

---

# What is a Firewall?

A firewall is a security system that:

* monitors traffic,
* filters traffic,
* blocks or allows communication using rules.

---

# Simple Firewall Flow

```text id="p0mxeh"
Internet
   ↓
Firewall
   ↓
Your Device
```

Every incoming/outgoing packet is checked against rules.

---

# Why Firewalls Exist

Without firewall:

* any open service becomes exposed,
* attackers can scan devices easily.

Firewalls reduce:

* unauthorized access,
* malware communication,
* hacking attempts.

---

# Types of Network Profiles

## Public Network

Used in:

* cafes,
* airports,
* public WiFi.

Most restrictive security settings.

---

## Private Network

Used for:

* home WiFi,
* trusted networks.

Allows:

* local discovery,
* device sharing.

---

## Domain Network

Used in:

* companies,
* enterprise systems.

Managed centrally using organization policies.

---

# Inbound vs Outbound Traffic

| Type     | Meaning                         |
| -------- | ------------------------------- |
| Inbound  | Incoming traffic to your device |
| Outbound | Traffic leaving your device     |

---

# Default Firewall Behavior

| Traffic Type | Default Behavior |
| ------------ | ---------------- |
| Inbound      | Mostly blocked   |
| Outbound     | Mostly allowed   |

---

# Inbound Rules

Control:

> who can access your device.

Examples:

* allow SSH port 22,
* allow port 3000,
* block attackers.

---

# Outbound Rules

Control:

> what your device can access outside.

Examples:

* block suspicious app internet access.

---

# What Firewalls Can Block

Firewalls can filter using:

* IP addresses,
* ports,
* protocols,
* applications,
* MAC addresses (sometimes).

---

# Protocol Filtering

Examples:

* allow TCP
* block UDP

---

# Application Filtering

Examples:

* block specific software from internet.

---

# Port Filtering

Examples:

* allow only port 443,
* block port 21.

---

# Deep Packet Inspection (DPI)

Advanced firewalls use:

# DPI = Deep Packet Inspection

DPI can inspect:

* actual packet contents,
  not just headers.

Used for:

* malware detection,
* content filtering,
* censorship,
* traffic analysis.

---

# Firewall + Port Relationship

Ports are extremely important for firewall security.

Example:

* SSH uses port 22,
* HTTP uses port 80.

Firewall can:

* allow specific ports,
* block dangerous ports,
* restrict external access.

---

# Example Scenario

Suppose:

* local server running on port 3000.

Firewall may:

* block external access by default.

You must manually allow:

```text id="k0w4c9"
Port 3000
```

for outside devices to access it.

---

# Biggest Understanding

Networking works because devices communicate using:

* IP addresses,
* ports,
* MAC addresses,
* protocols,
* interfaces,
* routing rules,
* security systems like firewalls.

The internet is basically:

> billions of devices communicating through structured addressing and controlled traffic systems.
