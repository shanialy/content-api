import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectRecentLikeds,
  selectRecentRemoveds,
  removeLikedByPostId,
  addNewLikedByPostId,
} from "../../app/postLikes/postLikes";

// import { PostDataType } from "data/types";
import PostCardLikeAction, {
  PostCardLikeActionProps,
} from "../../components/PostCardLikeAction/PostCardLikeAction";

// export interface PostCardLikeContainerProps
//   extends Omit<PostCardLikeActionProps, "isLiked" | "likeCount"> {
//   like: PostDataType["like"];
// }

const PostCardLikeContainer = ({
  twitter_shares,
  topic_twitter
  // postId,
  // onClickLike,
  // ...args
}) => {

  //getting twitter_shares from postCartlikeandcomment component
  

  return (
    <PostCardLikeAction
      // {...args}
      // isLiked={isLiked()}
      // likeCount={getLikeCount()}
     // postId={postId}
     twitter_shares={twitter_shares}
     topic_twitter={topic_twitter}
    />
  );
};

export default PostCardLikeContainer;
