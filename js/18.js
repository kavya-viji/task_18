var n=prompt("Enter the Number");
var temp=n;
var sum=0;
while(temp>0)
{
var num=temp%10;

sum=sum+(num**3);

temp=parseInt(temp/10);
}
if(sum==n)
{
	document.write("The given number is a Armstrong number");	
}
else
{
	document.write("The given number is not a Armstrong number");	
}