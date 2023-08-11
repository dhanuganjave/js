//immediately invoked function expression(iife)



(function chai()
{
    console.log('db connected');
})();
    


(()  =>  {
    console.log(`database connnected`)
})()


(  (name)  => {
    console.log(`db connected two ${name}`)
}) ('dhananjay')



