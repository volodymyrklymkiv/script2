var n = prompt('Введіть число');
n = Math.round(Math.pow((1+Math.sqrt(5))/2,n)/Math.sqrt(5) - Math.pow((1-Math.sqrt(5))/2,n)/Math.sqrt(5));
document.write(n);