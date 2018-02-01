// import { fetchGitTips } from './Fetch';
// import { transformGitTips } from './Transform';

export { fetchGitTips } from './Fetch';
export { Gtip, GitTip } from './types/Gtip';
export { transformGitTips } from './Transform';

// (async function () {
//     const tips = await fetchGitTips();
//     const gtips = transformGitTips(tips);
//     gtips.forEach(t => console.log(t));
// })();
