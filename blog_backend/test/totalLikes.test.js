const listHelper = require('../utils/list_helper')

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const listWithTwoBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b5gww4a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsge. Dijkstra',
      url: 'http://www.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    }
  ]

  const listWithThreeBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a6gweww234d17f8',
      title: 'Go Tidered Harmful',
      author: 'Edsgestra',
      url: 'http://www.u.arizona.edu/~rubinson/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a6gwws76234d17f8',
      title: 'Go To Statement  Harmful',
      author: 'Edsger W. ',
      url: 'http://www.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 2,
      __v: 0
    }
  ]

  const emptyList = []

  const listWhereTotalLikesIs0 = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 0,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('two blogs adds both blogs likes', () => {
    const result = listHelper.totalLikes(listWithTwoBlogs)
    expect(result).toBe(15)
  })


  test('3 blogs is 3 blogs likes', () => {
    const result = listHelper.totalLikes(listWithThreeBlogs)
    expect(result).toBe(14)
  })


  test('no blogs is 0 likes', () => {
    const result = listHelper.totalLikes(emptyList)
    expect(result).toBe(0)
  })


  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWhereTotalLikesIs0)
    expect(result).toBe(0)
  })
})