import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Validator for early access form submission
export const earlyAccessValidator = v.object({
  email: v.string(),
  imvuName: v.string(),
  discordTag: v.string(),
  motivation: v.string(),
  socialLink: v.optional(v.string()),
  hasPaid: v.boolean(),
  notes: v.optional(v.string()),
});

/**
 * Submit early access application
 */
export const submitEarlyAccess = mutation({
  args: earlyAccessValidator,
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("earlyAccess")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      throw new Error("This email has already been registered for early access.");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(args.email)) {
      throw new Error("Please provide a valid email address.");
    }

    // Insert into database
    const id = await ctx.db.insert("earlyAccess", {
      ...args,
      createdAt: Date.now(),
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
      .withIndex("by_created_at")
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

