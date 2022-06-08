// Mixins
import MixinComponent from '@/mixins/MixinComponent'

// Utils
import { connectToRealmApp, getRealmAppId } from '@/utils/core/MongoDBUtils'

// Component Export
export default {
	name: 'Products',
	mixins: [MixinComponent],

	data: function(): object {
		return {
			states: {
				products: []
			}
		}
	},

	created: async function() {
		try {
			const userConnection = await connectToRealmApp(getRealmAppId())
			const products = await userConnection.functions.getAllProducts()
			this.setStates({ products })
		}
		catch (error) {
			console.error(error)
		}
	}
}