const Users = [
    {
        id: 1,
        name: "name AAAAA",
        email: "aaaaa@aaaaaa.com",
        posts: [
            {
                id: 1,
                title: "AAAAAA",
                published: true,
                link: "aaaaaa.link",
                author: 1
            },
            {
                id: 2,
                title: "BBBB",
                published: false,
                link: "bbbb.link"
            }
        ]
    },
    {
        id: 3,
        name: "name BBBBB",
        email: "bbbb@bbbb.com",
        posts: []
    }
]

module.exports = {
    Users
}