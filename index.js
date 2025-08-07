// ======= User Data =======
var user1 = {
  userName: '@elonmusk',
  displayName: 'Elon Musk',
  joinedDate: 'June 2009',
  followingCount: 103,
  followerCount: 47900000,
  avatarURL: 'assets/elonmusk.jpg',
  coverPhotoURL: 'assets/elonmusk-cover.jpeg',
  tweets: [
    {
      text: 'I admit to judging books by their cover',
      timestamp: '2/10/2021 00:01:20'
    },
    {
      text: 'Starship to the moon',
      timestamp: '2/09/2021 18:37:12'
    },
    {
      text: 'Out on launch pad, engine swap underway',
      timestamp: '2/09/2021 12:11:51'
    }
  ]
};

var user2 = {
  userName: '@BillGates',
  displayName: 'Bill Gates',
  joinedDate: 'June 2009',
  followingCount: 274,
  followerCount: 53800000,
  avatarURL: 'assets/billgates.jpg',
  coverPhotoURL: 'assets/billgates-cover.jpeg',
  tweets: [
    {
      text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
      timestamp: '2/10/2021 00:01:20'
    },
    {
      text: 'Should I start tweeting memes? Let me know in a comment.',
      timestamp: '2/09/2021 18:37:12'
    },
    {
      text: 'In 2020, I read a book every hour.',
      timestamp: '2/09/2021 12:11:51'
    }
  ]
};

// ======= Users Object =======
const users = {
  user1: user1,
  user2: user2
};

// ======= Get User from Query String =======
const params = new URLSearchParams(window.location.search);
const userKey = params.get("user") || "user1"; // default to user1
const currentUser = users[userKey];

// ======= DOM Elements =======
const profileContainer = document.getElementById("profile-container");
const tweetsContainer = document.getElementById("tweets-container");
const coverPhoto = document.querySelector(".cover-photo");
const avatar = document.querySelector(".avatar");
avatar.src = currentUser.avatarURL;

// ======= Render Functions =======
function renderProfile(user) {
  coverPhoto.style.backgroundImage = `url(${user.coverPhotoURL})`;

  const profile = document.createElement("div");
  profile.className = "profile";

  profile.innerHTML = `
    <img class="avatar" src="${user.avatarURL}" />
    <div class="profile-info">
      <h2>${user.displayName}</h2>
      <p>${user.userName}</p>
      <p>Joined ${user.joinedDate}</p>
      <p><strong>${user.followerCount.toLocaleString()}</strong> Followers • <strong>${user.followingCount}</strong> Following</p>
      <p><strong>${user.tweets.length}</strong> Tweets</p>
    </div>
  `;

  profileContainer.appendChild(profile);
}

function renderTweets(user) {
  user.tweets.forEach(tweet => {
    const tweetCard = document.createElement("div");
    tweetCard.className = "tweet";

    const date = new Date(tweet.timestamp).toLocaleString();

    tweetCard.innerHTML = `
      <p class="tweet-meta">${user.userName} • ${date}</p>
      <p class="tweet-text">${tweet.text}</p>
    `;

    tweetsContainer.appendChild(tweetCard);
  });
}

// ======= Render App =======
renderProfile(currentUser);
renderTweets(currentUser);
