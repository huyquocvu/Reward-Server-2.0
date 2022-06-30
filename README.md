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
