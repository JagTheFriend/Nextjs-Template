import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";

class ActionError extends Error {}

// Base client.
const actionClient = createSafeActionClient({
  handleServerError(e) {
    console.error("Action error:", e.message);

    if (e instanceof ActionError) {
      return e.message;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});

// Auth client defined by extending the base client
export const authActionClient = actionClient
  // Define authorization middleware.
  .use(async ({ next }) => {
    const session = "";
    if (!session) {
      throw new Error("Session not found!");
    }

    const userId = "";
    if (!userId) {
      throw new Error("Session is not valid!");
    }

    // Return the next middleware with `userId` value in the context
    return next({ ctx: { userId } });
  });
