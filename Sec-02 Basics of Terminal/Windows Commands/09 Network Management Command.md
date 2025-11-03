In Windows, **Network Management** commands are used to configure, monitor, and troubleshoot network connections. Below is a detailed explanation of the most commonly used commands, along with examples:

---

### **1. Network Configuration Commands**

#### **`ipconfig` Command**

The `ipconfig` command displays the network configuration details of your computer, including IP address, subnet mask, and default gateway.

##### **Syntax**

```
ipconfig [options]
```

##### **Examples**

1. **Display Basic Network Configuration**:

   ```
   ipconfig
   ```

   Output:

   ```
   Ethernet adapter Ethernet:
      Connection-specific DNS Suffix  . :
      IPv4 Address. . . . . . . . . . . : 192.168.1.100
      Subnet Mask . . . . . . . . . . . : 255.255.255.0
      Default Gateway . . . . . . . . . : 192.168.1.1
   ```

2. **Display Detailed Network Configuration**:

   ```
   ipconfig /all
   ```

3. **Release and Renew IP Address**:

   - Release the current IP address:
     ```
     ipconfig /release
     ```
   - Renew the IP address:
     ```
     ipconfig /renew
     ```

4. **Flush DNS Cache**:
   - Clear the DNS resolver cache:
     ```
     ipconfig /flushdns
     ```

---

#### **`netsh` Command**

The `netsh` (Network Shell) command is a powerful tool for configuring and monitoring network settings.

##### **Syntax**

```
netsh [context] [command]
```

##### **Examples**

1. **Display Network Interfaces**:

   ```
   netsh interface show interface
   ```

2. **Set a Static IP Address**:

   ```
   netsh interface ip set address name="Ethernet" static 192.168.1.100 255.255.255.0 192.168.1.1
   ```

3. **Set DNS Server**:

   ```
   netsh interface ip set dns name="Ethernet" static 8.8.8.8
   ```

4. **Reset TCP/IP Stack**:
   ```
   netsh int ip reset
   ```

---

### **2. Network Troubleshooting Commands**

#### **`ping` Command**

The `ping` command is used to test connectivity between your computer and a remote host.

##### **Syntax**

```
ping [hostname_or_IP_address] [options]
```

##### **Examples**

1. **Ping a Website**:

   ```
   ping www.google.com
   ```

2. **Ping a Specific Number of Times**:

   ```
   ping www.google.com -n 5
   ```

3. **Ping Continuously**:

   ```
   ping www.google.com -t
   ```

4. **Ping with a Specific Packet Size**:
   ```
   ping www.google.com -l 1000
   ```

---

#### **`tracert` Command**

The `tracert` (Trace Route) command is used to trace the path packets take to reach a destination.

##### **Syntax**

```
tracert [hostname_or_IP_address]
```

##### **Examples**

1. **Trace Route to a Website**:

   ```
   tracert www.google.com
   ```

2. **Trace Route with Maximum Hops**:
   ```
   tracert www.google.com -h 10
   ```

---

#### **`pathping` Command**

The `pathping` command combines the functionality of `ping` and `tracert` to provide detailed network path analysis.

##### **Syntax**

```
pathping [hostname_or_IP_address]
```

##### **Examples**

1. **Analyze Network Path**:
   ```
   pathping www.google.com
   ```

---

#### **`netstat` Command**

The `netstat` command displays active network connections, listening ports, and network statistics.

##### **Syntax**

```
netstat [options]
```

##### **Examples**

1. **Display Active Connections**:

   ```
   netstat
   ```

2. **Display Listening Ports**:

   ```
   netstat -an
   ```

3. **Display Statistics by Protocol**:

   ```
   netstat -s
   ```

4. **Display Connections with Process IDs**:
   ```
   netstat -o
   ```

---

### **3. Network Service Management Commands**

#### **`net` Command**

The `net` command is used to manage network services and resources.

##### **Syntax**

```
net [action] [resource]
```

##### **Examples**

1. **Start a Network Service**:

   ```
   net start "DHCP Client"
   ```

2. **Stop a Network Service**:

   ```
   net stop "DHCP Client"
   ```

3. **List All Running Services**:

   ```
   net start
   ```

4. **Map a Network Drive**:

   ```
   net use Z: \\Server\Share
   ```

5. **Disconnect a Network Drive**:
   ```
   net use Z: /delete
   ```

---

#### **`nslookup` Command**

The `nslookup` command is used to query DNS (Domain Name System) to resolve domain names to IP addresses and vice versa.

##### **Syntax**

```
nslookup [hostname_or_IP_address]
```

##### **Examples**

1. **Resolve a Domain Name to an IP Address**:

   ```
   nslookup www.google.com
   ```

2. **Resolve an IP Address to a Domain Name**:

   ```
   nslookup 142.250.72.196
   ```

3. **Query a Specific DNS Server**:
   ```
   nslookup www.google.com 8.8.8.8
   ```

---

### **4. Advanced Network Management Commands**

#### **`route` Command**

The `route` command is used to view and modify the routing table.

##### **Syntax**

```
route [action] [destination] [options]
```

##### **Examples**

1. **Display the Routing Table**:

   ```
   route print
   ```

2. **Add a Route**:

   ```
   route add 10.0.0.0 mask 255.0.0.0 192.168.1.1
   ```

3. **Delete a Route**:
   ```
   route delete 10.0.0.0
   ```

---

#### **`arp` Command**

The `arp` (Address Resolution Protocol) command is used to view and modify the ARP cache.

##### **Syntax**

```
arp [options]
```

##### **Examples**

1. **Display the ARP Cache**:

   ```
   arp -a
   ```

2. **Delete an ARP Entry**:

   ```
   arp -d 192.168.1.1
   ```

3. **Add a Static ARP Entry**:
   ```
   arp -s 192.168.1.2 00-11-22-33-44-55
   ```

---

### **Summary Table of Network Management Commands**

| Command                                         | Description                                      |
| ----------------------------------------------- | ------------------------------------------------ |
| `ipconfig`                                      | Displays basic network configuration.            |
| `ipconfig /all`                                 | Displays detailed network configuration.         |
| `ipconfig /release`                             | Releases the IP address.                         |
| `ipconfig /renew`                               | Renews the IP address.                           |
| `ipconfig /flushdns`                            | Clears the DNS cache.                            |
| `netsh interface show interface`                | Displays network interfaces.                     |
| `netsh interface ip set address`                | Sets a static IP address.                        |
| `netsh interface ip set dns`                    | Sets a DNS server.                               |
| `netsh int ip reset`                            | Resets the TCP/IP stack.                         |
| `ping www.google.com`                           | Tests connectivity to a remote host.             |
| `tracert www.google.com`                        | Traces the route to a host.                      |
| `pathping www.google.com`                       | Analyzes the network path.                       |
| `netstat`                                       | Displays active connections and listening ports. |
| `net start "DHCP Client"`                       | Starts a network service.                        |
| `net stop "DHCP Client"`                        | Stops a network service.                         |
| `net use Z: \\Server\Share`                     | Maps a network drive.                            |
| `nslookup www.google.com`                       | Resolves a domain name to an IP address.         |
| `route print`                                   | Displays the routing table.                      |
| `route add 10.0.0.0 mask 255.0.0.0 192.168.1.1` | Adds a route to the routing table.               |
| `arp -a`                                        | Displays the ARP cache.                          |
| `arp -d 192.168.1.1`                            | Deletes an ARP entry.                            |
| `arp -s 192.168.1.2 00-11-22-33-44-55`          | Adds a static ARP entry.                         |

---

These commands are essential for managing and troubleshooting network connections in Windows. Let me know if you need further clarification! 😊
