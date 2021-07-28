
//controller for route users

const message = "<h1>Instructions</h1>"+
                "<p>1. get requests are available</p>"+
                "<p>2. example of get request: add=> '/user/userId' or 'books' to the current url(Note: userId is a variable)</p>"+
                "<p>3. userId can be => 'uni', 'hiyaaa', 'try' without quotations</p>";
export const home = (req,res) =>{
    res.send(message);
}
