interface GoodItemType {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface NavItemType {
  id: number;
  title: string;
  url: string;
}

interface Category {
  id: string;
  name: string;
  channel: any;
}

interface Channel {
  etag: string;
  kind: string;
  id: {
    channelId: string;
    kind: string;
  };
  snippet: any;
}

interface Content {
  id: string;
  name: string;
  video: Video[];
}

interface Video {
  etag: string;
  items: any[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  regionCode: string;
}
