function func()
{
    let name = document.getElementById('inputtext').value;
    
  
if(name == "bold" || name == "highlight" || name == "underline")
document.getElementById('basic').classList.add(name);

}

function toggle_par(x)
{

    switch(x)
    {
    case 1:
    document.getElementById('firstp').classList.toggle('hidden');
    break;
    case 2:
    document.getElementById('secondp').classList.toggle('hidden');
    break;
    case 3:
    document.getElementById('thirdp').classList.toggle('hidden');
    }
}

function clicker()
{
    let clickertext = document.getElementById('clickme');
    clickertext.textContent = 'Clicked';
    clickertext.classList.add('button-style');
}

