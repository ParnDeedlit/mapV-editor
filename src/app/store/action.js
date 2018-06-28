import types from './types.js';

export default {
	changeLayerProperty({
		commit,
		dispatch,
		state
	}, property, {
		id,
		v
	}) {
		switch (property) {
			case 'visibility':
				{
					commit(types.CHANGE_LAYER_VISIBLE, {
						id,
						v
					});
					break;
				}
			case 'style':
				{
					commit(types.CHANGE_LAYER_STYLE, {
						id,
						v
					});
					break;
				}
			default:
				{
					console.warn('layer have no such property:' + property);
					break;
				}
		}
	},
	addData({
		commit,
		dispatch,
		state
	}, {
		data,
		name
	}) {
		commit(types.ADD_DATASOURCE, {
			data,
			name
		});
		// dispatch(types.CHANGE_ACTIVE_TAB, 'layer');
	},
	changeNavTab({
		commit
	}, newTab) {
		commit(types.CHANGE_ACTIVE_TAB, {
			newTab,
		});
	},
	addLayer({
		commit,
	}, layer) {
		commit(types.ADD_LAYER, {
			layer
		});
	},
	changeLayerData({
		commit,
	}, {
		layerid,
		newData
	}) {
		commit(types.CHANGE_LAYER_DATA, {
			layerid,
			newData,
		});
	},
};