# Networking Fundamentals & History of the Internet

## What is a Network?

When two or more devices are connected so they can share information with each other, it is called a **network**.

Examples:

* Two computers connected through a cable
* Mobile phones connected through WiFi
* Computers connected through the internet

The devices connected in a network are called **nodes**.

---

# Networking Devices

Some common networking devices:

| Device | Purpose                                        |
| ------ | ---------------------------------------------- |
| Hub    | Broadcasts data to all connected devices       |
| Switch | Sends data only to the correct device          |
| Router | Connects different networks together           |
| Modem  | Converts signals between ISP and local network |

---

# Early Computers

In the beginning:

* Computers were extremely large
* Occupied entire rooms
* Consumed huge amounts of electricity
* Mainly used for calculations

At that time:

* Computers could store and process data
* But they could not easily share data with other computers

---

# Telephone System Before the Internet

Before computer networking existed, humans already had long-distance communication systems through telephones.

Alexander Graham Bell invented the telephone system.

Telephone networks originally carried:

* Human voice
* Analog signals

Later engineers realized:

> If voice can travel through wires, maybe computer data can too.

This idea became the foundation for computer networking over telephone lines.

---

# Birth of Computer Networking

Research organizations and universities started using computers to store research data.

Problem:

* Sharing data between universities was difficult
* Researchers had to physically send storage devices like tapes or floppy disks

Researchers funded by:
DARPA

started experimenting with sending computer data through telephone lines.

This led to one of the first computer networks:

ARPANET

---

# Need for Protocols

Once computers started communicating, they needed common rules.

Questions arose like:

* Which data should go first?
* How should data be formatted?
* How should errors be handled?

These communication rules are called:

## Protocols

One early protocol was:

* NCP (Network Control Protocol)

Later, better protocols were developed.

---

# The Famous "LO" Message

The first intended message sent over ARPANET was:

```text
LOGIN
```

But the system crashed after sending:

```text
LO
```

So the first message in internet history became:

```text
LO
```

---

# TCP/IP - The Foundation of the Internet

As more networks were created, a huge problem appeared:

> Different networks used different communication methods.

So networks could not communicate with each other properly.

To solve this problem, a universal communication standard was created:

# TCP/IP

TCP/IP allowed:

* Different networks
* Different computers
* Different countries

to communicate using common rules.

This transformed isolated networks into:

> A network of networks

which later became the modern internet.

---

# Important Protocols

Different protocols were developed for different purposes.

| Protocol | Purpose                     |
| -------- | --------------------------- |
| TCP/IP   | Core internet communication |
| HTTP     | Loading websites            |
| HTTPS    | Secure websites             |
| SMTP     | Sending emails              |
| FTP      | File transfer               |

---

# Expansion of the Internet

Over time:

* Networks expanded nationally and internationally
* Fiber optic cables were laid under oceans
* Countries became interconnected

Today, submarine fiber optic cables connect most of the world.

---

# IP Addresses

Every device connected to a network needs a unique identity.

This identity is called an:

# IP Address

Example:

```text
192.168.1.1
```

---

# IPv4

The older and most common IP system is:

# IPv4

Format:

```text
0.0.0.0 → 255.255.255.255
```

IPv4 provides around:

```text
4 billion addresses
```

---

# Problem with IP Addresses

Humans cannot easily remember numbers like:

```text
142.250.183.78
```

So an easier naming system was needed.

---

# Before DNS - HOSTS.TXT

Initially, there was a manually maintained file called:

```text
HOSTS.TXT
```

This file mapped:

* Domain names
* To IP addresses

Example:

```text
ford.com → 142.x.x.x
```

Elizabeth Feinler and her team helped maintain this system.

But as the internet grew:

* Manual updates became impossible
* The system stopped scaling efficiently

---

# DNS - Domain Name System

To automate the process, DNS was invented.

# DNS (Domain Name System)

DNS works like the internet's phonebook.

Example:

* User types:

```text
google.com
```

DNS converts it into:

* An IP address

Then the computer connects to the correct server.

---

# Domain Extensions

Some common domain extensions:

| Domain | Meaning      |
| ------ | ------------ |
| .com   | Commercial   |
| .org   | Organization |
| .edu   | Education    |
| .gov   | Government   |

---

# Internet vs World Wide Web

Many beginners think both are the same, but they are different.

| Internet                        | World Wide Web              |
| ------------------------------- | --------------------------- |
| Infrastructure/network          | Service running on internet |
| Physical + communication system | Websites and webpages       |
| Existing before websites        | Built on top of internet    |

The web is only one part of the internet.

---

# Tim Berners-Lee and the Web

Tim Berners-Lee revolutionized the internet by making it easy for normal people to use.

He created:

* The World Wide Web (WWW)
* HTML
* HTTP
* URLs
* The first web browser

Before browsers:

* Internet usage mainly happened through terminals and commands

Browsers introduced:

* Clickable links
* Visual pages
* User-friendly navigation

---

# HTML

# HTML (HyperText Markup Language)

A markup language used to structure webpages.

Example:

* Headings
* Paragraphs
* Images
* Links

---

# HTTP and HTTPS

## HTTP

Used for communication between:

* Browser
* Web server

## HTTPS

A secure version of HTTP using encryption.

HTTPS runs on top of:

* TCP/IP

---

# JavaScript

Initially websites were static.

Later:

* JavaScript added interactivity

Examples:

* Buttons
* Animations
* Dynamic updates
* Interactive applications

---

# Types of Networks

## LAN (Local Area Network)

Small local network.

Examples:

* Home WiFi
* School lab
* Office network

Range:

* Usually within a building or nearby area

---

## MAN (Metropolitan Area Network)

City-level network.

Examples:

* Mobile tower systems
* Large city infrastructure

---

## WAN (Wide Area Network)

Large geographical network.

Examples:

* International company networks
* The Internet

The internet itself is the largest WAN.

---

# Simplified Internet Layer Understanding

## Layer 1 — Physical Communication

How signals travel:

* Copper wire
* Fiber optics
* WiFi
* Radio waves

---

## Layer 2 — Device Communication

Devices involved:

* Switches
* Routers
* Modems

---

## Layer 3 — Addressing

How devices are identified:

* IP addresses
* MAC addresses

---

## Layer 4 — Protocols

Rules of communication:

* TCP
* IP
* HTTP
* HTTPS
* SMTP
* FTP

---

## Layer 5 — Human Usage

Making internet easy for humans:

* DNS
* Browsers
* Websites
* Apps

---

# Core Idea to Remember

Networking evolved because humans kept solving communication problems.

| Problem                       | Solution     |
| ----------------------------- | ------------ |
| Computers isolated            | Networking   |
| Different communication rules | TCP/IP       |
| Hard-to-remember IPs          | DNS          |
| Difficult terminal usage      | Browsers     |
| Static websites               | JavaScript   |
| Slow communication limits     | Fiber optics |

---

# Final Understanding

The internet is not a single machine.

It is:

> A massive interconnected system of networks communicating through agreed rules called protocols.
