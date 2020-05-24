# metadata-extractor
This tool can be used to extract metadata from Project Gutenberg titles and store the meta data in a mysql database.

## dependencies
- Requires the use of a package manager such as `yarn` or `npm`
- Requires either to have mysql installed and running, or docker to be installed and running

## setup
1. run `yarn install`
2. run `yarn build`
3. create an `.env` file at project root, based off `.env.example`, to match your database details. (example matches docker instance in next step)
4. run `yarn docker:db:run` (only if using docker)
5. run `db:create`
6. run `yarn db:migrate`

## usage
1. download Gutenberg titles archive from ​[here](https://www.gutenberg.org/wiki/Gutenberg:Feeds) and download the zip file of The Complete Project Gutenberg Catalog
2. extract archive and place resulting 'cache' file at the root of this project
3. to run the function against a single file run `yarn start /path/to/file` supplying the path to the rdf file you want to parse, for example: `yarn start /cache/epub/1/pg1`
4. to run the function against all the rdf files run `yarn start` (this currently results in a js out of memory error, as there are too many records to process to the db, requires better management of files, or a least chunking the data into smaller blocks)

## tests
To run unit test, run `yarn test`
