// Dependencies
import * as Realm from 'realm-web'

export async function connectToRealmApp(id: string) {
	const app = new Realm.App({ id })
	const credentials = Realm.Credentials.anonymous()
	try {
		return await app.logIn(credentials)
	}
	catch (err) {
		console.error(err)
	}
}

export function getRealmAppId() {
	return process.env.VUE_APP_REALM_APP_ID
}