export type UserRole = "OWNER" | "ADMIN" | "MODERATOR" | "MEMBER";
export type UserStatus = "ACTIVE" | "SUSPENDED" | "BANNED" | "DELETED";
export type PresenceStatus = "ONLINE" | "AWAY" | "OFFLINE";
export type MessageType =
  | "TEXT"
  | "IMAGE"
  | "VIDEO"
  | "FILE"
  | "AUDIO"
  | "VOICE"
  | "GIF"
  | "SYSTEM";

export interface Profile {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  bio?: string;
  avatarUrl?: string;
  onlineStatus: PresenceStatus;
  lastSeen?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content?: string;
  messageType: MessageType;
  replyToId?: string;
  attachmentId?: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
  edited: boolean;
}

export interface Community {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  ownerId: string;
}

export interface Channel {
  id: string;
  communityId: string;
  name: string;
  type: "TEXT" | "ANNOUNCEMENT" | "VOICE";
  isPrivate?: boolean;
  createdAt: string;
}
