import { map, Matcher, redirect } from "navi";



export function withAuthentication(matcher) {
  return map((_, context) =>
    context.token ? matcher : redirect("/login"),
  );
}
