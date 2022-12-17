const { Project } = require("../../models");
const { validateNewProjectInput } = require("../../utils/validators");

const {
  UserInputError,
  AuthenticationError,
} = require("apollo-server-express");
const { authMiddleware } = require("../../utils/auth");

module.exports = {
  Query: {
    async getProjects() {
      try {
        const projects = await Project.find().sort({ createdAt: -1 });
        return projects;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getProject(_, { projectId }) {
      try {
        const project = await Project.findById({ _id: projectId });
        if (project) {
          return project;
        } else {
          throw new Error("Project not found.");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async project(
      _,
      { newProjectInput: { title, description, imageURL, githubURL, liveURL } }
    ) {
      // validate user input

      const { valid, errors } = validateNewProjectInput(
        title,
        description,
        imageURL,
        githubURL,
        liveURL
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const addProject = new Project({
        title,
        description,
        imageURL,
        githubURL,
        liveURL,
        createdAt: new Date().toISOString(),
      });
      const project = await addProject.save();
      return {
        ...project._doc,
        id: project._id,
      };
    },

    async updateProject(_, args, context) {
      const user = authMiddleware(context);
      if (args.title.trim() === "") throw new Error("Title must not be empty.");
      if (args.description.trim() === "")
        throw new Error("Description must not be empty.");
      if (args.imageURL.trim() === "")
        throw new Error("imageURL must not be empty.");
      if (args.githubURL.trim() === "")
        throw new Error("Github URL must not be empty.");
      if (args.liveURL.trim() === "")
        throw new Error("Live URL must not be empty.");
      return Project.findOneAndUpdate(
        { _id: args.projectId },
        {
          title: args.title,
          description: args.description,
          imageURL: args.imageURL,
          githubURL: args.githubURL,
          liveURL: args.liveURL
        },
        { new: true }
      );
    },

    async deleteProject(_, { projectId }, context) {
      const user = authMiddleware(context);
      try {
        const project = await Project.findById(projectId);
        if (user) {
          await project.delete();
          return "Delete was successully completed!";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
