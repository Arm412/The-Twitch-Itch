import React from 'react';

const BasicBtn = (props) => {
	return (
		<div className={props.btnClass}>
			<button
				onClick={props.onClick}
				disabled={props.disabled}
				className="basic-btn header-color primary-bg"
			>
				{props.btnText}
			</button>
		</div>
	);
};

export default BasicBtn;