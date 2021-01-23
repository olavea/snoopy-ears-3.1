module.exports = {
  siteMetadata: {
    title: "snoopy-ears-3.3",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "T_hd9-bZENfua9q54-7BH4vXeqWMRJA6gZsx4wxUa14",
        spaceId: "",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
