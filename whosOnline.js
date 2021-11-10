const whosOnline = (friends) => 
  friends.reduce((a,{username, status, lastActivity}) => {
  const frindsStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
  a[frindsStatus] ? a[frindsStatus].push(username) : a[frindsStatus] = [username];
  return a;
}, {})