### 📦 hk-words-counter

A powerful yet simple command-line tool for text analysis that:

- Counts total words in a file
- Tracks frequency of each word
- Allows searching for specific word counts
- Supports multiple file formats
- Provides clean, readable output

### Features

- **Word Frequency Analysis**: Counts how often each word appears
- **Targeted Search**: Find counts for specific words
- **Fast Processing**: Handles large files efficiently
- **Simple Interface**: Easy-to-use command line syntax

---

#### Usage section for `hk-words-counter`

##### 🔧 Installation

```bash
npm install -g hk-words-counter
```

##### 🚀 Usage

To count the total number of words along with the frequency of all words in a file:

```bash
hk-words-counter <filepath>
```

**Example:**

```bash
hk-words-counter ./docs/file.txt
```

To count a specific word’s frequency:

```bash
hk-words-counter <filepath> <word>
```

**Example:**

```bash
hk-words-counter ./docs/file.txt hello
```
