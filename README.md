Project6-OPC-snowtricks

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/351eff23f63b48c290e4c16b8ce67359)](https://www.codacy.com/manual/Magali-Rezeau/Project6-OPC-snowtricks?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Magali-Rezeau/Project6-OPC-snowtricks&amp;utm_campaign=Badge_Grade)

Jimmy Sweat is an ambitious entrepreneur passionate about snowboarding. Its objective is the creation of a collaborative site to make this sport known to the general public and help in the learning of tricks.

## Installation
1. Clone and download the repository GitHub :
```
    git clone https://github.com/Magali-Rezeau/Project6-OPC-snowtricks.git
```
2. Configure your environment variables such as connection to the database or your SMTP server or email address in the file `.env`.

3. Download and install the back-end dependencies of the project with [Composer](https://getcomposer.org/download/) :
```
    composer install
```
4. Download and install the project's front-end dependencies with [Npm](https://www.npmjs.com/get-npm) and [Yarn](https://yarnpkg.com/) :
```
    npm install
    npm install -g yarn
```
5. Create an asset build (thanks to Webpack Encore) with [Yarn](https://yarnpkg.com/) :
```
    yarn build
```
6. Create the database if it does not already exist, type the command below :
```
    php bin/console doctrine:database:create
```
7. Create the different tables in the database by applying migrations :
```
    php bin/console doctrine:migrations:migrate
```
8. Install fixtures to have a fictional data demo :
```
    php bin/console doctrine:fixtures:load
```
