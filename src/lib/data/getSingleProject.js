const getSingleProject =async(id)=>{
try {
    console.log('id', id)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/project/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    const singleProject = await res.json();
    return singleProject.product;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {};
  }
}

export default getSingleProject