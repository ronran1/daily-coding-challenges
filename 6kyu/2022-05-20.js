// Create usernames
function addUsername(list) {
    return list.map(li => {
    let user = li.firstName.toLowerCase() + li.lastName[0].toLowerCase() + (new Date().getFullYear() - li.age).toString()
    return {
      ...li,
      username: user
    }
  })
}
