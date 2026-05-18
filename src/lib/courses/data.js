export const fetchCourses = async()=>{
     const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/courses`)
     const data = res.json();
     return data || [];
}