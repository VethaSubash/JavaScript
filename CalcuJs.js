let outputscreen = document.getElementById("Output");
function Display(num)
{
    outputscreen.value += num;
}
function Calculate()
{
    try
    {
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}
function Clear()
{
    outputscreen.value = "";
}
function Delete()
{
    outputscreen.value = outputscreen.value.slice(0,-1);
}