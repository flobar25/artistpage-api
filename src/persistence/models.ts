interface Artist {
  id: string;
  name: string;
  entries: Entry[];
}

interface Entry {
  id: string;
  name: string;
  url: string;
  type: EntryType;
}

enum EntryType {
  LINK
}
