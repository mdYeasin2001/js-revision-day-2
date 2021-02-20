const friends = ['ali', 'simul', 'asraful', 'nasreen'];
friends[1] = 'moniur';
console.log(friends.indexOf('nasreen'));
console.log(friends);
console.log(friends[2]);

friends.push('jakary');
friends.push('Hridoy', 'daliya');
friends.pop();
console.log(friends);
console.log(friends.length);
friends.shift();
friends.unshift('shefa')
console.log(friends);