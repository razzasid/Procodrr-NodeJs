# What is Network Topology?

# Network Topology = Structure of a Network

Network topology defines:

* how devices are arranged,
* how devices connect,
* how data travels between devices.

It describes:

> the physical or logical layout of a network.

---

# Why Network Topology Matters

Topology affects:

* speed,
* reliability,
* scalability,
* maintenance cost,
* fault tolerance.

Different topologies are used for different use cases.

---

# Main Types of Network Topologies

1. Point-to-Point
2. Bus
3. Ring
4. Star
5. Mesh
6. Tree
7. Hybrid

---

# 1. Point-to-Point Topology

# Definition

Direct connection between:

* only 2 devices.

---

# Structure

```text id="d8ps9y"
Device A  ↔  Device B
```

---

# Features

* Simple
* Fast
* Direct communication
* Easy to configure

---

# Example

* PC ↔ Printer
* Computer ↔ Router
* Bluetooth file transfer between two devices

---

# Advantages

* Low latency
* Simple setup
* Secure direct communication

---

# Disadvantages

* Only supports 2 devices
* Not scalable

---

# 2. Bus Topology

# Definition

All devices connect to:

> one central backbone cable.

---

# Structure

```text id="1z7mra"
PC ─ PC ─ PC ─ PC
      |
   Main Cable
```

---

# Features

* Single shared communication cable
* Devices share same transmission medium

---

# Example

Old Ethernet networks.

---

# Advantages

* Cheap
* Less cable required
* Simple for small networks

---

# Disadvantages

* Backbone cable failure → entire network fails
* Performance decreases with more devices
* Difficult troubleshooting

---

# Important Term — Terminator

Bus topology usually uses:

# Terminators

at cable ends to:

* absorb signals,
* prevent signal reflection.

---

# 3. Ring Topology

# Definition

Each device connects to:

* two neighboring devices,
  forming a circular path.

---

# Structure

```text id="u3c0v2"
PC → PC → PC → PC
↑               ↓
← ← ← ← ← ← ← ←
```

---

# Features

* Data travels in ring
* Can be:

  * uni-directional
  * bi-directional

---

# Advantages

* Organized communication
* Predictable data flow
* Less collision

---

# Disadvantages

* One broken link can disrupt network
* Harder maintenance
* Adding/removing devices difficult

---

# Token Ring Concept

Some ring networks use:

# Token Passing

Only device holding token can transmit data.

Helps avoid:

* collisions,
* simultaneous transmission conflicts.

---

# 4. Star Topology

# Definition

All devices connect to:

> one central hub or switch.

---

# Structure

```text id="9t2jlwm"
        Switch
       /  |  \
     PC  PC  PC
```

---

# Most Common Modern Topology

Most:

* home WiFi,
* office LAN,
* Ethernet networks

use Star topology.

---

# Advantages

* Easy troubleshooting
* One device failure does not affect others
* Scalable
* Better performance

---

# Disadvantages

* Central switch failure → entire network fails
* Requires more cables

---

# Hub vs Switch

## Hub

* Broadcasts data to all devices
* Less intelligent
* Older technology

---

## Switch

* Sends data only to intended device
* Uses MAC addresses
* Faster and more efficient

Modern networks mainly use:

# Switches

---

# 5. Mesh Topology

# Definition

Every device connects to:

> every other device.

---

# Structure

```text id="jlwm7w"
All devices interconnected
```

---

# Types

## Full Mesh

Every node connected to every node.

---

## Partial Mesh

Only important nodes fully connected.

---

# Advantages

* Extremely reliable
* Multiple backup paths
* Fault tolerant

---

# Disadvantages

* Very expensive
* Complex setup
* Large cable requirement

---

# Example Uses

* Military networks
* Data centers
* Internet backbone systems

---

# Internet Is Partially Mesh-Like

The internet itself behaves somewhat like:

# Partial Mesh Topology

because:

* many routers,
* ISPs,
* backbone providers

have multiple interconnected paths.

---

# 6. Tree Topology

# Definition

Hierarchical structure made using:

* multiple Star networks
  connected to:
* backbone network.

---

# Structure

```text id="7sx4dy"
        Core Switch
          /   \
      Switch  Switch
      /  \      /  \
    PCs PCs   PCs PCs
```

---

# Features

* Hierarchical
* Scalable
* Structured organization

---

# Advantages

* Easy expansion
* Good for large organizations
* Structured management

---

# Disadvantages

* Backbone failure affects many networks
* More complex than star

---

# Example Uses

* Universities
* Large offices
* Enterprise networks

---

# 7. Hybrid Topology

# Definition

Combination of:

* two or more topologies.

---

# Examples

* Star + Mesh
* Star + Ring
* Tree + Star

---

# Advantages

* Flexible
* Customizable
* Optimized for specific use cases

---

# Disadvantages

* Expensive
* Complex management
* Harder troubleshooting

---

# Physical vs Logical Topology

# Physical Topology

Actual hardware layout:

* cables,
* devices,
* physical connections.

---

# Logical Topology

How data logically flows inside network.

Example:

* physically star,
* logically bus.

---

# Wireless Networks & Topology

WiFi networks usually behave like:

# Star Topology

because:

* all devices connect to central access point/router.

---

# Topology Comparison

| Topology       | Cost      | Reliability | Scalability |
| -------------- | --------- | ----------- | ----------- |
| Point-to-Point | Low       | High        | Very Low    |
| Bus            | Low       | Low         | Low         |
| Ring           | Medium    | Medium      | Medium      |
| Star           | Medium    | High        | High        |
| Mesh           | Very High | Very High   | Medium      |
| Tree           | High      | High        | Very High   |
| Hybrid         | Depends   | High        | High        |

---

# Biggest Understanding

Network topology defines:

* how devices connect,
* how communication happens,
* how failures affect networks.

Modern internet infrastructure uses:

* combinations of multiple topologies,
* especially Star, Tree, and Partial Mesh systems.

The internet itself is basically:

> a giant interconnected network of networks using different topology designs together.
