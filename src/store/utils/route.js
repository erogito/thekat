const set = (route) => encodeURI(route.split(' ').join('-').trim());

export { set };
