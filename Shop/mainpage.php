<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en" dir="ltr" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="content-type" content="text/xml; charset=utf-8" />
  <!--ensures proper rendering and touch zooming on mobile devices-->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>homepage</title>
  <!--import google font-->
  <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet">
  <!--import style sheet-->
  <link rel="stylesheet" type = "text/css"
  href="style/shopstyle.css">
  <!--link javascript-->

<head>
<script src="https://use.fontawesome.com/041a8a6fad.js"></script>
<body>
<?php
  include("storescripts/connect_to_mysql.php");

  $query = "SELECT * FROM productlist";
  $response = @mysqli_query($dbc, $query);
  $productCount = mysqli_num_rows($response);

  include_once("../navbarTemplate.php");
?>
<div id="main-content">
  <div id="side-nav">
    <div class="side-nav-but">By Price, Low to High</div>
    <div class="side-nav-but">By Price, High to Low</div>
    <div class="side-nav-but">By Collection</div>
    <div class="side-nav-but">By Medium</div>
  </div>
  <div id=product-list>
    <?php
    while ($row = mysqli_fetch_array($response)){
      $name = $row["product_name"];
      $id = $row["product_id"];
      $price = $row["product_price"];
      $img = $row["product_image"];
      $description = $row["product_details"];
      $inStock = $row["product_inventory"];
      $element = '<div class=product id="product' . $id . '"><img src="imgs/'
      . $id . '.jpg" /><div class="text"><div class="details"><h3>'. $name .'</h3><h4 id="cart'
      . $id .'">Add to cart</h4></div><h4>$' . $price .'</h4></div></div>';
      echo $element;
    }
    ?>
  </div>
  </div>

</body>
