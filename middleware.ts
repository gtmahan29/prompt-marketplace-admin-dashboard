// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // const isProtectedRoute = createRouteMatcher(["/test(.*)", "/forum(.*)"]);

// export default clerkMiddleware((auth, req) => {
//   // if (isProtectedRoute(req)) auth().protect();
// });

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up']);

export default clerkMiddleware((auth, request) => {
  if(!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};