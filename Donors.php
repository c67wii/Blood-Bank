<?php
header('Content-Type: application/json');



$conn = mysqli-connect("localhost" , "root" , "" , "blood bank");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//SELECT * FROM `donors`
$sql = "SELECT * FROM donors";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["ID"]."<tr><td>".$row["Name"]."<tr><td>"
        .$row["Blood-Group"]."<tr><td>".$row["ontact"]."<tr><td>"
        .$row["Number-of-Donations"];
    }
    echo "</table>";
}

$conn->close();

echo json_encode($donors);
?>
