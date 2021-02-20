export interface YouTubeResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: Item[];
  pageInfo: PageInfo;
}

export interface Item {
  kind: ItemKind;
  etag: string;
  id: string;
  snippet: Video;
}

export enum ItemKind {
  YoutubePlaylistItem = 'youtube#playlistItem',
}

export interface Video {
  publishedAt: Date;
  channelId: ChannelID;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: ChannelTitle;
  playlistId: PlaylistID;
  position: number;
  resourceId: ResourceID;
  videoOwnerChannelTitle: ChannelTitle;
  videoOwnerChannelId: ChannelID;
}

export enum ChannelID {
  UCZaF5BLUS5XRsXDCNH8JFeg = 'UCZaF5bLUS5XRsXDCnH8jFeg',
}

export enum ChannelTitle {
  LennyTavarez = 'Lenny Tavarez',
}

export enum PlaylistID {
  UUZaF5BLUS5XRsXDCNH8JFeg = 'UUZaF5bLUS5XRsXDCnH8jFeg',
}

export interface ResourceID {
  kind: ResourceIDKind;
  videoId: string;
}

export enum ResourceIDKind {
  YoutubeVideo = 'youtube#video',
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
