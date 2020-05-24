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
1. Download Gutenberg titles archive from [here](https://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.zip​)
2. extract archive and place resulting 'cache' file at the root of this project
3. run `yarn start`

## tests
To run unit test, run `yarn test`
