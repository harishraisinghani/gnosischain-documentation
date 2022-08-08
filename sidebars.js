/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  about: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'about/overview/why-gnosis-chain',
        'about/overview/history',
        'about/overview/roadmap',
        'about/overview/about-gnosis-dao',
        'about/overview/community',
        'about/overview/media-kit',
      ]
    },
    { 
      type: 'category',
      label: 'Networks',
      collapsed: false,
      items: [
        "about/networks/mainnet",
        "about/networks/testnets",
        "about/networks/rollups"
      ]
    },
    {
      type: 'category',
      label: 'Tokens',
      collapsed: false,
      items: [{type: 'autogenerated', dirName: 'about/tokens'}]
    },
    {
      type: 'category',
      label: 'Protocol Specs',
      collapsed: false,
      link: {type: 'doc', id: 'specs/README'},
      items: [
          {
            type: 'category',
            label: 'Beacon Chain',
            collapsed: true,
            link: {type: 'doc', id: 'specs/gbc/README'},
            items: [
              'specs/gbc/upgradeability',
              'specs/gbc/faq',
            ],
          },
          {
            type: 'category',
            label: 'Consensus',
            collapsed: true,
            link: {type: 'doc', id: 'specs/consensus/README'},
            items: [
              'specs/consensus/aura',
              'specs/consensus/posdao',
              'specs/consensus/gbc',
            ],
          },
          {
            type: 'category',
            label: 'Hard Forks',
            collapsed: true,
            link: {type: 'doc', id: 'specs/hard-forks/README'},
            items: [
              'specs/hard-forks/21735000',
              'specs/hard-forks/19040000',
              'specs/hard-forks/16101500',
              'specs/hard-forks/9186425',
              'specs/hard-forks/7298030',
              'specs/hard-forks/2508800',
              'specs/hard-forks/1604400',
              'specs/hard-forks/spec.json-update',
              'specs/hard-forks/eip-1559',
            ],
          },
          'specs/security-audit',
      ],
    },
  ],
  
  userguide: [{type: 'autogenerated', dirName: 'user-guide'}],

  developers: [
    'developers/README',
    /*{
      type: 'category',
      label: 'Environments',
      collapsed: true,
      link: {type: 'doc', id: 'developers/environments/README'},
      items: [
        "developers/environments/mainnet",
        "developers/environments/testnet",
        "developers/environments/local-environment",
      ],
    },*/
    {
      type: 'category',
      label: 'Deploying a Smart Contract',
      collapsed: false,
      link: {type: 'doc', id: 'developers/smart-contracts/README'},
      items: [
        "developers/smart-contracts/truffle",
        "developers/smart-contracts/hardhat",
        "developers/smart-contracts/remix-metamask",
        "developers/smart-contracts/foundry",
      ],
    },
    {
      type: 'category',
      label: 'Interacting with Gnosis Chain',
      collapsed: true,
      link: {type: 'doc', id: 'developers/interact/README'},
      items: [
        "developers/interact/metamask",
        "developers/interact/web3-js",
        "developers/interact/ethers-js",
      ],
    },
    {
      type: 'category',
      label: 'Building DApps',
      collapsed: false,
      link: {type: 'doc', id: 'developers/building/first-contract'},
      items: [
        "developers/building/first-contract",
        "developers/building/full-stack-dapp",
        "developers/building/token",
        "developers/building/nft",
        //"developers/building/testnet-deployment",
      ],
    },
    {
      type: 'category',
      label: 'Bridging to Ethereum',
      collapsed: true,
      link: {type: 'doc', id: 'developers/bridging/basics'},
      items: [
        "developers/bridging/bridging-tokens",
        "developers/bridging/bridging-data",
        "developers/bridging/bridging-dai",
      ],
    },
    {
      type: 'category',
      label: 'Verify Contracts',
      collapsed: false,
      link: {type: 'doc', id: 'developers/verify/README'},
      items: [
        "developers/verify/blockscout",
        "developers/verify/gnosisscan",
        "developers/verify/truffle",
        "developers/verify/sourcify",
      ],
    },
    {
      type: 'link',
      label: 'Get Help!',
      href: 'https://discord.gg/VQb3WzsywU',
    },
  ],

  node: [
    'node/README',
    'node/incentives',
    {
      type: 'category',
      label: 'Validator Guide',
      collapsed: false,
      link: {type: 'doc', id: 'node/get-started'},
      items: [
        "node/consensus-layer-validator",
        "node/execution-layer-validator",
        "node/validator-deposits",
        "node/validator-withdrawls",
        "node/migrating-a-validator",
        "node/monitoring-nodes",
        "node/voluntary-exit",
      ],
    },
    /*{
      type: 'category',
      label: 'Testnets',
      collapsed: true,
      link: {type: 'doc', id: 'node/testnets/README'},
      items: [
        "node/testnets/consensus-layer",
        "node/testnets/execution-layer",
        
      ],
    },*/
    {
      type: 'link',
      label: 'Landing Page',
      href: 'https://www.gnosischain.com/',
    },
  ],
  
  tools: [
    'tools/README',
    {
      type: 'category',
      label: 'Explorers',
      link: {type: 'doc', id: 'tools/explorers'},
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'AnyBlock',
          href: 'https://explorer.anyblock.tools/ethereum/poa/xdai/',
        },
        {
          type: 'link',
          label: 'Blockscout',
          href: 'https://blockscout.com/xdai/mainnet/',
        },
        {
          type: 'link',
          label: 'Gnosisscan',
          href: 'https://gnosisscan.io/',
        },
        {
          type: 'link',
          label: 'Beacon Chain',
          href: 'https://beacon.gnosischain.com/',
        },
      ],
    },
    {
      type: 'category',
      label: 'RPC Providers',
      collapsed: true,
      link: {type: 'doc', id: 'tools/rpc/README'},
      items: [
        {
          type: 'link',
          label: 'Ankr API',
          href: 'https://app.ankr.com/',
        },
        {
          type: 'link',
          label: 'Blast',
          href: 'https://blastapi.io/public-api/gnosis',
        },
        {
          type: 'link',
          label: 'GetBlock',
          href: 'https://getblock.io/',
        },
        {
          type: 'link',
          label: 'Pokt',
          href: 'https://docs.pokt.network/home/use/public-rpc/gnosis-chain',
        },
      ],
    },
    {
      type: 'category',
      label: 'Wallets',
      collapsed: false,
      link: {type: 'doc', id: 'tools/wallets/README'},
      items: [
        {
          type: 'category',
          label: 'Metamask',
          collapsed: true,
          link: {type: 'doc', id: 'tools/wallets/metamask/README'},
          items: [
            {
              type: 'link',
              label: 'Add custom tokens',
              href: 'https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask',
            },
            'tools/wallets/metamask/change-rpc-url',
            {
              type: 'link',
              label: 'With a Ledger or Trezor',
              href: 'https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet',
            },
          ],
        },
        'tools/wallets/safe',
        {
          type: 'category',
          label: 'Hardware',
          collapsed: true,
          items: [
            'tools/wallets/dcent',
            'tools/wallets/ledger',
            'tools/wallets/trezor',
          ],
        },
        {
          type: 'category',
          label: 'Software',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Alpha Wallet',
              href: 'https://alphawallet.com/asset/the-best-wallet-for-xdai/',
            },
            {
              type: 'link',
              label: 'Ambire Wallet',
              href: 'https://www.ambire.com/',
            },
            {
              type: 'link',
              label: 'Coinbase Wallet',
              href: 'https://www.coinbase.com/wallet',
            },
            {
              type: 'link',
              label: 'DEX Wallet',
              href: 'https://www.dexwallet.io/',
            },
            {
              type: 'link',
              label: 'DinoWallet',
              href: 'https://dinowallet.org/',
            },
            {
              type: 'link',
              label: 'Frame',
              href: 'https://frame.sh/',
            },
            {
              type: 'link',
              label: 'Mt Pelerin',
              href: 'https://www.mtpelerin.com/bridge-wallet',
            },
            {
              type: 'link',
              label: 'Minerva Wallet',
              href: 'https://minerva.digital/',
            },
            {
              type: 'link',
              label: 'MyCrypto',
              href: 'https://app.mycrypto.com/',
            },
            {
              type: 'link',
              label: 'Nabox Wallet',
              href: 'https://nabox.io/',
            },
            {
              type: 'link',
              label: 'O3Labs',
              href: 'https://o3.network/',
            },
            {
              type: 'link',
              label: 'Pillar Wallet',
              href: 'https://www.pillar.fi/',
            },
            {
              type: 'link',
              label: 'Poketto Cash',
              href: 'https://poketto.cash/',
            },
            {
              type: 'link',
              label: 'Portis Wallet',
              href: 'https://wallet.portis.io/',
            },
            {
              type: 'link',
              label: 'Rabby Wallet',
              href: 'https://rabby.io/',
            },
            {
              type: 'link',
              label: 'TokenPocket',
              href: 'https://tokenpocket-gm.medium.com/how-to-add-xdai-chain-through-adding-custom-network-72d95597b017',
            },
            {
              type: 'link',
              label: 'Wallet3',
              href: 'https://wallet3.io/',
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Faucets',
      collapsed: true,
      link: {type: 'doc', id: 'tools/faucets/README'},
      items: [
        {
          type: 'link',
          label: 'Gnosis Faucet',
          href: 'https://gnosisfaucet.com/',
        },
        {
          type: 'link',
          label: 'Gimlu',
          href: 'https://www.gimlu.com/faucet',
        },
        {
          type: 'link',
          label: 'Stakely',
          href: 'https://stakely.io/en/faucet/gnosis-chain-xdai',
        },
        {
          type: 'link',
          label: 'Unitap',
          href: 'https://unitap.app/gas-faucet',
        },
        {
          type: 'link',
          label: 'xDai Faucet',
          href: 'https://xdai-faucet.top/',
        },
        'tools/faucets/tokens',
      ],
    },
    {
      type: 'category',
      label: 'Data & Analytics',
      collapsed: true,
      items: [
        'tools/analytics/the-graph',
        'tools/analytics/dune',
        {
          type: 'category',
          label: 'AnyBlock',
          collapsed: true,
          link: {type: 'doc', id: 'tools/analytics/anyblock/README'},
          items: [
            'tools/analytics/anyblock/api-sql',
          ],
        },
        'tools/analytics/beacon-chain',
        {
          type: 'link',
          label: 'Blocknative',
          href: 'https://docs.blocknative.com/',
        },
        {
          type: 'link',
          label: 'Chainbeat',
          href: 'https://chainbeat.io/',
        },
        {
          type: 'link',
          label: 'Curvegrid',
          href: 'https://www.curvegrid.com/docs/introduction-to-multibaas',
        },
        {
          type: 'link',
          label: 'DappQuery',
          href: 'https://dappquery.com/',
        },
        {
          type: 'link',
          label: 'Gnosisscan',
          href: 'https://gnosisscan.io/charts/',
        },
        {
          type: 'link',
          label: 'Tenderly',
          href: 'https://tenderly.co/',
        },
        {
          type: 'link',
          label: 'TrueBlocks',
          href: 'https://trueblocks.io/',
        },

      ],
    },
    {
      type: 'category',
      label: 'Oracles',
      collapsed: true,
      items: [
        'tools/oracles/chainlink',
        'tools/oracles/gas-price',
      ],
    },
    {
      type: 'category',
      label: 'Beacon Chain',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Deposit Tool',
          href: 'https://deposit.gnosischain.com/',
        },
        'tools/beacon-chain/liquid-staking',
      ],
    },
    {
      type: 'category',
      label: 'Other Tools',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Crypto Tax Calculator',
          href: 'https://cryptotaxcalculator.io/exchanges/xdai-tax/',
        },
        {
          type: 'link',
          label: 'Wrapeth',
          href: 'https://wrapeth.com/',
        },
        {
          type: 'link',
          label: 'CryptoFees',
          href: 'https://cryptofees.info/',
        },
        {
          type: 'link',
          label: 'DeFi Lama',
          href: 'https://defillama.com/chain/Gnosis',
        },
        {
          type: 'link',
          label: 'DeBank',
          href: 'https://debank.com/',
        },
        {
          type: 'link',
          label: 'Zerion',
          href: 'https://app.zerion.io/',
        },
        {
          type: 'link',
          label: 'Zapper',
          href: 'https://zapper.fi/',
        },
        {
          type: 'link',
          label: 'Revoke',
          href: 'https://revoke.cash/',
        },
      ],
    },
  ],
  bridge: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'bridges/overview',
        'bridges/governance',
        'bridges/audits',
        'bridges/roadmap'
      ]
    },
    {
      type: 'category',
      label: 'Native Bridges',
      collapsed: false,
      items: [
        'bridges/tokenbridge/xdai-bridge',
        'bridges/tokenbridge/amb-bridge',
        'bridges/tokenbridge/omnibridge',
        'bridges/tokenbridge/nft-bridge'
      ] 
    },
    { type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: [ 
        { type: 'autogenerated', dirName: 'bridges/tutorials' } 
      ]
    }
  ],
};

module.exports = sidebars;
