// Constants
import { Breakpoints } from '@/constants/common/Breakpoints'

export default {
	data: function(): object {
		return {
			responsive: {
				currentBreakpoint: undefined,
				enableResponsiveClass: false
			},
			breakpoints: [
				Breakpoints.XSmall,
				Breakpoints.Small,
				Breakpoints.Medium,
				Breakpoints.Large,
				Breakpoints.XLarge,
				Breakpoints.XXLarge,
			]
		}
	},

	created: function() {
		this._resizeEventHandler()
	},

	beforeMount: function() {
		window.addEventListener('resize', this._resizeEventHandler)
	},

	beforeDestroy: function() {
		window.removeEventListener('resize', this._resizeEventHandler)
	},

	computed: {
		_getResponsiveClass: function() {
			return { [`${this.getBreakpointPrefix()}`]: this.responsive.enableResponsiveClass }
		}
	},

	methods: {
		_resizeEventHandler: function() {
			const width = window.innerWidth
			const found = this.breakpoints.find((x: any) => width <= x) || Breakpoints.Widescreen
			this.responsive.currentBreakpoint = found
		},

		getBreakpointPrefix: function() {
			switch (this.responsive.currentBreakpoint) {
				case Breakpoints.XSmall: return 'xs'
				case Breakpoints.Small: return 'sm'
				case Breakpoints.Medium: return 'md'
				case Breakpoints.Large: return 'lg'
				case Breakpoints.XLarge: return 'xl'
				case Breakpoints.XXLarge: return 'xxl'
				case Breakpoints.Widescreen: return 'ws'
			}
		}
	},

	watch: {
		['responsive.currentBreakpoint']: function(newVal: any) {
			if ('_onResponsiveBreakpoint' in this) this._onResponsiveBreakpoint(newVal)
		}
	}
}