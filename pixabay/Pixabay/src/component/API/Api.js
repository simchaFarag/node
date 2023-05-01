
   const res = await fetch('http://localhost:4000/images');
  // eslint-disable-next-line no-undef
  if (!res.ok) throw ServerError("  ");
  var { total, hits } = await res.json();



