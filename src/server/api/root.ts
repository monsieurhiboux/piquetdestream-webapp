import { createTRPCRouter } from "~/server/api/trpc"
import { exampleRouter } from "~/server/api/routers/example"
import { onboardingRouter } from "./routers/onboarding"
import { scheduleRouter } from "./routers/schedule/schedule"
import { twitchRouter } from "./routers/twitch"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	example: exampleRouter,
	onboarding: onboardingRouter,
	schedule: scheduleRouter,
	twitch: twitchRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
