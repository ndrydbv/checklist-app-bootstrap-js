<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Check List v2.0</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" type="text/css" href="css/checkbox.css">
    <link rel="stylesheet" type="text/css" href="css/dropdown.css">

    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
  </head>
  <body>
    <div id="main" class="container">
      <div class="row">
        <h1>Check List</h1>
        <hr>

        <div class="dropdown">
          <button id="dropbtn" class="dropbtn">User</button>
          <div id="myDropdown" class="dropdown-content">
            <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
          </div>
        </div>

        <hr>
        <form action="get.php" method="get">

          <!--put this in form to be submitted-->
          <input type="text" id="item" name="item" value="" readonly>
          <br>
          <br>
          <div id="checks"></div>
          <button type="submit" class="btn btn-primary btn-block">Submit</button>

        </form>
      </div>
    </div>

  </body>
</html>
