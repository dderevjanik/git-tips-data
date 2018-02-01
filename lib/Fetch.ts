import * as t from 'io-ts';
import fetch from 'node-fetch';
import { Gtip, GitTip } from './types/Gtip';

const URL_GIT_TIPS = 'https://raw.githubusercontent.com/git-tips/tips/master/tips.json';

export function fetchGitTips(): Promise<GitTip[]> {
    return new Promise((resolve, reject) => {
        fetch(URL_GIT_TIPS)
            .then((res) => res.text())
            .then((body) => {
                try {
                    const parsed = JSON.parse(body);
                    const errors = t.validate(parsed, t.array(GitTip));
                    resolve(parsed);
                } catch (e) {
                    resolve(e);
                }
            }).catch(e => {
                reject(e);
            })
    });
}
