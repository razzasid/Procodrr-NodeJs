# What is the OSI Model?

# OSI = Open Systems Interconnection Model

OSI Model is a conceptual framework that explains:

> how data travels from one device to another through different networking layers.

It divides networking into:

7 layers

Each layer has a specific responsibility.

---

# Why OSI Model Exists

Without layers:

* networking would become chaotic,
* protocols would conflict,
* devices could not communicate properly.

OSI separates networking into manageable parts.

---

# OSI Layers (Top → Bottom)

| Layer | Name         |
| ----- | ------------ |
| 7     | Application  |
| 6     | Presentation |
| 5     | Session      |
| 4     | Transport    |
| 3     | Network      |
| 2     | Data Link    |
| 1     | Physical     |

---

# Easy Analogy

Imagine sending a parcel.

| OSI Layer    | Real-Life Analogy       |
| ------------ | ----------------------- |
| Application  | Writing message         |
| Presentation | Translating/compressing |
| Session      | Starting conversation   |
| Transport    | Packaging safely        |
| Network      | Choosing route          |
| Data Link    | Local delivery          |
| Physical     | Actual road/wires       |

---

# Layer 7 — Application Layer

This is the layer closest to users.

Applications use this layer to access network services.

---

# Functions

* Web browsing
* Email
* File transfer
* DNS lookups

---

# Protocol Examples

* HTTP
* HTTPS
* FTP
* SMTP
* DNS
* Telnet

---

# Important Understanding

This layer does NOT mean:

* actual apps like Chrome.

It means:

> networking services used by applications.

---

# Layer 6 — Presentation Layer

Responsible for:

* formatting,
* encryption,
* compression.

---

# Functions

* Convert data formats
* Encrypt/decrypt data
* Compress data

---

# Examples

* SSL/TLS
* JPEG
* MP4
* GIF

---

# Real Example

When HTTPS encrypts website traffic:

* Presentation Layer is involved.

---

# Layer 5 — Session Layer

Responsible for:

* creating sessions,
* maintaining sessions,
* ending sessions.

---

# Functions

* Login sessions
* Persistent communication
* Synchronization checkpoints

---

# Examples

* RPC
* NetBIOS
* PPTP

---

# Real Example

When you stay logged into website:

* session management is happening.

---

# Layer 4 — Transport Layer

Responsible for:

* reliable/unreliable delivery,
* segmentation,
* retransmission,
* flow control.

This is where:

* TCP
* UDP

operate.

---

# TCP (Transmission Control Protocol)

TCP is:

* reliable,
* connection-oriented,
* ordered.

---

# TCP Features

* Error checking
* Acknowledgements
* Retransmission
* Sequence ordering

---

# TCP 3-Way Handshake

Before communication starts:

```text id="j8m2w1"
Client → SYN
Server → SYN-ACK
Client → ACK
```

Connection established.

---

# TCP Analogy

Like:

> a phone call where both people confirm communication.

---

# TCP Use Cases

* Websites
* Emails
* SSH
* File transfers

---

# UDP (User Datagram Protocol)

UDP is:

* fast,
* lightweight,
* connectionless.

No guarantee:

* delivery,
* order,
* retransmission.

---

# UDP Analogy

Like:

> sending letters without tracking.

Fast but unreliable.

---

# UDP Use Cases

* Online gaming
* Video streaming
* Voice calls
* Live broadcasting

---

# TCP vs UDP

| TCP            | UDP              |
| -------------- | ---------------- |
| Reliable       | Faster           |
| Ordered        | Unordered        |
| Uses handshake | No handshake     |
| Error checking | Minimal checking |
| Slower         | Lower latency    |

---

# Layer 3 — Network Layer

Responsible for:

* routing,
* logical addressing,
* path selection.

---

# Main Functions

* IP addressing
* Routing packets
* Packet forwarding

---

# Protocol Examples

* IPv4
* IPv6
* ICMP

---

# Devices

Routers mainly operate here.

---

# Real Example

When packets travel:

* from India to US server,
  routers decide:

> best path to destination.

---

# Layer 2 — Data Link Layer

Responsible for:

* local network communication,
* MAC addressing,
* framing,
* error detection.

---

# Functions

* Add MAC addresses
* Frame data
* Error checking (CRC)

---

# Protocol Examples

* Ethernet
* ARP
* PPP

---

# Devices

* Switches
* Bridges

---

# Important Understanding

Layer 2 works mainly:

> inside same local network (LAN).

---

# Layer 1 — Physical Layer

Lowest layer.

Responsible for:

* actual signal transmission.

---

# Examples

* Ethernet cables
* Fiber optics
* WiFi signals
* Bluetooth
* Electrical signals

---

# Devices

* Hubs
* Repeaters
* Modems

---

# Important Understanding

This layer handles:

* bits,
* voltage,
* radio waves,
* light signals.

---

# Data Encapsulation

As data moves down OSI layers:

* each layer adds its own information.

This is called:

# Encapsulation

---

# Simplified Flow

```text id="77b9e8"
Application Data
      ↓
TCP/UDP Segment
      ↓
IP Packet
      ↓
Ethernet Frame
      ↓
Bits/Signals
```

---

# SSH (Secure Shell)

# SSH = Secure Shell

SSH allows:

> secure remote terminal access.

Uses:

* encrypted communication,
* TCP,
* default port 22.

---

# Why SSH Exists

Earlier protocols like:

* Telnet
* FTP

were insecure.

Passwords/data traveled in plain text.

SSH solved this using encryption.

---

# SSH Workflow

```text id="prz4c3"
Client Computer
       ↓
Encrypted SSH Connection
       ↓
Remote Server
```

---

# Check SSH Version

```bash id="3gk5wr"
ssh -V
```

---

# Check SSH Packages

```bash id="ptzv6u"
dpkg -l | grep openssh-client
```

```bash id="t2gfqm"
dpkg -l | grep openssh-server
```

---

# Install SSH Server

```bash id="bblgjr"
sudo apt update
sudo apt install openssh-server
```

---

# Allow SSH Through Firewall

```bash id="4v0f1u"
sudo ufw allow ssh
```

---

# Check SSH Service Status

```bash id="gzm0qq"
sudo systemctl status ssh
```

---

# Useful Commands

## Get IP Address

```bash id="ff9mhu"
hostname -I
```

---

## Get Username

```bash id="y9sclj"
whoami
```

---

# Connect To Remote System

Syntax:

```bash id="ryihor"
ssh username@ip_address
```

Example:

```bash id="lmejlwm"
ssh aviral@192.168.1.9
```

---

# SCP (Secure Copy Protocol)

# SCP = Secure Copy Protocol

Used for:

* secure file transfer over SSH.

Encrypted automatically using SSH.

---

# SCP Syntax

```bash id="8y1n7m"
scp [source] [destination]
```

---

# Local → Remote Transfer

```bash id="2qrxv2"
scp myfile.txt aviral@192.168.1.9:/home/aviral/Documents/
```

---

# Remote → Local Transfer

```bash id="m0wfg6"
scp aviral@192.168.1.9:/home/aviral/report.pdf ./Downloads/
```

---

# Transfer Entire Folder

```bash id="9wg0lj"
scp -r ./myProject aviral@192.168.1.9:/home/aviral/
```

---

# SCP vs FTP

| FTP          | SCP                    |
| ------------ | ---------------------- |
| Unencrypted  | Encrypted              |
| Less secure  | More secure            |
| Old protocol | Modern secure transfer |

---

# SCP vs SFTP

| SCP                    | SFTP                 |
| ---------------------- | -------------------- |
| Simple direct transfer | Interactive browsing |
| Faster/simple          | More flexible        |

---

# SSH Key Authentication

Instead of passwords:
SSH can use key pairs.

Much more secure.

---

# SSH Key Pair

## Public Key

Stored on:

* server.

---

## Private Key

Stored on:

* local machine.

Never share private key.

---

# Generate SSH Keys

```bash id="z0fgw7"
ssh-keygen
```

Creates:

* `id_rsa`
* `id_rsa.pub`

---

# Copy Public Key To Server

```bash id="eq6otx"
ssh-copy-id user@server
```

---

# Authentication Flow

```text id="5h88z5"
Server
   ↓
Encrypts challenge using Public Key
   ↓
Client decrypts using Private Key
   ↓
Identity Verified
```

---

# Benefits of SSH Keys

* More secure
* No repeated passwords
* Harder to brute-force
* Better for servers

---

# SSH Config File

Location:

```text id="jl4ts5"
~/.ssh/config
```

Used to:

* create shortcuts for multiple servers.

---

# Example Config

```text id="n64cf9"
Host aws-server
   HostName 65.2.122.85
   User ubuntu
   IdentityFile ~/.ssh/aws-key
```

---

# Without Config File

```bash id="2v5mtm"
ssh -i ~/.ssh/aws-key ubuntu@65.2.122.85
```

---

# With Config File

```bash id="9q5p80"
ssh aws-server
```

Much easier for managing servers.

---

# Biggest Understanding

Modern networking works because of:

* layered communication,
* routing,
* protocols,
* encryption,
* ports,
* sessions,
* packet handling.

The internet is basically:

> billions of devices exchanging packets through structured networking layers and protocols.
