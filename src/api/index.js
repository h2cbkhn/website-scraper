import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import scrape from './scrape';

export default ({ config, db }) => {
	let api = Router();

	api.get('/scrape', scrape.scrape);

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
