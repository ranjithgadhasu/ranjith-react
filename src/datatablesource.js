
export const userColumns = [{ field: "id", headerName: "ID", width: 70 }, {
   field: "user", headerName: "User", width: 230, renderCell: (params)=> {

    return (
        <div className="cellWithImg">
         <img className="cellImg" src={params.row.img} alt="avatar"/>
         {params.row.username}
        </div>
    )
},
},
{
    field:"email", 
    headerName:"Email", 
    width:230,
},
{
    field:"age", 
    headerName:"Age", 
    width:160,
},
{
    field:"status", 
    headerName:"Status", 
    width:230,

    renderCell: (params)=>{
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        );
  },
},
];


//temporay data
export const userRows =[
    {
    id: 1,
    username: "Snow",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqyaxK8Y_ggbgUHkcOivegcapuwPomgfj6g&usqp=CAU",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
    },
    {
        id:2,
        username: "Jamie Lannister",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqyaxK8Y_ggbgUHkcOivegcapuwPomgfj6g&usqp=CAU",
        status: "passive",
        email: "2snow@gmail.com",
        age: 42,
        },
        {
            id:3,
            username: "Lannister",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqyaxK8Y_ggbgUHkcOivegcapuwPomgfj6g&usqp=CAU",
            status: "pending",
            email: "3snow@gmail.com",
            age: 45,
            },
     {
    id:4,
    username: "Stark",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqyaxK8Y_ggbgUHkcOivegcapuwPomgfj6g&usqp=CAU",
    status: "active",
    email: "4snow@gmail.com",
    age: 16,
    },

    {
        id:5,
        username: "Tagaryen",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqyaxK8Y_ggbgUHkcOivegcapuwPomgfj6g&usqp=CAU",
        status: "passive",
        email: "5snow@gmail.com",
        age: 22,
        },
        
        {
            id: 6,
            username: "Snow",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqyaxK8Y_ggbgUHkcOivegcapuwPomgfj6g&usqp=CAU",
            status: "active",
            email: "1snow@gmail.com",
            age: 35,
            },
            {
                id:7,
                username: "Ferrara",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqyaxK8Y_ggbgUHkcOivegcapuwPomgfj6g&usqp=CAU",
                status: "passive",
                email: "2snow@gmail.com",
                age: 42,
                },
                {
                    id:8,
                    username: "Rossini",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqyaxK8Y_ggbgUHkcOivegcapuwPomgfj6g&usqp=CAU",
                    status: "pending",
                    email: "3snow@gmail.com",
                    age: 45,
                    },
             {
            id:9,
            username: "Harvey",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqyaxK8Y_ggbgUHkcOivegcapuwPomgfj6g&usqp=CAU",
            status: "active",
            email: "4snow@gmail.com",
            age: 16,
            },
        
            {
                id:10,
                username: "",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqyaxK8Y_ggbgUHkcOivegcapuwPomgfj6g&usqp=CAU",
                status: "passive",
                email: "5snow@gmail.com",
                age: 22,
                },
                
      
       
       

]
        
    
