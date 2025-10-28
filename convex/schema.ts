import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  earlyAccess: defineTable({
    email: v.string(),
    imvuName: v.optional(v.string()),
    discordTag: v.optional(v.string()),
    isInDiscordServer: v.boolean(),
    isImvuCreator: v.boolean(),
    imvuStoreLink: v.optional(v.string()),
    imvuPlatform: v.optional(v.string()),
    creationTools: v.optional(v.string()),
    skillLevel: v.optional(v.string()),
    motivation: v.string(),
    expectations: v.string(),
  })
    .index("by_email", ["email"]),
});

