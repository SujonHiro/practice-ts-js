//একটি ফাংশন লিখুন যার নাম getStudentInfo। এই ফাংশনটি কোনো প্যারামিটার নিবে না, কিন্তু এটি একটি Tuple রিটার্ন করবে।
//Tuple-এর স্ট্রাকচার হবে: [studentName: string, age: number, isActive: boolean]।
//ফাংশনটি থেকে ["Rahim", 20, true] রিটার্ন করুন এবং কল করে ডাটাগুলো ডিস্ট্রাকচারিং করে আলাদা ভেরিয়েবলে রাখুন।


// function getStudentInf():[studentName:string, age:number,isActive:boolean]{
//     return ["Rahim",20,true]
// }

// const [studentName,age,isActive]=getStudentInf()


// console.log(studentName)
// console.log(age)



//একটি এমন Tuple তৈরি করুন যার ভ্যালু পরিবর্তন করা যাবে না (Immutable)।
//Tuple-এর নাম config এবং এতে দুটি ভ্যালু থাকবে: "Production" এবং 8080।
// এরপর চেষ্টা করে দেখুন প্রথম ভ্যালুটি "Development" দিয়ে চেঞ্জ করা যায় কি না।


// const config:readonly[string,number]=["Production",8080]

// type stringWithRest=[string, ...number[]]

// const values=["Score", 10, 20, 30, 40]

// console.log(values);


//[orderId: number, customerName: string, ...items: string[]]

// type OrderId=[orderId:number,customerName:string,...items:string[]]

// const orderid:OrderId=[2323,"Sijon", "mous","asda","asdfasd"]


// console.log(orderid)


function prepend<T extends any[],U>(tupple:T,item:U):[U,...T]{
return [item,...tupple]
}

const oldData=[1,2,4];

const newData=prepend(oldData,"start")

console.log(newData[3]);


