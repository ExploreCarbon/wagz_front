import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const graphqlClient = new ApolloClient({
  uri: "https://dev-wagz.pantheonsite.io/graphql",
  cache: new InMemoryCache(),
  ssrMode: true,
  shouldBatch: true,
});

export const PAGE_QUERY = gql`
  query PageBySlug($slug: String!) {
    nodeByUri(uri: $slug) {
      ... on Page {
        id
        title
        pages {
          content {
            ... on Page_Pages_Content_SocialFeed {
              fieldGroupName
              subtitle
              title
              paddingTop
              paddingBottom
            }
            ... on Page_Pages_Content_CountingBlocks {
              fieldGroupName
              paddingTop
              paddingBottom
              heading {
                color
                heading
                size
              }
              subHeading {
                color
                subHeading
                size
              }
              supHeading {
                color
                supHeading
                size
              }
              counts {
                title
                text
              }
            }
            ... on Page_Pages_Content_Separator {
              fieldGroupName
              paddingTop
              paddingBottom
            }
            ... on Page_Pages_Content_LogoScroller {
              fieldGroupName
              title
              paddingTop
              paddingBottom
              logos {
                logo {
                  altText
                  mediaItemUrl
                }
              }
            }
            ... on Page_Pages_Content_Slider {
              fieldGroupName
              slide {
                content {
                  heading {
                    heading {
                      color
                      heading
                      size
                    }
                    subHeading {
                      color
                      subHeading
                      size
                    }
                    supHeading {
                      color
                      supHeading
                      size
                    }
                  }

                  cta {
                    cta {
                      color
                      fieldGroupName
                      label
                      size
                      target
                      url
                    }
                    fieldGroupName
                  }
                  text
                }
                image {
                  image {
                    altText
                    largeScreenImage {
                      altText
                      mediaItemUrl
                    }
                    mediumScreenImage {
                      altText
                      mediaItemUrl
                    }
                    smallScreenImage {
                      altText
                      mediaItemUrl
                    }
                  }
                }
              }
            }
            ... on Page_Pages_Content_Icons {
              fieldGroupName
              paddingTop
              paddingBottom
              structure
              heading {
                color
                heading
                size
              }
              subHeading {
                color
                subHeading
                size
              }
              supHeading {
                color
                supHeading
                size
              }
              text
              image {
                mediaItemUrl
                altText
              }
              cta {
                color
                size
                label
                url
                target
              }
              icons {
                title
                text
                tabTitle
                icon {
                  mediaItemUrl
                  altText
                }
                cta {
                  url
                  label
                }
                image {
                  mediaItemUrl
                  altText
                }
              }
            }
            ... on Page_Pages_Content_HeroImage {
              fieldGroupName
              image {
                altText
                largeScreenImage {
                  altText
                  mediaItemUrl
                }
                mediumScreenImage {
                  altText
                  mediaItemUrl
                }
                smallScreenImage {
                  altText
                  mediaItemUrl
                }
              }
              contentBlock {
                heading {
                  color
                  heading
                  size
                }
                subHeading {
                  color
                  subHeading
                  size
                }
                supHeading {
                  color
                  supHeading
                  size
                }
                cta {
                  cta {
                    color
                    fieldGroupName
                    label
                    size
                    target
                    url
                  }
                  fieldGroupName
                }
                text
              }
            }
            ... on Page_Pages_Content_FlexibleContent {
              fieldGroupName
              paddingTop
              paddingBottom
              content {
                ... on Page_Pages_Content_FlexibleContent_Content_ContentBlock {
                  fieldGroupName
                  text
                  icons {
                    icons {
                      label
                      icon {
                        mediaItemUrl
                      }
                    }
                  }
                  cta {
                    cta {
                      color
                      fieldGroupName
                      label
                      size
                      target
                      url
                    }
                    fieldGroupName
                  }
                  heading {
                    heading {
                      color
                      heading
                      size
                    }
                    subHeading {
                      color
                      subHeading
                      size
                    }
                    supHeading {
                      color
                      supHeading
                      size
                    }
                  }
                }
                ... on Page_Pages_Content_FlexibleContent_Content_Image {
                  fieldGroupName
                  image {
                    altText
                    fieldGroupName
                    largeScreenImage {
                      altText
                      mediaItemUrl
                    }
                    mediumScreenImage {
                      altText
                      mediaItemUrl
                    }
                    smallScreenImage {
                      altText
                      mediaItemUrl
                    }
                  }
                }
                ... on Page_Pages_Content_FlexibleContent_Content_Video {
                  fieldGroupName
                  wistiaId
                  poster {
                    altText
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const MENU_QUERY = gql`
  query Menu($id: ID!) {
    menu(id: $id, idType: ID) {
      id
      menuItems {
        nodes {
          id
          path
          label
        }
      }
    }
  }
`;
