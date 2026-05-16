const getSingleProject =async(id)=>{
try {
    console.log('id', id)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/project/${id}`,{
      cache:"no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    const singleProject = await res.json();
    console.log(singleProject.project);
    return singleProject.project;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {};
  }
}

export default getSingleProject