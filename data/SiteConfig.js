module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "katan", // The default and fallback author ID used for blog posts without a defined author.
    siteTitle: "SAP Inside Track Brisbane", // Site title.
    siteTitleAlt: "SAP Inside Track Brisbane", // Alternative site title for SEO.
  siteLogo:
    "/logos/home.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://sitbne.github.", // sitbneDomain of your website without pathPrefix.
  pathPrefix: "io", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "A local grassroots community event organised where SCN members come together to share knowledge, expertise and network", // Website description used for RSS feeds/meta description tag.
  siteCover: "/images/Brisbane-Logo-Very-Plain.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
    siteNavigation: true, // If navigation is enabled the Menu button will be visible
    //siteBanner:"Register now for our upcoming event on February 19th", // Site Banner 
    //siteBannerUrl: "/february-2020", //Path to page to navigate from Site Banner
  siteRss: "", //"/rss.xml", // Path to the RSS file.
  siteRssAuthor: "", //"Casper User", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 5, // The max number of posts per page.
  googleAnalyticsID: "UA-157133488-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
      "https://github.com/sitbne",
      "https://twitter.com/search?q=sitbne",
      "mailto:sitbne@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
          label: "Keen to Speak",
        url: "/keen-to-speak",
        iconClassName: "fa fa-microphone"
    },
    {
      label: "Latest Event Details",
      url: "/may-2020",
      iconClassName: "fa fa-microphone"
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "SAP Inside Track Brisbane", // Label used before the year
    year: "2018", // optional, set specific copyright year or range of years, defaults to current year
    url: "https://sitbne.github.io/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
