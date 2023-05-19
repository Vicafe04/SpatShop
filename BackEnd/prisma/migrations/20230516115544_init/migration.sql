/*
  Warnings:

  - You are about to drop the column `hotelId` on the `pet` table. All the data in the column will be lost.
  - You are about to drop the column `servicoId` on the `pet` table. All the data in the column will be lost.
  - Added the required column `petId` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petId` to the `Servico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `pet` DROP FOREIGN KEY `Pet_hotelId_fkey`;

-- DropForeignKey
ALTER TABLE `pet` DROP FOREIGN KEY `Pet_servicoId_fkey`;

-- AlterTable
ALTER TABLE `hotel` ADD COLUMN `petId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `pet` DROP COLUMN `hotelId`,
    DROP COLUMN `servicoId`;

-- AlterTable
ALTER TABLE `servico` ADD COLUMN `petId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Servico` ADD CONSTRAINT `Servico_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hotel` ADD CONSTRAINT `Hotel_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
