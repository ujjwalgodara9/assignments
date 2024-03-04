## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs=require('fs')

function edit(let str){
    return str.replace(/\s+/g,' ').trim()
}

let content

fs.readFile(filename,'etf',(err,data)=>{
    let ans=edit(data);

    fs.writeFile(filename,ans,(err)=>{
        console.log(done);
    });
})

