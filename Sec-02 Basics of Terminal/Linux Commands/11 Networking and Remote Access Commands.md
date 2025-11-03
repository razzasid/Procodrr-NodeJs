In Linux, **Networking Commands** are used to configure, troubleshoot, and manage network connections. These commands are essential for system administrators and users who need to interact with network interfaces, diagnose connectivity issues, and monitor network activity. Below is a detailed explanation of the most commonly used networking commands in Linux, along with examples:

---

## **1. Basic Networking Commands**

#### **`ping` Command**

The `ping` command is used to test connectivity between your system and a remote host.

##### **Syntax**

```
ping [options] [hostname_or_IP_address]
```

##### **Examples**

1. **Ping a Website**:

   ```
   ping google.com
   ```

2. **Ping a Specific Number of Times**:

   ```
   ping -c 5 google.com
   ```

3. **Ping Continuously**:

   ```
   ping google.com
   ```

   - Press `Ctrl + C` to stop.

4. **Ping with a Specific Packet Size**:
   ```
   ping -s 1000 google.com
   ```

---

#### **`ifconfig` Command**

The `ifconfig` command is used to configure and display network interfaces.

##### **Syntax**

```
ifconfig [interface] [options]
```

##### **Examples**

1. **Display All Network Interfaces**:

   ```
   ifconfig
   ```

2. **Display a Specific Network Interface**:

   ```
   ifconfig eth0
   ```

3. **Enable a Network Interface**:

   ```
   ifconfig eth0 up
   ```

4. **Disable a Network Interface**:

   ```
   ifconfig eth0 down
   ```

5. **Assign an IP Address to an Interface**:
   ```
   ifconfig eth0 192.168.1.100
   ```

---

#### **`ip` Command**

The `ip` command is a more modern and powerful alternative to `ifconfig`.

##### **Syntax**

```
ip [options] [object] [command]
```

##### **Examples**

1. **Display All Network Interfaces**:

   ```
   ip addr show
   ```

2. **Display a Specific Network Interface**:

   ```
   ip addr show eth0
   ```

3. **Assign an IP Address to an Interface**:

   ```
   ip addr add 192.168.1.100/24 dev eth0
   ```

4. **Delete an IP Address from an Interface**:

   ```
   ip addr del 192.168.1.100/24 dev eth0
   ```

5. **Bring an Interface Up**:

   ```
   ip link set eth0 up
   ```

6. **Bring an Interface Down**:
   ```
   ip link set eth0 down
   ```

---

## **2. Network Troubleshooting Commands**

#### **`traceroute` Command**

The `traceroute` command is used to trace the path packets take to reach a destination.

##### **Syntax**

```
traceroute [hostname_or_IP_address]
```

##### **Examples**

1. **Trace Route to a Website**:

   ```
   traceroute google.com
   ```

2. **Trace Route with a Specific Number of Hops**:
   ```
   traceroute -m 10 google.com
   ```

---

#### **`mtr` Command**

The `mtr` (My Traceroute) command combines the functionality of `ping` and `traceroute`.

##### **Syntax**

```
mtr [hostname_or_IP_address]
```

##### **Examples**

1. **Run `mtr` to a Website**:

   ```
   mtr google.com
   ```

2. **Run `mtr` with a Specific Number of Pings**:
   ```
   mtr -c 10 google.com
   ```

---

#### **`netstat` Command**

The `netstat` command is used to display network connections, routing tables, and interface statistics.

##### **Syntax**

```
netstat [options]
```

##### **Examples**

1. **Display All Active Connections**:

   ```
   netstat -a
   ```

2. **Display Listening Ports**:

   ```
   netstat -l
   ```

3. **Display Routing Table**:

   ```
   netstat -r
   ```

4. **Display Statistics by Protocol**:

   ```
   netstat -s
   ```

5. **Display Connections with Process IDs**:
   ```
   netstat -p
   ```

---

#### **`telnet` Command**

The `telnet` command is used to connect to remote systems using the Telnet protocol (unencrypted).

#### Syntax:

```bash
telnet <hostname_or_IP> [port]
```

#### Example:

```bash
telnet 192.168.1.10 22
```

This connects to port 22 (SSH) on the remote system.

---

#### **`rsync` Command**

The `rsync` command is used to synchronize files and directories between two locations, either locally or over a network.

#### Syntax:

```bash
rsync [options] <source> <destination>
```

#### Example:

```bash
rsync -avz /local/dir/ user@192.168.1.10:/remote/dir/
```

This synchronizes the local directory with the remote directory.

---

#### **`nc` (Netcat) Command**

The `nc` command is a versatile networking tool used for reading from and writing to network connections.

#### Syntax:

```bash
nc [options] <hostname_or_IP> <port>
```

#### Example:

- Open a TCP connection:
  ```bash
  nc 192.168.1.10 22
  ```
- Listen on a port:
  ```bash
  nc -l 1234
  ```

---

#### **`ss` Command**

The `ss` command is a modern replacement for `netstat` and is used to display socket statistics.

##### **Syntax**

```
ss [options]
```

##### **Examples**

1. **Display All Sockets**:

   ```
   ss -a
   ```

2. **Display Listening Sockets**:

   ```
   ss -l
   ```

3. **Display TCP Connections**:

   ```
   ss -t
   ```

4. **Display UDP Connections**:
   ```
   ss -u
   ```

---

## **3. DNS and Hostname Commands**

#### **`nslookup` Command**

The `nslookup` command is used to query DNS servers.

##### **Syntax**

```
nslookup [hostname_or_IP_address]
```

##### **Examples**

1. **Resolve a Domain Name to an IP Address**:

   ```
   nslookup google.com
   ```

2. **Resolve an IP Address to a Domain Name**:
   ```
   nslookup 8.8.8.8
   ```

---

#### **`dig` Command**

The `dig` (Domain Information Groper) command is used to query DNS servers for detailed information.

##### **Syntax**

```
dig [options] [hostname_or_IP_address]
```

##### **Examples**

1. **Query DNS for a Domain Name**:

   ```
   dig google.com
   ```

2. **Query a Specific DNS Server**:

   ```
   dig @8.8.8.8 google.com
   ```

3. **Query for a Specific Record Type**:

   ```
   dig google.com MX
   ```

4. **`whois` Command**

The `whois` command is used to query domain registration information.

#### Syntax:

```bash
whois <domain_name>
```

#### Example:

```bash
whois example.com
```

---

#### **`hostname` Command**

The `hostname` command is used to display or set the system's hostname.

##### **Syntax**

```
hostname [options]
```

##### **Examples**

1. **Display the Hostname**:

   ```
   hostname
   ```

2. **Set the Hostname**:
   ```
   hostname newhostname
   ```

---

## **4. Network Configuration Commands**

#### **`nmcli` Command**

The `nmcli` command is used to manage NetworkManager.

##### **Syntax**

```
nmcli [options] [command]
```

##### **Examples**

1. **Display Network Connections**:

   ```
   nmcli connection show
   ```

2. **Activate a Network Connection**:

   ```
   nmcli connection up eth0
   ```

3. **Deactivate a Network Connection**:

   ```
   nmcli connection down eth0
   ```

4. **Add a New Network Connection**:
   ```
   nmcli connection add type ethernet ifname eth0 con-name my-eth0
   ```

---

#### **`route` Command**

The `route` command is used to display and manipulate the IP routing table.

##### **Syntax**

```
route [options]
```

##### **Examples**

1. **Display the Routing Table**:

   ```
   route -n
   ```

2. **Add a Route**:

   ```
   route add -net 192.168.2.0 netmask 255.255.255.0 gw 192.168.1.1
   ```

3. **Delete a Route**:
   ```
   route del -net 192.168.2.0 netmask 255.255.255.0
   ```

---

## **5. Advanced Networking Commands**

#### **`tcpdump` Command**

The `tcpdump` command is used to capture and analyze network traffic.

##### **Syntax**

```
tcpdump [options]
```

##### **Examples**

1. **Capture Traffic on a Specific Interface**:

   ```
   tcpdump -i eth0
   ```

2. **Capture Traffic for a Specific Protocol**:

   ```
   tcpdump -i eth0 tcp
   ```

3. **Capture Traffic for a Specific Host**:

   ```
   tcpdump -i eth0 host 192.168.1.100
   ```

4. **Save Captured Traffic to a File**:
   ```
   tcpdump -i eth0 -w capture.pcap
   ```

---

#### **`iptables` Command**

The `iptables` command is used to configure firewall rules.

##### **Syntax**

```
iptables [options]
```

##### **Examples**

1. **List All Rules**:

   ```
   iptables -L
   ```

2. **Allow Traffic on a Specific Port**:

   ```
   iptables -A INPUT -p tcp --dport 22 -j ACCEPT
   ```

3. **Block Traffic from a Specific IP Address**:
   ```
   iptables -A INPUT -s 192.168.1.100 -j DROP
   ```

---

## **6. Remote Access Commands**

### **1. `ssh` (Secure Shell)**

The `ssh` command is used to securely access a remote system over an encrypted connection.

#### Syntax:

```bash
ssh [user@]hostname [command]
```

#### Example:

```bash
ssh user@192.168.1.10
```

This connects to the remote system with the IP `192.168.1.10` using the username `user`.

#### Options:

- Specify a port (default is 22):
  ```bash
  ssh -p 2222 user@192.168.1.10
  ```
- Execute a command on the remote system:
  ```bash
  ssh user@192.168.1.10 "ls -l"
  ```

---

### **2. `scp` (Secure Copy)**

The `scp` command is used to securely copy files between local and remote systems over SSH.

#### Syntax:

```bash
scp [options] <source> <destination>
```

#### Examples:

- Copy a file from local to remote:
  ```bash
  scp file.txt user@192.168.1.10:/home/user/
  ```
- Copy a file from remote to local:
  ```bash
  scp user@192.168.1.10:/home/user/file.txt /local/path/
  ```
- Copy a directory recursively:
  ```bash
  scp -r /local/dir user@192.168.1.10:/remote/dir
  ```

---

### **3. `ftp` (File Transfer Protocol)**

The `ftp` command is used to transfer files between systems using the FTP protocol.

#### Syntax:

```bash
ftp [options] <hostname_or_IP>
```

#### Example:

```bash
ftp 192.168.1.10
```

After connecting, you can use commands like `get`, `put`, `ls`, and `cd` to interact with the remote system.

---

### **4. `wget`**

The `wget` command is used to download files from the internet.

#### Syntax:

```bash
wget [options] <URL>
```

#### Example:

```bash
wget https://example.com/file.zip
```

#### Options:

- Download in the background:
  ```bash
  wget -b https://example.com/file.zip
  ```
- Limit download speed:
  ```bash
  wget --limit-rate=100k https://example.com/file.zip
  ```

---

### **5. `curl`**

The `curl` command is used to transfer data to or from a server using various protocols (HTTP, HTTPS, FTP, etc.).

#### Syntax:

```bash
curl [options] <URL>
```

#### Example:

```bash
curl https://example.com
```

#### Options:

- Save output to a file:
  ```bash
  curl -o file.txt https://example.com
  ```
- Follow redirects:
  ```bash
  curl -L https://example.com
  ```

---

### **Summary Table of Networking Commands**

| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `ping google.com`       | Tests connectivity to a remote host.            |
| `ifconfig eth0`         | Displays configuration for a network interface. |
| `ip addr show eth0`     | Displays IP addresses for a network interface.  |
| `traceroute google.com` | Traces the route to a host.                     |
| `mtr google.com`        | Combines `ping` and `traceroute`.               |
| `netstat -a`            | Displays all active connections.                |
| `ss -t`                 | Displays TCP connections.                       |
| `nslookup google.com`   | Queries DNS for a domain name.                  |
| `dig google.com`        | Queries DNS for detailed information.           |
| `hostname`              | Displays or sets the system's hostname.         |
| `nmcli connection show` | Displays network connections.                   |
| `route -n`              | Displays the routing table.                     |
| `tcpdump -i eth0`       | Captures network traffic.                       |
| `iptables -L`           | Lists firewall rules.                           |

---

These commands are essential for managing and troubleshooting network configurations and remote access in Linux. By mastering them, you can efficiently handle networking tasks and securely access remote systems.
