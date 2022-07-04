# Rfid Server 2.0

## Start-Up

- Rename env.example to .env and remove first line
- Confirm mysql is running on your system with

```mysql --version```

- Confirm you can log in with

 ```mysql -uroot -p```

- and you know your password

- Update .env so that it includes your mysql user&pass, as well as your db name instead of 'testdb'
- Update init.sh to use your db name as well

```yarn install```

```./init/init.sh```

```yarn start```

## Starting with Docker

The provided docker-compose and dockerfile will create two containers for the app and db services

Simply run
```docker compose up```
To launch the db and app services. Note that if the app is unable to communicate with the db that the correct IP address for the db container must be provided in the .env file


