export function filterUsers(users, query) {
  query = query.toLowerCase();
  return users.filter((user) =>
    [...user.name.split(" "), ...user.company.split(" "), ...user.country.split(" ")].some((word) =>
      word.toLowerCase().startsWith(query)
    )
  );
}
