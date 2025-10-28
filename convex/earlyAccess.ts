import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Validator for early access form submission
export const earlyAccessValidator = v.object({
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
});

/**
 * Submit early access application
 */
export const submitEarlyAccess = mutation({
  args: earlyAccessValidator,
  handler: async (ctx, args) => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(args.email)) {
      throw new Error("Please provide a valid email address.");
    }

    // Check if user is in Discord server
    if (!args.isInDiscordServer) {
      throw new Error("You must join our Discord server to apply for early access.");
    }

    // Check if email already exists
    const existing = await ctx.db
      .query("earlyAccess")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      // Return success without inserting duplicate - don't leak registration status
      return { success: true, alreadyRegistered: true };
    }

    // Insert into database
    const id = await ctx.db.insert("earlyAccess", {
      ...args,
    });

    return { success: true, id };
  },
});

/**
 * Get all early access signups (admin use)
 */
export const listEarlyAccess = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("earlyAccess")
      .order("desc")
      .collect();
  },
});

/**
 * Get early access count
 */
export const getEarlyAccessCount = query({
  handler: async (ctx) => {
    const signups = await ctx.db.query("earlyAccess").collect();
    return signups.length;
  },
});

/**
 * Check if email is already registered
 */
export const checkEmailExists = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("earlyAccess")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    return !!existing;
  },
});

