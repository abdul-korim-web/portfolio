const getTopProject = async () => {
  try {
    console.log(process.env.NEXT_PUBLIC_SERVER_URL);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/topproject`);

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const project = await res.json();
    return project;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export default getTopProject;