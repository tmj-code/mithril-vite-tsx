import m from 'mithril';
import GreenText from './GreenText';

export default function(): m.Component {
    return {
        view: () => <h1>Hello <GreenText>Mithril</GreenText></h1>
    };
}
