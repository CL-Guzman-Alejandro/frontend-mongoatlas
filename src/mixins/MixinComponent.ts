// Mixin Export
export default {
	methods: {
		/* <=================|==============================|=================> */
		/* <=================| PUBLIC DECLARATION FUNCTIONS |=================> */
		/* <=================|==============================|=================> */
		setStates: function(states: { [key: string]: any }) {
			for (const name in states) {
				this.states[name] = states[name]
			}
		}
	}
}