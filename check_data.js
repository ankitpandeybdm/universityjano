global.window = {};
require('./data/universities.js');
console.log('Total universities in data/universities.js:', window.UNIVERSITIES_DATA.length);
window.UNIVERSITIES_DATA.forEach((u, i) => console.log(`${i+1}. ${u.name} (${u.slug})`));
