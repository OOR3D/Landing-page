import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  earlyAccess: defineTable({
    email: v.string(),
    imvuName: v.string(),
    discordTag: v.string(),
    motivation: v.string(),
    socialLink: v.optional(v.string()),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_created_at", ["createdAt"]),
});

