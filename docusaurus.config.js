// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const urlWebsite = "https://cyberkoalastudios.com/";
const urlUnrealMarketplaceProduct_VELESA = "https://www.unrealengine.com/marketplace/en-US/product/";
const urlDiscordInviteLink = "https://discord.gg/";
const urlGitHubRepository = "https://github.com/CyberKoalaStudios/VELESA-Documentation";
const urlGitHubIssueTracker = `${urlGitHubRepository}/issues`;

const globalRemarkPlugins = [
    require('mdx-mermaid'),
    require('remark-math'),
    require('@akebifiky/remark-simple-plantuml'),
];

const globalRehypePlugins = [
    require('rehype-katex'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "CYBERKOALA VELESA Plugin",
    tagline: "VELESA is the performant multiplayer gameplay framework",
    organizationName: "CyberKoalaStudios", // Usually your GitHub org/user name.
    projectName: "VELESA-Documentation", // Usually your repo name.
    deploymentBranch: "gh-pages",

    url: "https://CyberKoalaStudios.github.io",
    baseUrl: "/VELESA-Documentation/",

    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",

    plugins: [
        'docusaurus-plugin-sass',
        require.resolve("docusaurus-plugin-image-zoom"),
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: ({versionDocsDirPath, docPath}) =>
                        `${urlGitHubRepository}/edit/master/${versionDocsDirPath}/${docPath}`,
                    showLastUpdateTime: false,
                    includeCurrentVersion: false,
                    versions: {
                        "5.3.2": {
                            banner: "none",
                        },
                    },

                    remarkPlugins: globalRemarkPlugins,
                    rehypePlugins: globalRehypePlugins,
                },

                pages: {
                    remarkPlugins: globalRemarkPlugins,
                    rehypePlugins: globalRehypePlugins,
                },

                blog: false,

                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },

                // gtag: {
                //     trackingID: 'G-TODO',
                //     anonymizeIP: true,
                // }
            }),
        ],
    ],

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },

            navbar: {
                title: "CYBERKOALA VELESA Plugin",
                logo: {
                    alt: "CYBERKOALA VELESA Plugin Logo",
                    src: "img/logo-48.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "getting-started/introduction",
                        label: "Documentation",
                        position: "left",
                    },

                    {type: "docsVersionDropdown", position: "left"},

                    {to: "/changelog", label: "Changelog", position: "right"},

                    {to: "/roadmap", label: "Roadmap", position: "right"},

                    {
                        href: urlDiscordInviteLink,
                        label: "Discord",
                        position: "right",
                    },

                    {
                        href: urlGitHubIssueTracker,
                        label: "Issue Tracker",
                        position: "right",
                    },

                    {
                        href: urlGitHubRepository,
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },

            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {to: "/docs/getting-started/introduction", label: "Getting Started"},

                            {to: "/changelog", label: "Changelog"},

                            {to: "/roadmap", label: "Roadmap"},
                        ],
                    },

                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: urlDiscordInviteLink,
                            },
                        ],
                    },

                    {
                        title: "Unreal Marketplace",
                        items: [
                            {
                                label: "CYBERKOALA Studios VELESA Plugin",
                                href: urlUnrealMarketplaceProduct_VELESA,
                            },
                        ],
                    },

                    {
                        title: "More",
                        items: [
                            {
                                label: "CYBERKOALA LLC",
                                href: urlWebsite,
                            },

                            {
                                label: "GitHub",
                                href: urlGitHubRepository,
                            },

                            {
                                label: "Issue Tracker",
                                href: urlGitHubIssueTracker,
                            },
                        ],
                    },
                ],

                copyright: `Copyright © ${new Date().getFullYear()} CYBERKOALA LLC. All Rights Reserved.`,
            },

            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },

            zoom: {
                selector: '.markdown :not(em) > img',
                config: {
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                    margin: 64,
                    background: {
                        light: 'rgb(255, 255, 255)',
                        dark: 'rgb(50, 50, 50)',
                    }
                }
            }
        }),
};

module.exports = config;
