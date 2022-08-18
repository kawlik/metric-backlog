export default function (props: { element: JSX.Element; hide: boolean }) {
	// component logic

	// component layout
	return props.hide ? <div className="hidden">{props.element}</div> : props.element;
}
