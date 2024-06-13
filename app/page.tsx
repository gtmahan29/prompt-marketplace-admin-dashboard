import Image from "next/image";
import Heading from "@/utils/Heading";

import { useIsAdmin } from "@/utils/useIsAdmin";
import Sidebar from "../components/Sidebar";
import Error from "@/components/Error";

export default async function Page() {
  const isAdmin = await useIsAdmin();
  return (
    <>
      {isAdmin ? (
        <>
          <div>
            <Heading
              title="Intellify Ai"
              description="Intellify is a platform for students to learn and get help from teachers"
              keywords="Programming,MERN,Redux,Machine Learning"
            />
            <div className="flex min-h-screen">
              <div className="2xl:w-[16%] w-1/5">
                <Sidebar active={0} />
              </div>
              <div className="2xl:w-[84%] w-[80%]"></div>
            </div>
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
}
