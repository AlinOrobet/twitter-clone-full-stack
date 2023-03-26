import axios from "axios";
import {useCallback, useMemo} from "react";
import toast from "react-hot-toast";
import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import usePost from "./usePost";
import usePosts from "./usePosts";

const useLike = ({postId, userId}: {postId: string; userId?: string}) => {
  const {data: currentUser} = useCurrentUser();
  const {data: fetchedPost, mutate: mutatedFetchedPost} = usePost(postId);
  const {mutate: mutatedFetchedPosts} = usePosts(userId);

  const loginModal = useLoginModal();

  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];
    return list.includes(currentUser?.id);
  }, [fetchedPost?.likedIds, currentUser?.id]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    try {
      let request;
      if (hasLiked) {
        request = () => axios.delete("/api/like", {data: {postId}});
      } else {
        request = () => axios.post("/api/like", {postId});
      }

      await request();
      mutatedFetchedPosts();
      mutatedFetchedPost();

      toast.success("Success");
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [currentUser, hasLiked, postId, mutatedFetchedPost, mutatedFetchedPosts, loginModal]);

  return {hasLiked, toggleLike};
};
export default useLike;
