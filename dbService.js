// var loremIpsum = require('lorem-ipsum')
var imgs = [
  {
    userID: 1,
    imgId: 1,
    URL: "/img/gallery/1.jpg",
    likes: ['user1','user2'],
    comments: [ {user: 'user1', content: "If Trump wanted to clarify everything, he could just tell us the truth."},
    {user: 'user2', content: "who would believe him at this point?"}]
  },
  {
    userID: 2,
    imgId: 2,
    URL: "/img/gallery/2.jpg",
    likes: ['user1','user2','user2','user2','user2'],
    comments: [{user: 'someuser', content: "the best people..."}]
  },
  {
    userID: 2,
    imgId: 3,
    URL: "/img/gallery/3.jpg",
    likes: ['user1','user2','user2','user2'],
    comments: [ {user: 'uknown', content: `hard to believe another "the best" doesn't pan out well for Drumpf`}
      , {user: 'youknowme', content: "Please make sure that Rudy does not run out of shovels."}]
  },
//   {
//     userID: 2,
//     imgId: 4,
//     URL: "/img/gallery/4.jpg",
//     likes: 2,
//     comments: ["Rudy G. sat on a wall,"]
//   },
//   { userID: 1, imgId: 5, URL: "/img/gallery/4.jpg", likes: 23, comments: [] },
//   { userID: 2, imgId: 6, URL: "/img/gallery/5.jpg", likes: 1, comments: [] }
];

// function store(key, any) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             localStorage[key] = JSON.stringify(any);
//             resolve();
//         }, 100)
//     });

// }

function load(key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var str = imgs || "null";
      resolve(str);
    }, 1000);
  });

  // return Promise.resolve(JSON.parse(str));
}

export default {
  // store,
  load
};
