import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push("/clients/max/projectA");
  }

  return (
    <div>
      <h1>Client Project Page</h1>
      <button onClick={loadProjectHandler}></button>
    </div>
  );
}

export default ClientProjectPage;
