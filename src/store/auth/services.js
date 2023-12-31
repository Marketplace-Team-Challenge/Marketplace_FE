export const saveToLocalStorage = (state) => {
	try {
		localStorage.setItem(`state`, JSON.stringify(state));
		const locStorage = localStorage.getItem('state');
		return locStorage;
	} catch (e) {
		console.error(e);
	}
};

export const loadFromLocalStorage = () => {
	try {
		const stateStr = localStorage.getItem(`state`);
		return stateStr ? JSON.parse(stateStr) : undefined;
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

// export const getCookieValue = (name) => {
// 	const cookies = document.cookie.split('; ');
// 	const cookie = cookies.find(cookie => cookie.startsWith(name));
// 	if (cookie) {
// 	return cookie.split('=')[1];
// 	}
// 	return null;
//   };