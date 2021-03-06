'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert(
            'Dishes',
            [
                {
                    name: 'Falukorv och makaroner',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Havregrynsgröt',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        // await queryInterface.bulkDelete('Dishes', null, {
        //   truncate: true,
        //   cascade: true,
        //   restartIdentity: true
        // });
        await queryInterface.dropTable('Dishes');
    }
};
