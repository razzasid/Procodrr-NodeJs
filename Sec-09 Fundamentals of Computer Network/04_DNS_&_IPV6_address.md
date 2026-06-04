# What is DNS?

# DNS = Domain Name System

DNS is like the internet’s phonebook.

Humans prefer names like:

```text id="4y1sfo"
google.com
```

But computers communicate using IP addresses like:

```text id="0wk4np"
142.250.182.14
```

DNS translates:

* domain names
  into
* IP addresses.

---

# Why DNS Exists

Imagine remembering IP addresses for every website:

```text id="gm58xv"
142.250.182.14
104.18.x.x
172.x.x.x
```

Impossible.

DNS makes the internet human-friendly.

---

# Domain Hierarchy

Domains are organized in levels.

Example:

```text id="m7z8fc"
www.google.com
```

Breakdown:

| Part     | Meaning                |
| -------- | ---------------------- |
| `.`      | Root Level Domain      |
| `.com`   | Top-Level Domain (TLD) |
| `google` | Second-Level Domain    |
| `www`    | Subdomain              |

---

# Root Level Domain (RLD)

Represented by:

```text id="lwd59q"
.
```

This is:

* the highest level in DNS hierarchy.

Managed by:

ICANN

Root level contains:

* all Top-Level Domains.

Example:

```text id="v3y8qo"
www.google.com.
```

(The final dot is usually hidden by browsers.)

---

# Top-Level Domains (TLD)

Examples:

```text id="jkfwdq"
.com
.org
.net
.gov
.in
```

TLDs are managed by organizations.

Examples:

* `.com` → Verisign
* `.org` → Public Interest Registry

These organizations allow domain registrations under their TLD.

---

# Second-Level Domain (SLD)

Example:

```text id="eqx0sn"
google
```

in:

```text id="q0e53u"
google.com
```

This is the main domain name people register.

Bought through domain registrars like:

* GoDaddy
* Namecheap
* Hostinger

---

# Subdomain

Example:

```text id="o9e77e"
www
```

in:

```text id="t11ek7"
www.google.com
```

Subdomains are created under a main domain.

Can have multiple levels:

```text id="jlwm4y"
mail.support.google.com
```

---

# Domain Rules

## Maximum Domain Length

```text id="w3gs1r"
255 characters
```

including dots.

---

## Maximum Label Length

Each section between dots can be:

```text id="vk8mbu"
63 characters
```

maximum.

---

# DNS Lookup Flow

You can test DNS using:

```bash id="qzll0m"
nslookup google.com
```

This asks DNS servers:

> “What is the IP address of this domain?”

---

# How DNS Resolution Works

Suppose user types:

```text id="fhpb3e"
google.com
```

inside browser.

---

# Step 1 — Browser Cache

Browser first checks:

> “Do I already know this IP?”

If cached:

* instant response.

---

# Step 2 — OS Cache

If browser doesn't know:
Operating System checks DNS cache.

Examples:

* Windows
* Linux
* Android

all maintain local DNS cache.

---

# Step 3 — DNS Resolver

If still unknown:
request goes to DNS resolver.

Examples:

| DNS Resolver | Company    |
| ------------ | ---------- |
| `1.1.1.1`    | Cloudflare |
| `8.8.8.8`    | Google     |

Resolver checks:

* its own cache first.

---

# Step 4 — Root DNS Server

If resolver does not know answer:
it asks Root DNS Server.

Root server replies:

> “Ask the `.com` server.”

---

# Step 5 — TLD Server

Resolver asks `.com` server:

> “Who handles google.com?”

TLD server replies:

> “Ask Google's authoritative DNS server.”

---

# Step 6 — Authoritative Name Server

This server stores actual DNS records for domain.

It returns:

* real IP address.

Example:

```text id="18dxvu"
142.250.x.x
```

---

# Step 7 — Browser Connects to Website

Now browser can connect to actual web server using IP address.

Website loads successfully.

---

# Full DNS Flow

```text id="paz6yn"
Browser
   ↓
Browser Cache
   ↓
OS Cache
   ↓
DNS Resolver
   ↓
Root DNS Server
   ↓
TLD Server
   ↓
Authoritative DNS Server
   ↓
IP Address Found
```

---

# What is a Name Server?

A Name Server is a DNS server that stores DNS records.

Examples:

* A records
* AAAA records
* MX records
* TXT records

Authoritative Name Servers are:

> final source of truth for a domain.

---

# Common DNS Record Types

| Record Type | Purpose                          |
| ----------- | -------------------------------- |
| A           | Maps domain → IPv4               |
| AAAA        | Maps domain → IPv6               |
| CNAME       | Alias from one domain to another |
| MX          | Mail server records              |
| TXT         | Verification & security records  |

---

# TTL (Time To Live)

TTL tells:

> how long DNS records can stay cached.

Example:

```text id="sp01zi"
300 seconds
```

means:

* cache valid for 5 minutes.

---

# Short TTL

Benefits:

* faster DNS updates.

Drawback:

* more DNS traffic.

---

# Long TTL

Benefits:

* better performance,
* less DNS traffic.

Drawback:

* DNS changes take longer to update globally.

---

# IPv6 Address

# IPv6 = Internet Protocol Version 6

IPv6 was created because IPv4 addresses were running out.

IPv6 uses:

128\text{ bits}

compared to IPv4:

32\text{ bits}

---

# IPv6 Format

IPv6 contains:

* 8 groups,
* hexadecimal values,
* separated using colons.

Example:

```text id="a5mrpk"
2001:0db8:0000:0000:0000:ff00:0042:8329
```

---

# IPv6 Simplification Rules

## Leading Zeros Can Be Removed

Example:

```text id="ttrg3y"
0db8 → db8
```

---

## Consecutive Zeros Can Become ::

Example:

```text id="ct8fzz"
2001:db8::ff00:42:8329
```

Important:

* `::` can only be used once.

---

# Entire Zero Address

```text id="t5ecp4"
::
```

means:

* all address groups are zero.

---

# Types of IPv6 Addresses

## Global Unicast Address (GUA)

Public internet-routable IPv6 address.

Usually starts with:

```text id="tqls38"
2xxx
3xxx
```

---

## Temporary IPv6 Address

Randomized address used for:

* privacy protection.

Changes over time.

---

## Link-Local Address

Used only inside local network.

Always starts with:

```text id="o5pmv2"
fe80::
```

---

# Using IPv6 in Browser

IPv6 addresses must use square brackets:

Example:

```text id="d7zy3w"
http://[2001:db8::1]/
```

---

# IPv4 vs IPv6 Compatibility

If IPv4 is disabled:

* only IPv6-supported websites work.

Problem:

* many websites still rely partly on IPv4.

That’s why both systems currently coexist.

---

# Biggest Understanding

DNS makes the internet human-friendly.

IPv6 solves internet scalability problems.

Without:

* DNS,
* IP addressing,
* DNS hierarchy,
* resolvers,
* authoritative servers,

the modern internet would become impossible to manage.
