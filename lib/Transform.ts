/**
 * Transform fetched data to robot readable format
 */
import { Argument, Gtip, GitTip } from './types/Gtip';

export function getArgumentsFromTip(tip: string): Argument[] {
    const regEx = /<(.*?)>/ig;
    const args: Argument[] = [];

    let match = regEx.exec(tip);
    while (match !== null) {
        args.push({ name: match[0], optional: false });
        match = regEx.exec(tip);
    }
    return args;
}

export function transformGitTips(gtips: GitTip[]): Gtip[] {
    return gtips.map((gtip): Gtip => ({
        title: gtip.title,
        tip: gtip.tip,
        args: getArgumentsFromTip(gtip.tip),
        alternatives: gtip.alternatives ? gtip.alternatives : []
    }));
}
