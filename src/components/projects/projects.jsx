import { ProjectDetails } from '..';

export const Projects = () => {
  return (
    <div className="w-2/3 xs:w-full">
      <div className="text-white mb-10">
        <a
          className="bg-green-500 p-4 rounded-lg text-xs font-semibold text-white cursor-pointer hover:bg-green-400 float-right"
          href="/new_project"
        >
          create new project
        </a>
      </div>
      <ProjectDetails />
      <ProjectDetails />
    </div>
  );
};
