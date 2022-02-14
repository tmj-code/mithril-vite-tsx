import m from 'mithril';

export default function(): m.Component {
    return {
        view: (vnode: m.Vnode) => <span style='color: green'>{vnode.children}</span>
    };
}