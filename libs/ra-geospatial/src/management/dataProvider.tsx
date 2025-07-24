import localStorageDataProvider from '../management/lsDataProvider';

export const dataProvider = localStorageDataProvider({
	localStorageUpdateDelay: 2,
	defaultData: {
		pois: [{ id: 0, title: 'poi', geom: '' }],
		properties: [{
			id: 0,
			title: 'property',
			geom: '',
		}],
		routes: [{
			id: 0,
			title: 'route',
			geom: '',
		}],
	},
});
