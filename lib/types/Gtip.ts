import * as t from 'io-ts';

export const GitTip = t.interface({
    title: t.string,
    tip: t.string,
    alternatives: t.union([t.undefined, t.array(t.string)])
});
export type GitTip = t.TypeOf<typeof GitTip>;

export const Argument = t.interface({
    name: t.string,
    optional: t.boolean
});
export type Argument = t.TypeOf<typeof Argument>; 1

export const Gtip = t.interface({
    title: t.string,
    tip: t.string,
    args: t.array(Argument),
    alternatives: t.array(t.string)
});
export type Gtip = t.TypeOf<typeof Gtip>;
