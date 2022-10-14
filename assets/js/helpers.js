/**
 * Asynkron function til at fetche API'er med
 * @param {String} endpoint 
 * @returns Data Array
 */
export async function fetchApi(endpoint) {
	try {
		const response = await fetch(endpoint)
		const result = await response.json()
		return result		
	} catch (error) {
		console.error(`Fejl i fetch2Api: ${error}`)
	}
}