<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Login</title>
</head>
<body>
  <h1>User Login</h1>
  <form id="loginForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"><br><br>
    <label for="address">Ethereum Address:</label>
    <input type="text" id="address" name="address"><br><br>
    <button type="submit" onclick="login()">Login</button>
  </form>

  <script src="https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
