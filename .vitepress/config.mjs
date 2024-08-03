import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'whatsApp系统指南',
  base: '/whatsApp-docs',
  description: 'A VitePress Site',
  cleanUrls: true,
  themeConfig: {
    outlineTitle: '文章目录',
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/page/00/在线聊天/快速入门在线聊天' },
    ],

    sidebar: [
      {
        text: '00 产品介绍',
        collapsed: true,
        items: [
          {
            text: '在线聊天',
            collapsed: true,
            items: [
              {
                text: '快速入门【在线聊天】',
                link: '/page/00/在线聊天/快速入门在线聊天',
              },
              {
                text: '快速检索会话及客户信息',
                link: '/page/00/在线聊天/快速检索会话及客户信息',
              },
              { text: '翻译客户语言', link: '/page/00/在线聊天/翻译客户语言' },
              { text: '多功能聊天窗', link: '/page/00/在线聊天/多功能聊天窗' },
              { text: '使用常用话术', link: '/page/00/在线聊天/使用常用话术' },
              { text: '完善客户画像', link: '/page/00/在线聊天/完善客户画像' },
              {
                text: '使用AI让聊天更加便捷',
                link: '/page/00/在线聊天/使用AI让聊天更加便捷',
              },
            ],
          },
          {
            text: '客户管理',
            collapsed: true,
            items: [
              {
                text: '快速入门【客户管理】',
                link: '/page/00/客户管理/快速入门客户管理',
              },
              {
                text: '客户列表',
                link: '/page/00/客户管理/客户列表',
              },
              { text: '会话管理', link: '/page/00/客户管理/会话管理' },
              { text: '标签管理', link: '/page/00/客户管理/标签管理' },
              { text: '话术库', link: '/page/00/客户管理/话术库' },
            ],
          },
          {
            text: '群发计划',
            collapsed: true,
            items: [
              {
                text: '快速入门【群发计划】',
                link: '/page/00/群发计划/快速入门群发计划',
              },
              {
                text: '消息群发',
                link: '/page/00/群发计划/消息群发',
              },
              {
                text: '第三方(EDM)代发',
                collapsed: true,
                items: [
                  {
                    text: 'Email(EDM)群发如何绑定域名',
                    link: '/page/00/群发计划/第三方(EDM)代发/Email(EDM)群发如何绑定域名',
                  },
                ],
              },
              {
                text: '群发模板（WhatsApp API和Email）',
                link: '/page/00/群发计划/群发模板(WhatsApp API和Email)',
              },
            ],
          },
          {
            text: '机器人',
            collapsed: true,
            items: [
              {
                text: '快速入门【机器人】',
                link: '/page/00/机器人/快速入门机器人',
              },
              {
                text: 'AI机器人',
                link: '/page/00/机器人/AI机器人',
              },
              {
                text: '自动化流程',
                collapsed: true,
                items: [
                  {
                    text: '配置及使用外部请求动作',
                    link: '/page/00/机器人/自动化流程/配置及使用外部请求动作',
                  },
                  {
                    text: '如何获取信使链接',
                    link: '/page/00/机器人/自动化流程/如何获取信使链接',
                  },
                ],
              },
              {
                text: 'AI语料库',
                link: '/page/00/机器人/AI语料库',
              },
              {
                text: '分流链接',
                link: '/page/00/机器人/分流链接',
              },
            ],
          },
          {
            text: '数据分析',
            collapsed: true,
            items: [
              {
                text: '快速入门【数据分析】',
                link: '/page/00/数据分析/快速入门数据分析',
              },
              {
                text: '渠道分析',
                link: '/page/00/数据分析/渠道分析',
              },
              {
                text: '服务概览',
                link: '/page/00/数据分析/服务概览',
              },
              {
                text: '大报表',
                link: '/page/00/数据分析/大报表',
              },
            ],
          },
          {
            text: '应用市场',
            collapsed: true,
            items: [
              {
                text: '快速入门【应用市场】',
                link: '/page/00/应用市场/快速入门应用市场',
              },
            ],
          },
          {
            text: '基础设置',
            collapsed: true,
            items: [
              {
                text: '快速入门【基础设置】',
                link: '/page/00/基础设置/快速入门基础设置',
              },
              {
                text: '聊天设置',
                collapsed: true,
                items: [
                  {
                    text: '如何获取免费翻译',
                    link: '/page/00/基础设置/聊天设置/如何获取免费翻译',
                  },
                ],
              },
              {
                text: '团队管理',
                link: '/page/00/基础设置/团队管理',
              },
              {
                text: '项目设置',
                link: '/page/00/基础设置/项目设置',
              },
              {
                text: '监控日志',
                link: '/page/00/基础设置/监控日志',
              },
              {
                text: '如何设置自动分配会话',
                link: '/page/00/基础设置/如何设置自动分配会话',
              },
            ],
          },
          {
            text: '关于我们',
            link: '/page/00/关于我们',
          },
        ],
      },
      {
        text: '01 WhatsApp介绍（热门）',
        collapsed: true,
        items: [
          {
            text: 'FaceBook公共主页添加WhatsApp按钮',
            link: '/page/01/FaceBook公共主页添加WhatsApp按钮',
          },
          {
            text: 'WhatsApp使用教程 (新人必看)',
            link: '/page/01/WhatsApp使用教程 (新人必看)',
          },
          {
            text: 'WhatsApp消息群发',
            link: '/page/01/WhatsApp消息群发',
          },
          {
            text: 'WhatsApp API群发模板申请',
            link: '/page/01/WhatsApp API群发模板申请',
          },
          {
            text: 'WhatsApp消息模板管理',
            link: '/page/01/WhatsApp消息模板管理',
          },
          {
            text: '官方WhatsApp API 费用说明',
            link: '/page/01/官方WhatsApp API 费用说明',
          },
          {
            text: '开通WhatsApp API号详细步骤',
            link: '/page/01/开通WhatsApp API号详细步骤',
          },
          {
            text: 'Cloud API 号码接入教程',
            link: '/page/01/Cloud API 号码接入教程',
          },
          {
            text: 'FaceBook创建WhatsApp Cloud Api号码教程',
            link: '/page/01/FaceBook创建WhatsApp Cloud Api号码教程',
          },
          {
            text: '如何在Ycloud注册Whatsapp 号码',
            link: '/page/01/如何在Ycloud注册Whatsapp 号码',
          },
          {
            text: 'WhatsApp绑定信用卡流程',
            link: '/page/01/WhatsApp绑定信用卡流程',
          },
        ],
      },
      {
        text: '02 快速入门',
        collapsed: true,
        items: [
          {
            text: 'WhatsApp使用教程 (新人必看)',
            link: '/page/02/WhatsApp使用教程 (新人必看)',
          },
          {
            text: 'Facebook渠道新手指南(汇总)',
            link: '/page/02/Facebook渠道新手指南(汇总)',
          },
          {
            text: '如何注册与登录',
            link: '/page/02/如何注册与登录',
          },
          {
            text: '如何修改账号密码',
            link: '/page/02/如何修改账号密码',
          },
          {
            text: '移动端',
            link: '/page/02/移动端',
          },
          {
            text: '视频教程',
            link: '/page/02/视频教程',
          },
          {
            text: '联系我们',
            link: '/page/02/联系我们',
          },
        ],
      },
      {
        text: '03 渠道集成',
        collapsed: true,
        items: [
          {
            text: '如何接入社媒聊天渠道',
            link: '/page/03/如何接入社媒聊天渠道/index',
          },
          {
            text: '聊天插件集成',
            collapsed: true,
            items: [
              {
                text: '如何编辑添加聊天插件',
                link: '/page/03/聊天插件集成/如何编辑添加聊天插件',
              },
              {
                text: '如何将聊天插件添加到自建站点',
                link: '/page/03/聊天插件集成/如何将聊天插件添加到自建站点',
              },
              {
                text: '如何添加引流部件到聊天插件',
                link: '/page/03/聊天插件集成/如何添加引流部件到聊天插件',
              },
              {
                text: '如何在独立站添加聊天插件',
                link: '/page/03/聊天插件集成/如何在独立站添加聊天插件',
              },
              {
                text: '独立站',
                collapsed: true,
                items: [
                  {
                    text: '店匠ShopLazza',
                    link: '/page/03/聊天插件集成/独立站/店匠ShopLazza',
                  },
                  {
                    text: 'ShopLine',
                    link: '/page/03/聊天插件集成/独立站/ShopLine',
                  },
                  {
                    text: 'WordPress',
                    link: '/page/03/聊天插件集成/独立站/WordPress',
                  },
                ],
              },
            ],
          },
          {
            text: 'TikTok',
            collapsed: true,
            items: [
              {
                text: '如何集成TikTok',
                link: '/page/03/TikTok/如何集成TikTok',
              },
            ],
          },
          {
            text: 'Facebook',
            collapsed: true,
            items: [
              {
                text: '如何集成Facebook',
                link: '/page/03/Facebook/如何集成Facebook',
              },
              {
                text: 'Facebook（Messenger）渠道集成相关功能介绍',
                link: '/page/03/Facebook/Facebook（Messenger）渠道集成相关功能介绍',
              },
              {
                text: 'Facebook用户群发、召回教程',
                link: '/page/03/Facebook/Facebook用户群发、召回教程',
              },
              {
                text: 'Facebook帖子自动化控评教程',
                link: '/page/03/Facebook/Facebook帖子自动化控评教程',
              },
              {
                text: 'Messenger销售聊单教程',
                link: '/page/03/Facebook/Messenger销售聊单教程',
              },
              {
                text: '广告投放接粉引流教程',
                link: '/page/03/Facebook/广告投放接粉引流教程',
              },
              {
                text: 'Facebook BM如何接收权限和邀请其他管理员教程',
                link: '/page/03/Facebook/Facebook BM如何接收权限和邀请其他管理员教程',
              },
            ],
          },
          {
            text: 'TelegramBot',
            collapsed: true,
            items: [
              {
                text: '如何集成TelegramBot',
                link: '/page/03/TelegramBot/如何集成TelegramBot',
              },
              {
                text: 'Telegram Bot渠道集成相关功能介绍',
                link: '/page/03/TelegramBot/TelegramBot渠道集成相关功能介绍',
              },
            ],
          },
          {
            text: 'Email',
            collapsed: true,
            items: [
              {
                text: '如何集成Email',
                link: '/page/03/Email/如何集成Email',
              },
              {
                text: '如何获取Email授权码',
                link: '/page/03/Email/如何获取Email授权码',
              },
              {
                text: 'Email渠道集成相关功能介绍',
                link: '/page/03/Email/Email渠道集成相关功能介绍',
              },
            ],
          },
          {
            text: 'Instagram',
            collapsed: true,
            items: [
              {
                text: '如何集成Instagram',
                link: '/page/03/Instagram/如何集成Instagram',
              },
              {
                text: 'Instagram渠道集成相关功能介绍',
                link: '/page/03/Instagram/Instagram渠道集成相关功能介绍',
              },
            ],
          },
          {
            text: 'Line',
            collapsed: true,
            items: [
              {
                text: '如何集成Line官方号',
                link: '/page/03/Line/如何集成Line官方号',
              },
              {
                text: '如何将Line集成至聊天插件',
                link: '/page/03/Line/如何将Line集成至聊天插件',
              },
              {
                text: 'Line渠道集成相关功能介绍',
                link: '/page/03/Line/Line渠道集成相关功能介绍',
              },
            ],
          },
          {
            text: 'WhatsAppAPI',
            collapsed: true,
            items: [
              {
                text: '如何自助注册 WhatsAppAPI号码(自助)',
                link: '/page/03/WhatsAppAPI/如何自助注册 WhatsAppAPI号码(自助)',
              },
              {
                text: '如何集成WhatsApp商业API号码(第三方)',
                link: '/page/03/WhatsAppAPI/如何集成WhatsApp商业API号码(第三方)',
              },
              {
                text: 'WhatsAppAPI渠道集成相关功能介绍',
                link: '/page/03/WhatsAppAPI/WhatsAppAPI渠道集成相关功能介绍',
              },
              {
                text: 'WhatsAPPApi账号封禁原因汇总',
                link: '/page/03/WhatsAppAPI/WhatsAPPApi账号封禁原因汇总',
              },
              {
                text: '集成ITNIOTECH商业API号码',
                link: '/page/03/WhatsAppAPI/集成ITNIOTECH商业API号码',
              },
              {
                text: '了解号码包介绍与差异',
                link: '/page/03/WhatsAppAPI/了解号码包介绍与差异',
              },
            ],
          },
          {
            text: '微信客服',
            collapsed: true,
            items: [
              {
                text: '如何集成微信客服',
                link: '/page/03/微信客服/如何集成微信客服',
              },
              {
                text: '微信客服渠道集成相关功能介绍',
                link: '/page/03/微信客服/微信客服渠道集成相关功能介绍',
              },
            ],
          },
          {
            text: 'Slack',
            collapsed: true,
            items: [
              {
                text: '如何集成Slack',
                link: '/page/03/Slack/如何集成Slack',
              },
              {
                text: 'Slack渠道集成相关功能介绍',
                link: '/page/03/Slack/Slack渠道集成相关功能介绍',
              },
            ],
          },
          {
            text: 'WhatsApp-App设备',
            collapsed: true,
            items: [
              {
                text: '如何集成WhatsApp-App设备',
                link: '/page/03/WhatsApp-App设备/如何集成WhatsApp-App设备',
              },
              {
                text: 'WhatsApp 设备渠道集成相关功能介绍',
                link: '/page/03/WhatsApp-App设备/WhatsApp 设备渠道集成相关功能介绍',
              },
            ],
          },
          {
            text: 'Telegram设备',
            collapsed: true,
            items: [
              {
                text: '如何集成Telegram-App设备',
                link: '/page/03/Telegram设备/如何集成Telegram-App设备',
              },
            ],
          },
        ],
      },
      {
        text: '04 开发对接',
        collapsed: true,
        items: [],
      },
      {
        text: '05 合作推广',
        collapsed: true,
        items: [],
      },
      {
        text: '06 更新日志',
        collapsed: true,
        items: [],
      },
      {
        text: '07 常见问题',
        collapsed: true,
        items: [],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      copyright: 'Copyright@ 2024 Albert WenZi',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
  },
})
