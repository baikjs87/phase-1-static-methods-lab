class Formatter {
	cosntructor(string) {
		this.string = string
	}
	static capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}
	static sanitize(string) {
		return string.replace(/[^a-z0-9 '-]/gi, "")
	}
	static titleize(string) {
		let splitString = string.toLowerCase().split(" ")
		const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
		for (let i = 0; i < splitString.length; i++) {
			if ((i > 0, !exceptions.includes(splitString[i]))) {
				splitString[0] = this.capitalize(splitString[0])
				splitString[i] = this.capitalize(splitString[i])
			}
		}
		return splitString.join(" ")
	}
}
