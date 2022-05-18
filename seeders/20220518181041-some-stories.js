"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Stories",
      [
        {
          name: "Best story",
          content: "Unlike anything you've heard before",
          imageUrl:
            "#https://www.belltreeforums.com/attachments/1590531878947-png.265979/",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Flowers 101",
          content: "It appears these are weeds",
          imageUrl:
            "https://64.media.tumblr.com/d4289a7a996280939b46c7653e0dd0f9/fcc3765c54474f76-9d/s400x600/3f3f1ca56f8c61c34788b46daf3ade7be7138b6b.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Museum",
          content: "Today I found some exotic flowers in the museum",
          imageUrl:
            "https://www.belltreeforums.com/attachments/molly5-jpg.276730/",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Outdoor library",
          content: "Amazing place to enjoy the good weather and a book",
          imageUrl:
            "https://bookstr.com/wp-content/uploads/2020/06/tumblr_2c038927b5f97105b6212620dae940eb_534aa083_640-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Stories", null, {});
  },
};
