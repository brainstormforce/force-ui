// const Switch1 = (
// 	{
// 		checked = false,
//         onClick,
//         disabled = false,
//         size = "small",
//         onColor = switchVar.onColor,
//         offColor = switchVar.offColor,
//         thumbColor = switchVar.thumbColor,
//         label,
//         labelPosition = "right",
//         labelGap = switchVar.labelGap,
//         description,
//         descriptionGap = switchVar.descriptionGap,
// 		...props
// 	}
// ) => {
// 	const buttonSize = size ? 'small' : 'base';
// 	const variantClassNames = {
// 		small:
// 			'text-white bg-primary-900 hover:bg-blue-600 focus-visible:ring-blue-500 border border-solid border-blue-500',
// 		medium: 'text-blue-500 bg-white border border-solid border-blue-500 focus-visible:ring-blue-500',
// 	};
// 	const sizeClassNames = {
// 		small: {
// 			default: 'px-6 py-3',
// 			hasPrefixIcon: 'pl-4 pr-6 py-3',
// 			hasSuffixIcon: 'pl-6 pr-4 py-3',
// 		},
// 		medium: {
// 			default: 'px-4 py-3 h-11',
// 			hasPrefixIcon: 'pl-4 pr-6 py-3',
// 			hasSuffixIcon: 'pl-6 pr-4 py-3',
// 		},
// 	};
// 	const typographyClassNames = {
// 		base: 'text-base font-medium',
// 		small: 'text-sm font-medium',
// 	};
// 	const borderRadiusClassNames = {
// 		base: 'rounded-md',
// 		small: 'rounded',
// 	};

// 	const handleOnClick = ( event ) => {
// 		if ( !! onClick && typeof onClick === 'function' ) {
// 			onClick( event );
// 		}
// 	};

//     const handleOnclick = () => !disabled && onClick();

// 	return (
//         <div
//             containerType="flex"
//             gap={labelGap}
//             alignItems="center"
//             style={disabled ? { opacity: 0.5 } : {}}
//         >
//             {label && labelPosition === "left" && labelContent}
//             <div className={switchClass} onClick={handleOnclick}>
//                 <div className={thumbClass}></div>
//             </div>
//             {label && labelPosition === "right" && labelContent}
//         </div>
// 	);
// };

// export default Switch;

import React, { useState } from "react";
import classNames from "classnames";

const Switch = ({ checked = false, onClick, disabled = false, size = "small", onColor = switchVar.onColor, offColor = switchVar.offColor, thumbColor = switchVar.thumbColor, label, labelPosition = "right", labelGap = switchVar.labelGap, description, descriptionGap = switchVar.descriptionGap, ...props }) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className="flex items-center space-x-2">
			<div className="w-12">
				<label
					className={classNames("relative inline-flex items-center cursor-pointer hover:bg-gray-300 focus-within:ring-2 focus-within:ring-blue-500", {
						"opacity-50 pointer-events-none": disabled,
					})}
				>
					<input
						type="checkbox"
						className={classNames("sr-only peer", {
							"peer-checked:bg-blue-600": !disabled,
						})}
						checked={isChecked}
						onChange={() => setIsChecked(!isChecked)}
						disabled={disabled}
					/>
					<div
						className={classNames("w-10 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700", {
							"peer-checked:bg-blue-600": !disabled,
						})}
					></div>
					<span
						className={classNames("absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform", {
							"translate-x-full": isChecked,
							"translate-x-0": !isChecked,
							"peer-checked:translate-x-full": !disabled,
						})}
					></span>
				</label>
			</div>
			<div>
				<p>{label}</p>
				<p className="text-sm text-gray-500" dangerouslySetInnerHTML={description}></p>
			</div>
		</div>
	);
};

export default Switch;
