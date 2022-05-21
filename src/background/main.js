import hotReload from '@/utils/hotReload'
hotReload()

console.log('hello world background')

// 激活页面时yidong移动到第一个tab
chrome.tabs.onActivated.addListener(activeInfo => move(activeInfo));

async function move(activeInfo) {
  try {
    await chrome.tabs.move(activeInfo.tabId, {index: 0});
    console.log('Success.');
  } catch (error) {
    if (error == 'Error: Tabs cannot be edited right now (user may be dragging a tab).') {
      setTimeout(() => move(activeInfo), 50);
    }
  }
}

