export { }


declare namespace defaultTheme {
    let content: string[];
    namespace theme {
        namespace extend {
            let colors: {
                'brand-background-50': string;
                'brand-background-hover-100': string;
                'brand-200': string;
                'brand-border-300': string;
                'brand-400': string;
                'brand-500': string;
                'brand-primary-600': string;
                'brand-hover-700': string;
                'brand-800': string;
                'brand-900': string;
                'brand-text-950': string;
                'background-primary': string;
                'background-secondary': string;
                'background-inverse': string;
                'background-brand': string;
                'background-important': string;
                'field-primary-background': string;
                'field-secondary-background': string;
                'field-primary-hover': string;
                'field-secondary-hover': string;
                'field-dropzone-background': string;
                'field-border': string;
                'field-dropzone-background-hover': string;
                'field-dropzone-color': string;
                'field-label': string;
                'field-input': string;
                'field-helper': string;
                'field-background-disabled': string;
                'field-color-disabled': string;
                'field-placeholder': string;
                'field-border-disabled': string;
                'field-color-error': string;
                'field-border-error': string;
                'field-background-error': string;
                'field-required': string;
                'border-interactive': string;
                'border-subtle': string;
                'border-strong': string;
                'border-inverse': string;
                'border-disabled': string;
                'border-muted': string;
                'border-error': string;
                'border-transparent-subtle': string;
                'border-white': string;
                'text-primary': string;
                'text-secondary': string;
                'text-tertiary': string;
                'text-on-color': string;
                'text-error': string;
                'text-error-inverse': string;
                'text-inverse': string;
                'text-disabled': string;
                'text-on-button-disabled': string;
                'link-primary': string;
                'link-primary-hover': string;
                'link-inverse': string;
                'link-visited': string;
                'link-visited-inverse': string;
                'link-inverse-hover': string;
                'icon-primary': string;
                'icon-secondary': string;
                'icon-on-color': string;
                'icon-inverse': string;
                'icon-interactive': string;
                'icon-on-color-disabled': string;
                'icon-disabled': string;
                'support-error': string;
                'support-success': string;
                'support-warning': string;
                'support-info': string;
                'support-error-inverse': string;
                'support-success-inverse': string;
                'support-warning-inverse': string;
                'support-info-inverse': string;
                'button-primary': string;
                'button-primary-hover': string;
                'button-secondary': string;
                'button-secondary-hover': string;
                'button-tertiary': string;
                'button-tertiary-hover': string;
                'button-danger': string;
                'button-danger-secondary': string;
                'button-danger-hover': string;
                'button-disabled': string;
                'button-tertiary-border': string;
                'button-tertiary-color': string;
                focus: string;
                'focus-inset': string;
                'focus-inverse': string;
                'focus-inverse-inset': string;
                'focus-error': string;
                'focus-border': string;
                'focus-error-border': string;
                'misc-highlight': string;
                'misc-overlay': string;
                'misc-skeleton-background': string;
                'misc-skeleton-element': string;
                'misc-popup-button-hover': string;
                'misc-tab-item-hover': string;
                'misc-dropdown-hover': string;
                'misc-loader-base': string;
                'misc-loader-color': string;
                'misc-progress-background': string;
                'badge-background-gray': string;
                'badge-color-gray': string;
                'badge-hover-gray': string;
                'badge-border-gray': string;
                'badge-background-red': string;
                'badge-color-red': string;
                'badge-hover-red': string;
                'badge-border-red': string;
                'badge-background-yellow': string;
                'badge-color-yellow': string;
                'badge-hover-yellow': string;
                'badge-border-yellow': string;
                'badge-hover-green': string;
                'badge-border-green': string;
                'badge-background-green': string;
                'badge-color-green': string;
                'badge-background-sky': string;
                'badge-color-sky': string;
                'badge-hover-sky': string;
                'badge-border-sky': string;
                'badge-background-disabled': string;
                'badge-color-disabled': string;
                'badge-hover-disabled': string;
                'badge-border-disabled': string;
                'badge-background-important': string;
                'alert-background-neutral': string;
                'alert-border-neutral': string;
                'alert-background-danger': string;
                'alert-border-danger': string;
                'alert-background-warning': string;
                'alert-border-warning': string;
                'alert-background-green': string;
                'alert-border-green': string;
                'alert-background-info': string;
                'alert-border-info': string;
                'tab-background': string;
                'tab-border': string;
                'tooltip-background-light': string;
                'tooltip-background-dark': string;
                'toggle-off': string;
                'toggle-on': string;
                'toggle-dial-background': string;
                'toggle-off-hover': string;
                'toggle-off-border': string;
                'toggle-on-hover': string;
                'toggle-on-border': string;
                'toggle-on-disabled': string;
                'toggle-off-disabled': string;
            };
            let width: {
                '1/7': string;
                '1/8': string;
                '1/9': string;
                '1/10': string;
                '1/11': string;
                '1/12': string;
            };
            let boxShadow: {
                xs: string;
                'soft-shadow-sm': string;
                'soft-shadow': string;
                'soft-shadow-md': string;
                'soft-shadow-lg': string;
                'soft-shadow-xl': string;
                'soft-shadow-2xl': string;
                'soft-shadow-inner': string;
                'toggle-disabled': string;
            };
            namespace fontSize {
                let tiny: string;
            }
            let lineHeight: {
                11: string;
                9.5: string;
                7.5: string;
            };
            let letterSpacing: {
                2: string;
            };
            let size: {
                3.25: string;
            };
            let translate: {
                3.75: string;
            };
            let spacing: {
                4.5: string;
                5.5: string;
                120: string;
                95: string;
                141.5: string;
                188: string;
            };
            let zIndex: {
                999999: string;
            };
            let borderWidth: {
                0.5: string;
            };
        }
    }
    let plugins: {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    }[];
    namespace corePlugins {
        let preflight: boolean;
    }
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
        namespace a11y {
            namespace config {
                let rules: {
                    selector: string;
                    id: string;
                    enabled: boolean;
                }[];
            }
        }
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}

declare namespace _default {
    let title: string;
    namespace parameters {
        let layout: string;
    }
    let decorators: ((Story: any, parameters: any) => import("react/jsx-runtime").JSX.Element)[];
    let tags: string[];
}
