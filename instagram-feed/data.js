const initialData = {
    profile: {
        avatar: require("../assets/instagram-feed-images/avatar3.jpg"),
    },
    stories: [{
        id: 1,
        avatar: require("../assets/instagram-feed-images/avatar3.jpg"),
        name: 'Maria Hernandez',
        isSeen: false
    },{
        id: 2,
        avatar: require("../assets/instagram-feed-images/avatar1.jpg"),
        name: 'Michelle Lee',
        isSeen: false
    },{
        id: 3,
        avatar: require("../assets/instagram-feed-images/avatar3.jpg"),
        name: 'Maria Hernandez',
        isSeen: false
    },],
    articles: [
      {
        id: 1,
        avatar: require("../assets/instagram-feed-images/avatar.jpg"),
        name: 'Jack T. Wilson',
        image: require("../assets/instagram-feed-images/img1.jpg"),
        likes: 10,
        commentCount: 22,
        comments: 'View all 0 comments',
      },{
        id: 2,
        avatar: require("../assets/instagram-feed-images/avatar1.jpg"),
        name: 'Michelle Lee',
        image: require("../assets/instagram-feed-images/img2.jpg"),
        likes: 10,
        commentCount: 19,
        comments: 'View all 0 comments',
      },{
        id: 3,
        avatar: require("../assets/instagram-feed-images/avatar2.jpg"),
        name: 'Thomas Johnson',
        image: require("../assets/instagram-feed-images/img3.jpg"),
        likes: 10,
        commentCount: 27,
        comments: 'View all 0 comments',
      },{
        id: 4,
        avatar: require("../assets/instagram-feed-images/avatar3.jpg"),
        name: 'Maria Hernandez',
        image: require("../assets/instagram-feed-images/img4.jpg"),
        likes: 10,
        commentCount: 117,
        comments: 'View all 0 comments',
      },{
        id: 5,
        avatar: require("../assets/instagram-feed-images/avatar4.jpg"),
        name: 'Kevin Lee',
        image: require("../assets/instagram-feed-images/img5.jpg"),
        likes: 10,
        commentCount: 42,
        comments: 'View all 0 comments',
      },
    ]
}

const data = {
    ...initialData,
    articles: initialData.articles.map(article => {
        return {
            ...article,
            comments: `View all ${article.commentCount} comments`
        }
    })
}

export default data;