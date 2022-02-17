import m from 'mithril';

export default class implements m.ClassComponent {
    view(vnode: m.Vnode) {
        return (
            <span style='color: green'>{vnode.children}</span>
        )
    }
}