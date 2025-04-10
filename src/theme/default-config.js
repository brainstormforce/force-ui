import plugin from 'tailwindcss/plugin';

const notRTLPlugin = plugin( ( { addVariant } ) => {
	addVariant( 'not-rtl', '&:not([dir="rtl"], [dir="rtl"] *)' );
} );

const defaultTheme = {
	content: [ 'node_modules/@bsf/force-ui/dist/components/**/*.js' ],
	theme: {
		extend: {
			colors: {
				// brand
				'brand-background-50': '#EFF6FF',
				'brand-background-hover-100': '#DBEAFE',
				'brand-200': '#BFDBFE',
				'brand-border-300': '#93C5FD',
				'brand-400': '#60A5FA',
				'brand-500': '#3B82F6',
				'brand-primary-600': '#2563EB',
				'brand-hover-700': '#1D4ED8',
				'brand-800': '#1E40AF',
				'brand-900': '#1E3A8A',
				'brand-text-950': '#172554',
				// background
				'background-primary': '#FFFFFF',
				'background-secondary': '#F3F4F6',
				'background-inverse': '#111827',
				'background-brand': '#2563EB',
				'background-important': '#DC2626',
				// field
				'field-primary-background': '#F9FAFB',
				'field-secondary-background': '#FFFFFF',
				'field-primary-hover': '#F3F4F6',
				'field-secondary-hover': '#F3F4F6',
				'field-dropzone-background': '#FFFFFF',
				'field-border': '#E5E7EB',
				'field-dropzone-background-hover': '#F9FAFB',
				'field-dropzone-color': '#2563EB',
				'field-label': '#111827',
				'field-input': '#111827',
				'field-helper': '#6B7280',
				'field-background-disabled': '#F9FAFB',
				'field-color-disabled': '#BDC1C7',
				'field-placeholder': '#6B7280',
				'field-border-disabled': '#F3F4F6',
				'field-color-error': '#DC2626',
				'field-border-error': '#FECACA',
				'field-background-error': '#FEF2F2',
				'field-required': '#DC2626',
				// border
				'border-interactive': '#2563EB',
				'border-subtle': '#E5E7EB',
				'border-strong': '#6B7280',
				'border-inverse': '#374151',
				'border-disabled': '#E5E7EB',
				'border-muted': '#E5E7EB',
				'border-error': '#DC2626',
				'border-transparent-subtle': '#37415114',
				'border-white': '#FFFFFF',
				// text
				'text-primary': '#111827',
				'text-secondary': '#4B5563',
				'text-tertiary': '#6B7280',
				'text-on-color': '#FFFFFF',
				'text-error': '#DC2626',
				'text-error-inverse': '#F87171',
				'text-inverse': '#FFFFFF',
				'text-disabled': '#BDC1C7',
				'text-on-button-disabled': '#9CA3AF',
				// link
				'link-primary': '#2563EB',
				'link-primary-hover': '#1D4ED8',
				'link-inverse': '#38BDF8',
				'link-visited': '#7C3AED',
				'link-visited-inverse': '#A78BFA',
				'link-inverse-hover': '#7DD3FC',
				// icon
				'icon-primary': '#111827',
				'icon-secondary': '#4B5563',
				'icon-on-color': '#FFFFFF',
				'icon-inverse': '#FFFFFF',
				'icon-interactive': '#2563EB',
				'icon-on-color-disabled': '#9CA3AF',
				'icon-disabled': '#BDC1C7',
				// support
				'support-error': '#DC2626',
				'support-success': '#16A34A',
				'support-warning': '#EAB308',
				'support-info': '#0284C7',
				'support-error-inverse': '#F87171',
				'support-success-inverse': '#4ADE80',
				'support-warning-inverse': '#FDE047',
				'support-info-inverse': '#38BDF8',
				// button
				'button-primary': '#2563EB',
				'button-primary-hover': '#1D4ED8',
				'button-secondary': '#1F2937',
				'button-secondary-hover': '#374151',
				'button-tertiary': '#FFFFFF',
				'button-tertiary-hover': '#F9FAFB',
				'button-danger': '#DC2626',
				'button-danger-secondary': '#DC2626',
				'button-danger-hover': '#B91C1C',
				'button-disabled': '#F3F4F6',
				'button-tertiary-border': '#E5E7EB',
				'button-tertiary-color': '#111827',
				// focus
				focus: '#2563EB',
				'focus-inset': '#FFFFFF',
				'focus-inverse': '#38BDF8',
				'focus-inverse-inset': '#111827',
				'focus-error': '#DC2626',
				'focus-border': '#BFDBFE',
				'focus-error-border': '#FECACA',
				// misc
				'misc-highlight': '#BFDBFE',
				'misc-overlay': '#11182780',
				'misc-skeleton-background': '#F3F4F6',
				'misc-skeleton-element': '#BDC1C7',
				'misc-popup-button-hover': '#1118270D',
				'misc-tab-item-hover': '#E5E7EB',
				'misc-dropdown-hover': '#F3F4F6',
				'misc-loader-base': '#1118270D',
				'misc-loader-color': '#2563EB',
				'misc-progress-background': '#E5E7EB',
				// badge
				'badge-background-gray': '#F9FAFB',
				'badge-color-gray': '#1F2937',
				'badge-hover-gray': '#F3F4F6',
				'badge-border-gray': '#E5E7EB',
				'badge-background-red': '#FEF2F2',
				'badge-color-red': '#B91C1C',
				'badge-hover-red': '#FEE2E2',
				'badge-border-red': '#FECACA',
				'badge-background-yellow': '#FEFCE8',
				'badge-color-yellow': '#A16207',
				'badge-hover-yellow': '#FEF9C3',
				'badge-border-yellow': '#FEF08A',
				'badge-hover-green': '#DCFCE7',
				'badge-border-green': '#BBF7D0',
				'badge-background-green': '#F0FDF4',
				'badge-color-green': '#15803D',
				'badge-background-sky': '#F0F9FF',
				'badge-color-sky': '#0369A1',
				'badge-hover-sky': '#E0F2FE',
				'badge-border-sky': '#BAE6FD',
				'badge-background-disabled': '#F3F4F6',
				'badge-color-disabled': '#BDC1C7',
				'badge-hover-disabled': '#F3F4F6',
				'badge-border-disabled': '#E5E7EB',
				'badge-background-important': '#DC2626',
				// alert
				'alert-background-neutral': '#FFFFFF',
				'alert-border-neutral': '#E5E7EB',
				'alert-background-danger': '#FEF2F2',
				'alert-border-danger': '#FECACA',
				'alert-background-warning': '#FEFCE8',
				'alert-border-warning': '#FEF08A',
				'alert-background-green': '#F0FDF4',
				'alert-border-green': '#BBF7D0',
				'alert-background-info': '#F0F9FF',
				'alert-border-info': '#BAE6FD',
				// tab
				'tab-background': '#F3F4F6',
				'tab-border': '#E5E7EB',
				// tooltip
				'tooltip-background-light': '#FFFFFF',
				'tooltip-background-dark': '#111827',
				// toggle
				'toggle-off': '#E5E7EB',
				'toggle-on': '#2563EB',
				'toggle-dial-background': '#FFFFFF',
				'toggle-off-hover': '#BDC1C7',
				'toggle-off-border': '#BDC1C7',
				'toggle-on-hover': '#3B82F6',
				'toggle-on-border': '#60A5FA',
				'toggle-on-disabled': '#EFF6FF',
				'toggle-off-disabled': '#F3F4F6',
			},
			width: {
				'1/7': '14.2857143%',
				'1/8': '12.5%',
				'1/9': '11.1111111%',
				'1/10': '10%',
				'1/11': '9.0909091%',
				'1/12': '8.3333333%',
			},
			boxShadow: {
				xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
				'soft-shadow-sm':
					'0px 6px 32px -12px rgba(149, 160, 178, 0.12)',
				'soft-shadow': '0px 8px 32px -12px rgba(149, 160, 178, 0.16)',
				'soft-shadow-md':
					'0px 10px 32px -12px rgba(149, 160, 178, 0.2)',
				'soft-shadow-lg':
					'0px 12px 32px -12px rgba(149, 160, 178, 0.24)',
				'soft-shadow-xl':
					'0px 16px 32px -12px rgba(149, 160, 178, 0.32)',
				'soft-shadow-2xl':
					'0px 24px 64px -12px rgba(149, 160, 178, 0.32)',
				'soft-shadow-inner': '0px 1px 1px 0px rgba(0, 0, 0, 0.05)',
				'toggle-disabled': '1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset',
			},
			fontSize: {
				tiny: '0.625rem',
			},
			lineHeight: {
				11: '2.75rem', // 44px
				9.5: '2.375rem', // 38px
				7.5: '1.875rem', // 30px
			},
			letterSpacing: {
				2: '0.125em', // 2px
			},
			size: {
				3.25: '0.8125rem', // 13px
			},
			translate: {
				3.75: '0.9375rem', // 15px
			},
			spacing: {
				4.5: '1.125rem', // 18px
				5.5: '1.375rem', // 22px
				120: '30rem', // 480px
				95: '23.75rem', // 380px
				141.5: '35.375rem', // 566px
				188: '47rem', // 752px
			},
			zIndex: {
				999999: '999999',
			},
			borderWidth: {
				0.5: '0.5px',
			},
		},
	},
	plugins: [ notRTLPlugin ],
	corePlugins: {
		preflight: false,
	},
};

export default defaultTheme;
