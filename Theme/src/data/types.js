//  ######  CustomLink  ######## //
export const CustomLink = {
  label: String,
  href: String,
  targetBlank: Boolean,
}





export const PostAuthorType = {
  id: String| Number,
  firstName: String,
  lastName: String,
  displayName: String,
  avatar: String,
  bgImage: String,
  email: String,
  count: Number,
  desc: String,
  jobName: String,
  href: String,
}

export const PostDataType = {
  id: String | Number,
  author: PostAuthorType,
  date: String,
  href: String,
  //categories: TaxonomyType,
  title: String,
  featuredImage: String,
  desc: String,
  like: {
    count: Number,
    isLiked: Boolean,
  },
  bookmark: {
    count: Number,
    isBookmarked: Boolean,
  },
  commentCount: Number,
  viewdCount: Number,
  readingTime: Number,
  postType: "standard" | "video" | "gallery" | "audio",
  videoUrl: String,
  audioUrl: String,
  galleryImgs: String,
}



export const VideoType = {
  id: String,
  title: String,
  thumbnail: String,
}


//  ##########  PostDataType ######## //
export const TwMainColor = "gray";


export const TaxonomyType = {
  id: String | Number,
  name: String,
  href: String,
  count: Number,
  thumbnail: String,
  desc: String,
  color: TwMainColor | String,
  taxonomy: "category" | "tag",
}