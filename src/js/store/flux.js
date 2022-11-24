const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			person: null,
			favorites: [],
			planetsList: [],
			planetDetails: null,
			vehiclesList: [],
			vehiclesDetails: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getPeople: async () => {
                try {
					return fetch("https://www.swapi.tech/api/people?page=1&limit=10", {
						method: "GET",
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => setStore({ people: data.results}));
				} catch (error) {
					return [];
				}
            },

			getPerson: id => {
				try {
					return fetch(`https://www.swapi.tech/api/people/${id}`, {
						method: "GET",
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => 
							setStore({ person: data.result}));
				} catch (error) {
					return [];
				}
			},

			addFavorites: itemName => {
				const {favorites} = getStore();
				if (!favorites.find(i => i == itemName )){
					favorites.push(itemName)
				}
				console.log(favorites)
				setStore({favorites})
			}, 

			deleteFavorites: itemIndex => {
				const {favorites} = getStore();
				const newFav = [...favorites]
				newFav.splice(itemIndex,1)
				setStore({favorites: newFav})
			},

			getPlanets: () => {
				try {
					return fetch("https://www.swapi.tech/api/planets?page=1&limit=10", {
						method: "GET",
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => setStore({ planetsList: data.results}));
				} catch (error) {
					return [];
				}
			},

			getPlanetsDetails: (id) => {
				try {
					return fetch(`https://www.swapi.tech/api/planets/${id}`, {
						method: "GET",
						redirect: "follow"
					})
						.then(response2 => response2.json())
						.then(data2 => setStore({ planetDetails: data2.result}));
				} catch (error) {
					return [];
				}
			},

			getVehicles: () => {
				try {
					return fetch("https://www.swapi.tech/api/vehicles?page=1&limit=10", {
						method: "GET",
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => setStore({ vehiclesList: data.results}));
				} catch (error) {
					return [];
				}
			},

			getVehiclesDetails: (id) => {
				try {
					return fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
						method: "GET",
						redirect: "follow"
					})
						.then(response3 => response3.json())
						.then(data3 => setStore({ vehiclesDetails: data3.result}));
				} catch (error) {
					return [];
				}
			},
		}
	};
};

export default getState;
