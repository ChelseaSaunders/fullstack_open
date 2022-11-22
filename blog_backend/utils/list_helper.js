const dummy = blogsArr => {
  return 1;
}

const totalLikes = blogsArr => {
  let total = 0
  blogsArr.forEach(blog => total += blog.likes)
  return total
}

module.exports = {
  dummy,
  totalLikes
}
