export default function (props: { collapse: boolean; element: JSX.Element }) {
	// component logic

	// component layout
	return props.collapse ? <div className="invisible">{props.element}</div> : props.element;
}
