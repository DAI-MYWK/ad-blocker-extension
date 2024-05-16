chrome.runtime.onInstalled.addListener(() => {
  const rules = [
    {
      id: 1,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||doubleclick.net",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    },
    {
      id: 2,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||adbrite.com",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    },
    {
      id: 3,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||exponential.com",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    },
    {
      id: 4,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||adversal.com",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    },
    {
      id: 5,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||adnxs.com",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    },
    {
      id: 6,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||adsafeprotected.com",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    },
    {
      id: 7,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||moatads.com",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    },
    {
      id: 8,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||googleadservices.com",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    },
    {
      id: 9,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||googlesyndication.com",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    },
    {
      id: 10,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||rubiconproject.com",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    },
    {
      id: 11,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "||nikkei.com",
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    }
  ];

  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: rules.map(rule => rule.id),
    addRules: rules
  });
});
