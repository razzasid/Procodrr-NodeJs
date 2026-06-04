# Networking Notes — IPv4, Subnetting, NAT & Public Servers

# IPv4 Address Basics

# IPv4 = Internet Protocol Version 4

IPv4 addresses are made using:

```text
32 bits
```

The address is divided into:

* 4 octets,
* each octet = 8 bits.

Example:

```text
192.168.0.1
```

Binary form:

```text
11000000.10101000.00000000.00000001
```

---

# IPv4 Address Range

Minimum:

```text
0.0.0.0
```

Maximum:

```text
255.255.255.255
```

Total possible addresses:

2^{32} \approx 4.3\text{ billion}

Which is around:

* 4.3 billion IPv4 addresses.

---

# Why IPv4 Addresses Started Running Out

The world now has:

* billions of phones,
* laptops,
* routers,
* servers,
* IoT devices.

IPv4 has limited addresses.

So researchers created:

# IPv6

which provides a much larger address space.

---

# Why We Still Use IPv4

Even though IPv4 is limited, we still use it heavily because of:

* Private IP addresses
* NAT
* CGNAT

These technologies allow millions of devices to reuse IP addresses.

---

# What is an IP Address?

# IP = Internet Protocol

An IP address is:

> a unique network identifier assigned to devices connected to a network.

Important distinction:

| Term        | Meaning                          |
| ----------- | -------------------------------- |
| IP Protocol | Rules of communication           |
| IP Address  | Identity/address used in network |

---

# Who Assigns IP Addresses?

## In Local Networks

Router assigns IPs.

Examples:

* Home WiFi
* Office network

---

## In Mobile/Broadband Networks

ISP assigns IPs.

Examples:

* Jio
* Airtel
* BSNL

---

# IPv4 Structure

IPv4 is:

* a 32-bit binary number,
* divided into 4 octets.

Example:

```text
11000000 10101000 00000000 00000001
```

Human-friendly decimal form:

```text
192.168.0.1
```

---

# Reserved Loopback Range

Range:

```text
127.0.0.0 – 127.255.255.255
```

Used for:

* internal device testing,
* localhost communication.

Most famous address:

```text
127.0.0.1
```

called:

# Localhost

---

# Subnet Mask

# Subnet Mask = Divides Network & Host Portion

Example:

```text
IP Address: 192.168.1.10
Subnet Mask: 255.255.255.0
```

Binary form:

```text
11111111.11111111.11111111.00000000
```

Meaning:

* first 24 bits = network,
* last 8 bits = host/devices.

---

# CIDR Notation

# CIDR = Classless Inter-Domain Routing

Short way of writing subnet masks.

Example:

```text
192.168.1.10/24
```

Meaning:

* first 24 bits reserved for network.

Equivalent subnet mask:

```text
255.255.255.0
```

---

# How Many Devices Can Connect in /24?

A /24 network gives:

2^8 = 256

possible addresses.

But:

* 1 address reserved for network,
* 1 address reserved for broadcast.

Usable devices:

```text
254 devices
```

---

# Dynamic IP Address

# DHCP = Dynamic Host Configuration Protocol

DHCP automatically assigns IP addresses.

Usually handled by:

* routers,
* DHCP servers.

---

# Dynamic IP Features

* automatic assignment,
* temporary lease time,
* IP may change later.

Example DHCP range:

```text
192.168.0.100 – 192.168.0.200
```

---

# Static IP Address

Static IP = manually assigned IP.

Benefits:

* fixed address,
* useful for servers,
* useful for printers,
* useful for port forwarding.

---

# Problem with Static IP

If manually assigned IP conflicts with router DHCP range:

* IP conflicts occur,
* devices may disconnect.

Good practice:

| DHCP Range | Static Range |
| ---------- | ------------ |
| 100–200    | 2–99         |

---

# What Happens if DHCP is Disabled?

If DHCP server is disabled:

* router stops assigning IPs automatically.

Then devices must:

* manually configure IP address,
* subnet mask,
* gateway.

Otherwise:

* network communication fails.

---

# Private IP Addresses

Private IPs work only inside local/private networks.

Examples:

* home WiFi,
* office LAN,
* schools,
* ISP internal systems.

They are NOT directly accessible from public internet.

---

# Private IP Ranges

## Class A

```text
10.0.0.0 – 10.255.255.255
```

---

## Class B

```text
172.16.0.0 – 172.31.255.255
```

---

## Class C

```text
192.168.0.0 – 192.168.255.255
```

---

# Public IP Address

Public IP is:

* globally reachable,
* internet accessible.

Used by:

* websites,
* public servers,
* hosting providers.

Example:

* Google server
* YouTube server

---

# Risks of Public IP

Public IPs are exposed to internet.

Possible risks:

* hacking attempts,
* DDoS attacks,
* scanning attacks.

---

# NAT (Network Address Translation)

Before CGNAT:

Usually:

* router had public IP,
* devices inside LAN had private IPs.

Process:

```text
Device → Router → Internet
```

Router:

* replaces private IP with public IP,
* sends request to internet,
* remembers response mapping,
* forwards response back to correct device.

---

# CGNAT (Carrier Grade NAT)

Modern ISPs often use:

# CGNAT

In CGNAT:

* even router may not get real public IP,
* ISP shares one public IP among many customers.

Flow:

```text
Device
   ↓
Home Router (Private IP)
   ↓
ISP Router (Public IP)
   ↓
Internet
```

---

# Why CGNAT Exists

Because IPv4 addresses are limited.

CGNAT allows:

* thousands of users
  to share
* one public IPv4 address.

---

# Public vs Private IP

| Private IP         | Public IP           |
| ------------------ | ------------------- |
| Local network only | Internet accessible |
| Safer              | More exposed        |
| Reusable           | Limited             |
| Free               | Often paid          |

---

# Turning Laptop Into Public Server

Normally local server works only inside LAN.

Example:

```text
192.168.0.5:5500
```

Not accessible globally.

---

# Requirements for Public Server

Need:

* Public IP
* Running server
* Port forwarding

---

# What is a Port?

Port = communication entry point.

Examples:

| Service     | Port             |
| ----------- | ---------------- |
| HTTP        | 80               |
| HTTPS       | 443              |
| Dev Servers | 3000, 5500, 8080 |

---

# Port Forwarding

Router forwards incoming internet requests to local device.

Example:

```text
Public IP:5500
        ↓
Router
        ↓
Laptop:5500
```

Now laptop becomes accessible from internet.

---

# Public Server Flow

```text
Laptop Server
   +
Public IP
   +
Port Forwarding
   =
Publicly Accessible Server
```

---

# Important Security Note

Public server exposes device to internet.

Use:

* firewall,
* strong passwords,
* HTTPS,
* secure software.

---

# Running Multiple Servers

One laptop can run multiple servers using different ports.

Example:

```text
123.45.67.89:3000
123.45.67.89:5500
123.45.67.89:8080
```

Each port acts like:

* separate entry gate.

---

# Problem with Public IP + Port

Example:

```text
123.45.67.89:5500
```

Hard to remember for humans.

Solution:

# DNS (Domain Name System)

DNS maps:

* easy names
  to
* IP addresses.

Example:

```text
mywebsite.com
```

instead of:

```text
123.45.67.89:5500
```

---

# Biggest Understanding

Internet communication works through:

* IP addresses,
* routers,
* ports,
* NAT,
* ISPs,
* DNS,
* subnetting,
* routing rules.

The internet is basically:

> billions of devices communicating using addresses, ports, and agreed networking rules.
