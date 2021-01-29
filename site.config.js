module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'eb7fd27359cf46139234e9a048ed3a1c',

  // basic site info (required)
  name: 'Rishabh Srivastava',
  domain: 'test.rish.blog',
  author: 'Rishabh Srivastava',

  // open graph metadata (optional)
  description: 'Notes, frameworkers, and other things I find useful',
  socialImageTitle: 'rish.blog',
  socialImageSubtitle: "Rishabh's notes ✍️'",

  // social usernames (optional)
  twitter: 'rishdotblog',
  github: 'rishsriv',
  linkedin: 'rishsriv',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null, // URL
  defaultPageCover: null, // URL
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false
}
