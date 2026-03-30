
const CommentsContainer = () => {
    const commentsData = [
        {
            "name": "Pandiaraj",
            "text": "Nice Video",
            "replies": []
        }, {
            "name": "Pandiaraj",
            "text": "Nice Video",
            "replies": [{
                "name": "Pandiaraj",
                "text": "Nice Video",
                "replies": []
            }, {
                "name": "Pandiaraj",
                "text": "Nice Video",
                "replies": []
            }]
        }, {
            "name": "Pandiaraj",
            "text": "Nice Video",
            "replies": [{
                "name": "Pandiaraj",
                "text": "Nice Video",
                "replies": []
            },
            {
                "name": "Pandiaraj",
                "text": "Nice Video",
                "replies": [{
                    "name": "Pandiaraj",
                    "text": "Nice Video",
                    "replies": [{
                        "name": "Pandiaraj",
                        "text": "Nice Video",
                        "replies": []
                    }]
                }]
            }]
        }, {
            "name": "Pandiaraj",
            "text": "Nice Video",
            "replies": []
        }
    ];


    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold"> Comments:</h1>
            <CommentsList comments={commentsData} />
        </div>

    )
}
const Comment = ({ data }: { data: any }) => {
    let { name, text, replies } = data;
    return <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img className="h-10 p-2 rounded-lg" alt='profile' src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg" />
        <div>
            <h2>{name}</h2>
            <h3>{text}</h3>
        </div>
    </div>
}

const CommentsList = ({ comments }: any) => {
    return comments.map((comment: any, index: number) =>
        <div>
            <Comment key={index} data={comment} />
            <div className="pl-5 border-l-1 border-l-black ml-5">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    );

}
export default CommentsContainer