import { getImage, IGatsbyImageData } from "gatsby-plugin-image"

export function mergePosts(
  allMarkdownRemark: AllMarkdownRemark,
  allFile?: AllFile
) {
  let allFeaturedImages: { [key: string]: IGatsbyImageData } = {}
  allFile &&
    allFile.edges.forEach(node => {
      allFeaturedImages[node.node.relativePath] =
        node.node.childImageSharp.gatsbyImageData
    })
  const mdPosts = allMarkdownRemark.nodes
  return mdPosts
    .map(post => {
      return {
        title: post.frontmatter.title,
        excerpt: removeHtmlTags(post.excerpt),
        slug: post.fields.slug.replace(/^\//, "").replace(/\/$/, ""),
        date: post.frontmatter.date,
        dateModified: post.frontmatter.dateModified,
        description: post.frontmatter.description,
        altText: post.frontmatter.featuredImagePath,
        gatsbyImage: getImage(
          allFeaturedImages[
            post.frontmatter.featuredImagePath ||
              "featured/defaultThumbnail.png"
          ]
        ),
        category: post.frontmatter.category || "",
        tags: post.frontmatter.tags || [],
      } as CommonPost
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    ) as CommonPost[]
}

export function mergePost(md?: MdPost, allFile?: AllFile) {
  let allFeaturedImages: { [key: string]: IGatsbyImageData } = {}
  allFile &&
    allFile.edges.forEach(node => {
      allFeaturedImages[node.node.relativePath] =
        node.node.childImageSharp.gatsbyImageData
    })
  return {
    title: md?.frontmatter.title,
    excerpt: removeHtmlTags(md?.excerpt),
    slug: md?.fields.slug,
    date: md?.frontmatter.date,
    dateModified: md?.frontmatter.dateModified,
    description: md?.frontmatter.description,
    altText:
      md?.frontmatter.featuredImagePath ||
      "",
    gatsbyImage:
      getImage(
        allFeaturedImages[
          md?.frontmatter.featuredImagePath || "featured/defaultThumbnail.webp"
        ]
      ) ||
      getImage(allFeaturedImages["featured/defaultThumbnail.webp"]),
  } as CommonPost
}

const categoryNames: { eng: string; jp: string }[] = [
  { eng: "one", jp: "1" },
]

export function convertCategory(japanese: string) {
  if (!japanese) return undefined
  return categoryNames.find(c => c.jp === japanese.replace("/", ""))?.eng || ""
}

export function removeHtmlTags(str: string | undefined) {
  if (!str) return ""
  return str.replace(/<[^a-zA-Z]*\/?>/g, "")
}
